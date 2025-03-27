import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export async function POST(request: Request) {
  try {
    console.log('Received waitlist request');
    const body = await request.json();
    console.log('Request body:', body);
    
    const { email, nickname } = body;

    if (!email) {
      console.log('Missing email in request');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create waitlist entry first
    console.log('Creating waitlist entry for:', email);
    const entry = await prisma.waitlistEntry.create({
      data: {
        email,
        nickname: nickname || null,
      },
    });
    console.log('Waitlist entry created:', entry);

    // Try to send welcome email
    let emailStatus = 'not_sent';
    try {
      console.log('Attempting to send welcome email to:', email);
      console.log('Using APP URL:', process.env.NEXT_PUBLIC_APP_URL);
      
      const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nickname }),
      });

      const emailData = await emailResponse.json();
      console.log('Email API response:', emailData);

      if (!emailResponse.ok) {
        console.error('Failed to send welcome email:', emailData);
        emailStatus = 'failed';
      } else {
        emailStatus = 'sent';
      }
    } catch (error) {
      console.error('Error sending welcome email:', error);
      emailStatus = 'failed';
    }

    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist', 
        entry,
        emailStatus,
        emailStatusMessage: emailStatus === 'sent' 
          ? 'Welcome email sent successfully'
          : emailStatus === 'failed'
          ? 'Welcome email failed to send, but you are on the waitlist'
          : 'Welcome email not sent'
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in waitlist API:', error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to join waitlist', details: error.message },
      { status: 500 }
    );
  }
} 