import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { username, password, email, birthDate, phoneNumber, avatarPicture } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
        email,
        birthDate: new Date(birthDate),
        phoneNumber,
        avatarPicture,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'User creation failed: ' + error }, { status: 500 });
  }
}