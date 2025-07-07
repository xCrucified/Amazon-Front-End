"use server";

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PUBLIC_KEY = process.env.LIQPAY_PUBLIC_KEY!;
const PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { amount, description, order_id, card, card_exp_month, card_exp_year, card_cvv, items } =
      await req.json();

    const paymentData = {
      public_key: PUBLIC_KEY,
      version: 3,
      action: "pay",
      amount,
      currency: "USD",
      description,
      order_id,
      card,
      card_exp_month,
      card_exp_year,
      card_cvv,
      phone: "380950000001",
      sandbox: 1,
      items,
    };

    console.log(paymentData);

    const data = Buffer.from(JSON.stringify(paymentData)).toString("base64");
    const signature = crypto
      .createHash("sha1")
      .update(PRIVATE_KEY + data + PRIVATE_KEY)
      .digest("base64");

    const response = fetch("https://www.liqpay.ua/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data, signature }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error("Помилка:", error));

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error: "Помилка:" + error }, { status: 500 });
  }
}
