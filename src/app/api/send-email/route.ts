import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const { email, nickname } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.warn('Resend API key is not configured. Skipping email sending.');
      return NextResponse.json(
        { message: 'Email service is not configured' },
        { status: 200 }
      );
    }

    const data = await resend.emails.send({
      from: 'AIGC Plan <noreply@aigcplan.com>',
      to: email,
      subject: 'Welcome to AIGC Plan!',
      react: EmailTemplate({ email, nickname }),
      replyTo: process.env.REPLY_TO_EMAIL,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 