"use client";

import Checkout from "@/components/shared/cards/checkout-card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState([""]);

  return (
    <>
      {items.length > 0 ? (
        <>
          <div className="w-[1492px] flex flex-row-reverse p-6 gap-1 mx-auto">
            <Checkout />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-[1012px] mx-auto">
            <div className="w-full flex flex-col gap-3 mt-10 mb-4 p-10 bg-[#f0f0f0] rounded-xl">
              <div className="text-[32px] font-bold">Your Onyx Cart is empty</div>
              <div className="flex flex-col gap-1 leading-[18px]">
                Your shopping cart lives to serve. Give it purpose – fill it with groceries,
                clothing, household supplies, electronics and more.
                <div className="gap-1 inline-flex leading-[18px]">
                  Continue shopping on the
                  <Link href="/" className="text-[#37569e] leading-[18px]">
                    Onyx.com homepage,
                  </Link>
                  learn about
                  <Link href="/deals" className="text-[#37569e] leading-[18px]">
                    today's deals,
                  </Link>
                  or visit your
                  <Link href="/wishlist" className="text-[#37569e] leading-[18px]">
                    Wish List.
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[1000px] mx-auto text-[11px] leading-[13px]">
              The price and availability of items at Onyx.com are subject to change. The shopping
              cart is a temporary place to store a list of your items and reflects each item's most
              recent price.
              <br />
              Do you have a gift card or promotional code? We'll ask you to enter your claim code
              when it's time to pay.
            </div>
            <div className="fixed left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none">
              <div className="h-[70px] flex-col justify-center items-center gap-2 inline-flex">
                <Image src="/assets/images/cart_empty.svg" height={40} width={40} alt="No data" />
                <div className="text-center text-black/25 text-sm leading-snug">No Data</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
