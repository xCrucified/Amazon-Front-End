/* eslint-disable @next/next/no-img-element */
"use client";

import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utilities/utils";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductItem from "./addons/productItem";
import CreateSection from "./addons/createSectionForm";

interface Props {
  className?: string;
}

interface Filters {
  id: number;
  name: string;
}

const items: Filters[] = [
  { id: 1, name: "Price (low to high)" },
  { id: 2, name: "Price (high to low)" },
];

export const Page: React.FC<Props> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  return (
    <Container
      className={cn(
        "flex flex-col w-[1026px] mt-10 gap-5",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <button onClick={() => handleImageClick()} className="text-blue-900">
            Create a List
          </button>
          {isModalOpen && (
            <CreateSection
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          )}
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
      <div className="flex flex-col gap-12">
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

          <ProductItem
            name={
              "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce"
            }
            rate={4}
            price={33.33}
            oldPrice={55.55}
            properties={"Hut"}
            createDate={"12.12.2001"}
          />

          <div className="flex items-center justify-center my-4 w-[97%]">
            <div className="flex-1 border-t-2 border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">End of list</span>
            <div className="flex-1 border-t-2 border-gray-300"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center outline rounded-xl">
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

          {/* <ProductItem
            id={0}
            name={
              "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce"
            }
            rate={4}
            price={33.33}
            oldPrice={55.55}
            properties={"Hut"}
            createDate={"12.12.2001"}
          /> */}

          <div className="flex items-center justify-center my-4 w-[97%]">
            <div className="flex-1 border-t-2 border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">End of list</span>
            <div className="flex-1 border-t-2 border-gray-300"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
