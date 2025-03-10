import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode("supersecretkey_123");

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  if (!token) {
    console.log("No auth token found, redirecting to login.");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await jwtVerify(token, SECRET_KEY);
    return NextResponse.next();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log("Invalid token, redirecting to login.");
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"], // Проверка только для маршрутов /admin/*
};
