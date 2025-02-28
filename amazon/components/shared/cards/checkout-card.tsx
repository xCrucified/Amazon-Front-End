import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utilities/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const Checkout: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[292px] flex flex-col p-4 pt-3 bg-white rounded-lg", className)}>
      <div className="w-full flex flex-col text-[13px] leading-[15px] gap-2">
        <Image
          src="/assets/images/check-circle.svg"
          width={48}
          height={48}
          alt="Check circle"
          className="self-center"
        />
        <span className="text-[#009a14]">
          Your order qualifies for FREE shipping (excludes remote locations).
          <span className="text-black pl-1">Choose this option at checkout.</span>
          <Link href="/shipping-policy" className="text-[#37569e] pl-1">
            Details
          </Link>
        </span>
        <div className="flex flex-col gap-6 text-[19px] mb-3">
          Subtotal (1 item):
          <div>
            <span className="text-[15px]">£</span>
            <span className="font-bold text-[28px]">19.99</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="gift"
            className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[2px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none"
          />
          <Label className="text-[11px]">This order contains a gift</Label>
        </div>
        <Button variant="figmaPrimary">Proceed to checkout</Button>
        <div className="flex justify-start items-center bg-[#f1f4f7] rounded-lg">
          <Image
            src="/assets/images/InfoOutline.svg"
            width={36}
            height={26}
            alt="info-outline"
            className="m-[20px]"
          />
          <div className="flex flex-col pt-[16px] pb-[16px] gap-3">
            <span className="text-[13px] leading-[18px]">
              Free, fast delivery. No order minimum. Exclusive savings. Start your free 30-day free
              trial of Prime
            </span>
            <Link href="/prime" className="text-[#37569E] text-sm leading-[18px]">
              Try Prime
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
