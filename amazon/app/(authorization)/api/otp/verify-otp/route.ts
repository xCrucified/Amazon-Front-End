import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // const { otp } = await req.json();
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    // const response = await fetch(API_URL + "/api/Account/verify-otp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(otp),
    // });
    // const data = await response.json();

    // if (response.ok) {
    //   return NextResponse.json({ confirmed: data.confirmed ? true : false, data });
    // } else {
    //   return NextResponse.json({ error: data.error || "Failed to send OTP" });
    // }
    return NextResponse.json({ confirmed: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error, status: 500 });
  }
}
