import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface DeliveryDatedProps {
  id: string;
  label: string;
  date: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export const DateCard: React.FC<DeliveryDatedProps> = ({ id, label, date, selected, onSelect }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        selected ? "border-[#e16c60]" : hovered ? "border-[#e16c60]" : "border-[#e8e8e8]",
        "w-[172px] flex flex-col justify-between p-4 bg-white rounded-xl border-[3px] gap-4 cursor-pointer transition-all ease-in-out duration-100"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center justify-between">
        <Label className="text-[16px] leading-[16px]">{label}</Label>
        <div
          className={cn(
            selected ? "border-[#e16c60] border-[7px]" : "border-[#5e5e5e] border-[3px]",
            "w-[20px] h-[20px] ml-auto rounded-full hover:border-[#e16c60] transition-all ease-in-out duration-100"
          )}
        />
      </div>
      <div className="h-[fit-content] flex-col justify-center items-start gap-0 flex">
        <Label className="text-[16px] text-emerald-500 leading-[20px]">get it on {date}</Label>
      </div>
    </div>
  );
};
