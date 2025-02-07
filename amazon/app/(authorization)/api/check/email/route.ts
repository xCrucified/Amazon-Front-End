import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    // const response = await fetch(API_URL + "/api/Account/email/" + email, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();

    // if (data.email) {
    //   return NextResponse.json({ email: data, status: 200 });
    // }
    // if (data.phoneNumber) {
    //   return NextResponse.json({ phoneNumber: data, status: 200 });
    // }

    return NextResponse.json({ email: "qwe@qwe.co", status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
