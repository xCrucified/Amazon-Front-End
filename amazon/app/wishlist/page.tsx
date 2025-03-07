/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utilities/utils";
import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  className?: string;
}

interface Filters {
    id: number,
    name: string
}

const items: Filters[] = [
    { id: 1, name: "Price (low to high)" },
    { id: 2, name: "Price (high to low)" },
];

export const Page: React.FC<Props> = ({ className }) => {
  return (
    <Container
      className={cn(
        "flex flex-col w-[1026px] min-h-[100vh] mt-10 gap-5",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <button className="text-blue-900">Create a List</button>
          <div className="flex justify-start items-center border-2 rounded-xl bg-white">
            <img
              className="relative ml-2"
              src="/assets/images/search-black.svg"
              alt="search"
            ></img>
            <input
              className="text-blue-900 p-1 w-[357px] focus:outline-none rounded-tr-xl rounded-br-xl"
              placeholder="Search item"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center outline rounded-xl">
        <div className="flex justify-between w-full p-4 bg-white">
          <Label className="text-[32px]">Shopping List</Label>

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
              {items.map((item) => (
                  <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Container>
  );
};

export default Page;
