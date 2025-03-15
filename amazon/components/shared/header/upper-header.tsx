"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../container";
import Link from "next/link";
import { CountryDialog } from "../country-dialog";
import ComboboxLanguage from "../checkbox-language";
import Image from "next/image";
import { cn } from "@/lib/utilities/utils";

interface Props {
  className?: string;
}

export const UpperHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[100%] h-[60px] bg-[#353b46]", className)}>
      <Container className="w-[1175px] h-[100%] flex justify-between p-2 items-center">
        <div className="w-[115px]">
          <CountryDialog />
        </div>

        <div className="w-[220px] text-white flex gap-1">
          <label>New customer?</label>
          <Link href="/signup" className="border-b-[1.5px] border-dotted">
            Start here.
          </Link>
        </div>

        <div className="w-[120px] flex justify-center">
          <Image
            src="/assets/images/Language.svg"
            alt="coord"
            width={20}
            height={20}
          />
          <ComboboxLanguage className="text-white"/>
        </div>
      </Container>
    </div>
  );
};

export default UpperHeader;
