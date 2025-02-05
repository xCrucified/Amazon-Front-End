import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    if(email) {
      const response = await fetch(API_URL + "/api/Account/email/{" + email + "}")
    }
    
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
