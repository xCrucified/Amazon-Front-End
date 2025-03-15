import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

const PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY!;

export async function POST(req: Request) {
  const { data, signature } = await req.json();

  // Перевірка підпису
  const expectedSignature = CryptoJS.SHA1(PRIVATE_KEY + data + PRIVATE_KEY).toString(
    CryptoJS.enc.Base64
  );
  if (signature !== expectedSignature) {
    return NextResponse.json({ error: "Невірний підпис" }, { status: 400 });
  }

  const paymentData = JSON.parse(Buffer.from(data, "base64").toString("utf-8"));
  console.log("LiqPay callback:", paymentData);

  return NextResponse.json({ message: "Callback отримано" });
}
