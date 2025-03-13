import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

const PUBLIC_KEY = process.env.LIQPAY_PUBLIC_KEY!;
const PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY!;
const CALLBACK_URL = process.env.NEXT_PUBLIC_LIQPAY_CALLBACK_URL!;

export async function POST(req: Request) {
  try {
    const { amount, currency, order_id, description } = await req.json();

    const paymentData = {
      version: 3,
      public_key: PUBLIC_KEY,
      action: "pay",
      amount,
      currency,
      description,
      order_id,
      result_url: CALLBACK_URL,
      server_url: CALLBACK_URL,
    };

    const jsonString = JSON.stringify(paymentData);
    const data = Buffer.from(jsonString).toString("base64");
    const signature = CryptoJS.SHA1(PRIVATE_KEY + data + PRIVATE_KEY).toString(CryptoJS.enc.Base64);

    return NextResponse.json({ data, signature });
  } catch (error) {
    return NextResponse.json({ error: "Помилка створення платежу" }, { status: 500 });
  }
}
