"use client";

import Checkout from "@/components/shared/cards/checkout-card";
import { Products } from "@/components/shared/cart-payment-products";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Product } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const setItems = (cart: Product[]) => {
  return cart.length > 1 ? cart.length.toString() + " items" : "one item";
};

export default function Page() {
  const [cart, setCart] = useState<any>([]);

  async function handleDeleteAll() {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Cart/deleteAll`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="w-[1492px] flex flex-row-reverse p-6 gap-8 mx-auto">
            <Checkout />
            <section className="w-full flex flex-col bg-white rounded-lg mx-auto p-10 pt-8">
              <Label className="w-full flex items-end justify-between">
                <div className="text-[32px] font-bold">Shopping cart</div>
                <div className="text-[23px] font-bold leading-[34px]">{setItems(cart)}</div>
              </Label>
              <Button
                variant="ghost"
                type="button"
                className="w-[fit-content] text-[#37569E] hover:text-[#222935] text-base py-1 my-4"
                onClick={handleDeleteAll}
              >
                Delete all items
              </Button>
              <Products controls />
            </section>
          </div>
          <div className="w-[1492px] mx-auto p-6 pt-0 text-[11px] leading-[13px]">
            The price and availability of items at Onyx.com are subject to change. The shopping cart
            is a temporary place to store a list of your items and reflects each item's most recent
            price.
            <br />
            Do you have a gift card or promotional code? We'll ask you to enter your claim code when
            it's time to pay.
          </div>
        </>
      ) : (
        <div className="flex flex-col w-[1012px] mx-auto h-full">
          <div className="w-full flex flex-col gap-3 mt-10 mb-4 p-10 bg-[#f0f0f0] rounded-xl">
            <div className="text-[32px] font-bold">Your Onyx Cart is empty</div>
            <div className="flex flex-col gap-1 leading-[18px]">
              Your shopping cart lives to serve. Give it purpose – fill it with groceries, clothing,
              household supplies, electronics and more.
              <div className="gap-1 inline-flex leading-[18px]">
                Continue shopping on the
                <Link href="/" className="text-[#37569e] leading-[18px]">
                  Onyx.com homepage,
                </Link>
                learn about
                <Link href="#" className="text-[#37569e] leading-[18px]">
                  today's deals,
                </Link>
                or visit your
                <Link href="/wishlist" className="text-[#37569e] leading-[18px]">
                  Wish List.
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[1000px] mx-auto text-[11px] leading-[13px] mb-[8vh]">
            The price and availability of items at Onyx.com are subject to change. The shopping cart
            is a temporary place to store a list of your items and reflects each item's most recent
            price.
            <br />
            Do you have a gift card or promotional code? We'll ask you to enter your claim code when
            it's time to pay.
          </div>
        </div>
      )}
    </>
  );
}
