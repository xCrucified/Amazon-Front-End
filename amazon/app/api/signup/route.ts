import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  let { username, password, email, birthDate, countryCode, phoneNumber, avatarPicture } = await req.json();
  phoneNumber = "+" + countryCode + phoneNumber;

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