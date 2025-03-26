/* eslint-disable @next/next/no-img-element */
"use client";

import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utilities/utils";
import React, { useState } from "react";
import CreateSection from "./addons/createSectionForm";
import ProductItemsGroupList from "./addons/productItemsGroupList";
import Section from "./addons/section";
import { any } from "zod";

interface Props {
  className?: string;
}


export const Page: React.FC<Props> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  return (
    <Container
      className={cn("flex flex-col w-[1026px] mt-10 gap-5", className)}
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
      <Section item={any} />
      {/* <ProductItemsGroupList
        items={[
          {
            id: 1,
            name: "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce",
            rate: 4,
            price: 33.33,
            oldPrice: 55.55,
            properties: "HUND",
            createDate: "12.12.2001",
          },
          {
            id: 2,
            name: "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce",
            rate: 4,
            price: 33.33,
            oldPrice: 55.55,
            properties: "HUND",
            createDate: "12.12.2001",
          },
          {
            id: 3,
            name: "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce",
            rate: 4,
            price: 33.33,
            oldPrice: 55.55,
            properties: "HUND",
            createDate: "12.12.2001",
          },
        ]}
      /> */}
    </Container>
  );
};

export default Page;
