/* eslint-disable @next/next/no-img-element */
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface Props {
  item: NameProps;
  className?: string;
}
interface NameProps {
    name: string;
}
export const Section: React.FC<Props> = ({ item }) => {
    const filterItems = [
        { id: 1, name: "Price (low to high)" },
        { id: 2, name: "Price (high to low)" }
      ];
  return (
    <div className="flex flex-col justify-center items-center outline rounded-xl">
      <div className="flex justify-between w-full p-4 bg-white">
        <Label className="text-[32px]">{item.name}</Label>

        <div className="flex gap-3">
          <button className="text-blue-900">
            <img src="/assets/images/products/export.svg" alt="export" />
          </button>
          <button className="text-blue-900">
            <img
              src="/assets/images/products/dots-three-outline.svg"
              alt="three-dots"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-between w-full p-4 bg-inherit">
        <div className="flex gap-4">
          <button>
            <img src="/assets/images/3x3dots.svg" alt="dots" />
          </button>
          <button>
            <img src="/assets/images/3lines.svg" alt="lines" />
          </button>
        </div>
        <Select>
          <SelectTrigger className="max-w-[200px] text-lg border-none">
            <SelectValue placeholder={"Filter&Sort"} />
          </SelectTrigger>
          <SelectContent className="text-black">
            {filterItems.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-center my-4 w-[97%]">
        <div className="flex-1 border-t-2 border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">End of list</span>
        <div className="flex-1 border-t-2 border-gray-300"></div>
      </div>
    </div>
  );
};

export default Section;
