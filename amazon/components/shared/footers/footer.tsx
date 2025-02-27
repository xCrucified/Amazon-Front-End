"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utilities/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("h-[472px] bg-[#343a45] text-white", className)}>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-[100%] h-[78px] bg-[#5a6b8c] rounded-none shadow-none hover:bg-[#5a6b8c]"
      >
        <span className="text-lg font-bold">Back to top</span>
      </Button>
      <div className="h-[394px] p-[44px]">
        <div className="flex flex-row justify-center items-center gap-[132px] font-bold">
          <div className="flex flex-col gap-[26px]">
            <Link href={""}>Shipping Rates & Policies</Link>
            <Link href={""}>Onyx Prime</Link>
            <Link href={""}>Returns Are Easy</Link>
            <Link href={""}>Manage your Content and Devices</Link>
            <Link href={""}>Recalls and Product Safety Alerts</Link>
          </div>
          <div className="flex flex-col gap-[26px]">
            <Link href={""}>Registry & Gift List</Link>
            <Link href={""}>Customer Service</Link>
            <Link href={""}>Onyx Cash</Link>
            <Link href={""}>Gift Cards</Link>
            <Link href={""}>Onyx Currency Converter</Link>
          </div>
          <div className="flex flex-col gap-[26px]">
            <Link href={""}>Reload Your Balance</Link>
            <Link href={""}>Shop with Points</Link>
            <Link href={""}>Onyx Rewards Mastercard</Link>
            <Link href={""}>Independently Publish with Us</Link>
            <Link href={""}>Host an Onyx Hub</Link>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-[35px]">
          <div className="flex gap-[16px]">
            <Link href={""}>Conditions of Use</Link>
            <Link href={""}>Privacy Notice</Link>
            <Link href={""}>Interest-Based Ads</Link>
          </div>
          <div>
            <Label>© 2025, Onyx.com, Inc. or its affiliates</Label>
          </div>
          <div>
            <Label className="text-[#FFFFF] opacity-35">
              Onyx.com ULC | Rivne, Ukraine, M5H 3Y2 |0-837-216-3230
            </Label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
