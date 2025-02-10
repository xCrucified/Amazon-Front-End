import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const phoneNumber = await req.json();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(
      // API_URL + "/api/Account/phoneNumber/" + phoneNumber,
      API_URL + "/api/Category/1233",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      return NextResponse.json({ phoneNumber: data, status: 200 });
    } else {
      return NextResponse.json({ status: 204 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
