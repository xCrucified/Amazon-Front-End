import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/Category/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
  }
}
