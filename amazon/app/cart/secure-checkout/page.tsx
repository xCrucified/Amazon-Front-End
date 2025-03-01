"use client";

import { Label } from "@/components/ui/label";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { setItems } from "../page";
import Products from "@/components/shared/products";

export default function Page() {
  const cart = useSelector((state: RootState) => state.cart.products);

  return (
    <div className="flex w-[1492px] h-[300px] gap-[60px] mx-auto pt-12">
      <section className="w-[812px] flex flex-col gap-4">
        <section className="flex flex-col w-full h-[fit-content] bg-[#f0f0f0] p-5 rounded-xl">
          <Label className="text-[23px] font-bold pb-4">Add a delivery or pickup address</Label>
          <div className="flex gap-4">
            <div className="w-[172px] h-[fit-content] p-4 bg-white rounded-xl border-2 border-[#e8e8e8] gap-4">
              <div className="h-16 flex-col justify-center items-start gap-1 flex">
                <div className="h-5">Home</div>
                <div className="h-10 text-[#4b4b4b]">Ukraine, Rivne, 12346, Kosmos 43</div>
              </div>
            </div>
            <div className="w-[172px] h-[fit-content] p-4 bg-white rounded-xl border-2 border-[#e8e8e8]">
              Add a new delivery address
            </div>
            <div className="w-[172px] h-[fit-content] p-4 bg-white rounded-xl border-2 border-[#e8e8e8]">
              Find a pickup location nearby
            </div>
          </div>
        </section>
        <section className="w-full h-[fit-content] p-7 bg-[#f0f0f0] rounded-xl">
          <Label className="text-[23px] text-black/40 font-bold pb-4 leading-[23px]">
            Payment method
          </Label>
        </section>
        <section className="w-full h-[fit-content] p-7 bg-[#f0f0f0] rounded-xl">
          <Label className="text-[23px] text-black/40 font-bold pb-4 leading-[23px]">
            Items and shipping
          </Label>
        </section>
        <p className="text-[13px] text-black/75 pb-1">
          Need help? Check our{" "}
          <Link href="/help" className="text-[#37569e]">
            Help pages
          </Link>{" "}
          or{" "}
          <Link href="/contact-us" className="text-[#37569e] ">
            contact us
          </Link>
        </p>
        <p className="text-[15px] text-black/75 leading-[16px] pb-1">
          For an item ordered from Onyx.com: When you click the 'Place Your Order' button, we will
          send you an e-mail acknowledging receipt of your order. Your contract to purchase an item
          will not be complete until we send you an e-mail notifying you that the item has been
          shipped to you. By placing your order, you agree to Onyx.com&apos;s privacy notice and
          conditions of use.
        </p>
        <p className="text-[15px] text-black/75 leading-[16px]">
          Within 30 days of delivery, you may return new, unopened merchandise in its original
          condition. Exceptions and restrictions apply. See Onyx.com&apos;s{" "}
          <Link href="/refund" className="text-[#37569e]">
            Returns Policy.
          </Link>
        </p>
      </section>
      <section className="w-[612px] h-[fit-content] flex flex-col">
        <div className="flex flex-col gap-4 bg-[#f0f0f0] p-5 rounded-xl">
          <Label className="w-full flex items-end justify-between">
            <div className="text-[32px] font-bold leading-[32px]">Items in order</div>
            <div className="text-[23px] font-bold leading-[34px]">{setItems(cart)}</div>
          </Label>
          <Label className="text-[16px] leading-[18px]">
            Choose a shipping address and payment method in order to calculate shipping, handling,
            and tax.
          </Label>
          <Products />
        </div>
        <Link href="/order-price" className="text-[#37569E] text-right text-[14px] mt-4">
          How are shipping costs calculated?
        </Link>
      </section>
    </div>
  );
}
