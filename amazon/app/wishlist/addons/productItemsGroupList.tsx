/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProductItem from "./productItem";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Props {
  items: any[];
  className?: string;
}
const filterItems: Filters[] = [
  { id: 1, name: "Price (low to high)" },
  { id: 2, name: "Price (high to low)" },
];

interface Filters {
  id: number;
  name: string;
}

// "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce"
export const ProductItemsGroupList: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col justify-center items-center outline rounded-xl mb-10">
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
              {filterItems.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-10">
          {items.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              rate={product.rate}
              price={product.price}
              oldPrice={product.oldPrice}
              properties={[product.properties]}
              createDate={"12.12.2001"}
            />
          ))}
        </div>
        <div className="flex items-center justify-center my-4 w-[97%]">
          <div className="flex-1 border-t-2 border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">End of list</span>
          <div className="flex-1 border-t-2 border-gray-300"></div>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center outline rounded-xl">
        <div className="flex justify-between w-full p-4 bg-white">
          <Label className="text-[32px]">Maybe later</Label>

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

        <div className="flex items-center justify-center my-4 w-[97%]">
          <div className="flex-1 border-t-2 border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">End of list</span>
          <div className="flex-1 border-t-2 border-gray-300"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductItemsGroupList;
