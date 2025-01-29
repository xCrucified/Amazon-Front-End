import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const {
    username,
    email,
    passwordHash,
    birthDate,
    countryCode,
    phoneNumber,
    avatarPicture,
  } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        username,
        passwordHash,
        email,
        birthDate: new Date(birthDate),
        countryCode,
        phoneNumber,
        avatarPicture,
      },
    });
    
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}
