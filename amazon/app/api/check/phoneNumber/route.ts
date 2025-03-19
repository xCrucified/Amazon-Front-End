import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const phoneNumber = await req.json();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(
      API_URL + "/api/Account/check-phone-number?phonenumber=" + phoneNumber,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();    
    if (data.exists) {
      return NextResponse.json({ exists: true, status: 200 });
    } else {
      return NextResponse.json({ exists: false, status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
