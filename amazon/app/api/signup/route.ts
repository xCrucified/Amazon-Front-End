import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, phoneNumber, username, password } = await req.json();
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(API_URL + "/api/Account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, phoneNumber, username, password }),
    });
    if (response.ok) {
      return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({ status: 500 });
  } catch (error) {
    return NextResponse.json({ error: error, status: 500 });
  }
}
