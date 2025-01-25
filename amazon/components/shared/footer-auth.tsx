import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const FooterAuth: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("flex flex-col gap-6 items-center mt-12", className)}>
      <div className="flex justify-between w-full p-3">
        <Link href="/use" className="underline text-[13px] text-[#37569E] hover:text-[#222935]">Conditions of Use</Link>
        <Link href="/privacy" className="underline text-[13px] text-[#37569E] hover:text-[#222935]">Privacy Notice</Link>
        <Link href="/help" className="underline text-[13px] text-[#37569E] hover:text-[#222935]">Help</Link>
      </div>
      <span className="text-[13px]">© 2025, Onyx.com, Inc. or its affiliates</span>
    </footer>
  );
};

export default FooterAuth;
