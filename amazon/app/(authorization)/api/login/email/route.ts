import { hashPassword } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { credential, password } = await req.json();

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/Account/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential,
          password: await hashPassword(password),
        }),
      }
    );

    const data = await response.json();

    const user = JSON.stringify({
      email: credential,
      password: data.passwordHash,
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
