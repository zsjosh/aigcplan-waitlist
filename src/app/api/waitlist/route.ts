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
    const { email, nickname } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create waitlist entry first
    const entry = await prisma.waitlistEntry.create({
      data: {
        email,
        nickname: nickname || null,
      },
    });

    // Try to send welcome email
    try {
      const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nickname }),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send welcome email:', await emailResponse.text());
      }
    } catch (error) {
      console.error('Error sending welcome email:', error);
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist', entry },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      );
    }
    console.error('Error creating waitlist entry:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
} 