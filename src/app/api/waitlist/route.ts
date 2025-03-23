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
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    const entry = await prisma.waitlistEntry.create({
      data: { email },
    });

    return NextResponse.json(
      { message: 'Successfully joined waitlist', entry },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { message: 'This email is already on the waitlist' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { message: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
} 