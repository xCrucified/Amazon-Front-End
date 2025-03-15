import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { credential, password } = await req.json(); 
  try {    
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/Account/login-via-phone",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: credential,
          password: password,
        }),
      }
    );
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
