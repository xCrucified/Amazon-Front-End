import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const {
    UserName,
    Email,
    PasswordHash,
    birthDate,
    //CountryCode,
    PhoneNumber,
    AvatarPicture,
  } = await req.json();

  try {
    const user = await prisma.aspNetUsers.create({
      data: {
        Id: crypto.randomUUID(),
        UserName,
        PasswordHash,
        Email,
        BirthDate: new Date(birthDate),
        //CountryCode,
        PhoneNumber,
        AvatarPicture,
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
