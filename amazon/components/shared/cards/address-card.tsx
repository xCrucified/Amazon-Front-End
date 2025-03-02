import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utilities/utils";
import Countries from "@/lib/countries";

interface AddressCardProps {
  id: string;
  label?: string | "";
  country: string;
  city: string;
  postalCode: string;
  street?: string | "";
  building?: string | "";
  selected: boolean;
  onSelect: (id: string) => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({
  id,
  label,
  country,
  city,
  postalCode,
  street,
  building,
  selected,
  onSelect,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        selected ? "border-[#e16c60]" : hovered ? "border-[#e16c60]" : "border-[#e8e8e8]",
        "w-[fit-content] h-[fit-content] flex flex-col p-4 bg-white rounded-xl border-[3px] gap-4 cursor-pointer transition-all ease-in-out duration-100"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(id)}
    >
      <div
        className={cn(
          selected ? "border-[#e16c60] border-[7px]" : "border-[#5e5e5e] border-[3px]",
          "w-[20px] h-[20px] ml-auto rounded-full hover:border-[#e16c60] transition-all ease-in-out duration-100"
        )}
      />
      <div className="h-[fit-content] flex-col justify-center items-start gap-1 flex">
        <Label className="text-[16px] leading-[20px]">{label}</Label>
        <Label className="flex text-[14px] leading-[20px] text-[#4b4b4b] max-w-[150px] text-wrap">
          {Countries.find((c) => c.value === country)?.label}
          {", " + city}
          {", " + postalCode}
          {street && ", " + street}
          {building && ", " + building}
        </Label>
      </div>
    </div>
  );
};
