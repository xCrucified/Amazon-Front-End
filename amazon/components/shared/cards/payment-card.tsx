import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PaymentCardProps {
  id: string;
  name: string;
  cardNumber: string;
  expiry: string;
  cardType: "visa" | "mastercard";
  selected: boolean;
  onSelect: (id: string) => void;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({
  id,
  name,
  cardNumber,
  expiry,
  cardType,
  selected,
  onSelect,
}) => {
  const [hovered, setHovered] = useState(false);

  const last4Digits = cardNumber.replace(/\s+/g, "").slice(-4);

  return (
    <div
      className={cn(
        selected ? "border-[#e16c60]" : hovered ? "border-[#e16c60]" : "border-[#e8e8e8]",
        "w-[172px] h-[fit-content] min-h-[150px] flex flex-col justify-between p-4 bg-white rounded-xl border-[3px] gap-4 cursor-pointer transition-all ease-in-out duration-100"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center justify-between">
        <Image
          src={
            cardType === "visa" ? "/assets/images/visa-logo.svg" : "/assets/images/mastercard copy.svg"
          }
          height={48}
          width={48}
          alt="card logo"
        />
        <div
          className={cn(
            selected ? "border-[#e16c60] border-[7px]" : "border-[#5e5e5e] border-[3px]",
            "w-[20px] h-[20px] ml-auto rounded-full hover:border-[#e16c60] transition-all ease-in-out duration-100"
          )}
        />
      </div>
      <div className="h-[fit-content] flex-col justify-center items-start gap-0 flex">
        <Label className="text-[16px] leading-[20px]">{name}</Label>
        <Label className="flex text-[14px] leading-[20px] text-[#4b4b4b] max-w-[150px] text-wrap">
          XXXX {last4Digits}
        </Label>
        <Label className="flex text-[14px] leading-[20px] text-[#4b4b4b] max-w-[150px] text-wrap">
          Exp. {expiry}
        </Label>
      </div>
    </div>
  );
};
