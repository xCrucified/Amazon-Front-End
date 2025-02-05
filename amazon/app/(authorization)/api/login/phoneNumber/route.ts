import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { phoneNumber } = await req.json();

  try {
    const user = await prisma.aspNetUsers.findFirst({
      where: {
        PhoneNumber: phoneNumber,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
