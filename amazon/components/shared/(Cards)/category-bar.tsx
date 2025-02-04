/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Container } from "../container";
import { Title } from "@/components/ui/title";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "@/components/ui/label";
// import { useAppDispatch } from "@/hooks/hooks";
// import { setActiveId } from "@/store/slices/categorySlice";

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  className?: string;
}

export const CategoryBar: React.FC<Props> = ({ className }) => {
  // const dispatch = useAppDispatch();

  return (
    <Container
      className={cn("flex flex-row justify-center h-[596px] gap-3", className)}
    >
      <div className="w-[435px] h-[100%] bg-white rounded-3xl shadow-md p-4">
        <Title
          text={"Today’s Deals"}
          size={"xl"}
          className="font-bold text-[#353B46]"
        />

        <img
          src="/assets/images/products/category1.svg"
          alt="pylesmok"
          className="w-[100%] h-[80%]"
        ></img>

        <div className="flex flex-row justify-around items-center mt-0">
          <Label className="text-sm">Find Items On Sale With 50 – 75%</Label>
          <Link
            href={"categoryName"}
            className="flex w-[153px] bg-[#f2f5f7] rounded-full h-[56px] justify-evenly shadow-none hover:bg-gray-200 items-center"
          >
            <Label className="text-black text-base">Let`s see</Label>
            <div className="bg-black rounded-full p-3 left-2 relative">
              <img
                src="/assets/images/arrow-top-up.svg"
                alt="arrow"
                className="w-[100%] h-[100%]"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="w-[284px] h-[50%] bg-white rounded-3xl shadow-md p-4">
          <div className="flex text-[#9C9C9C] items-center p-3 gap-1">
            <img src="/assets/images/categoryIcon.svg" alt="cetegory" />
            <Label className="text-sm">Category</Label>
          </div>
          <Label className="text-xl font-bold p-3">Office Products</Label>
          <img src="/assets/images/products/category2.svg" alt="categ2" />
          <div className="flex justify-between items-center text-[#828282]">
            <Label className="text-sm">+5,000 products</Label>
            <Link href={"category2Name"} className="text-sm">
              Explore more
            </Link>
          </div>
        </div>

        <div className="w-[284px] h-[50%] bg-[#343a45] rounded-3xl shadow-md p-4">
          <div className="grid grid-rows-3 grid-cols-10">
            <Label className="text-3xl text-white w-[100%] col-span-10">
              See personalized recommendations
            </Label>

            <Link
              href={"categoryName"}
              className="flex bottom-1 row-start-4 col-start-[4] left-1 w-[174px] bg-[#95989e] rounded-full h-[56px] justify-evenly shadow-none hover:bg-gray-400 items-center relative"
            >
              <Label className="text-white text-lg font-bold">Sign in</Label>
              <div className="bg-red-400 rounded-full w-[46px] h-[46px] left-4 relative flex items-center justify-center ">
                <img
                  src="/assets/images/arrow-right.svg"
                  alt="arrow"
                  className="w-[50%] h-[50%]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[435px] h-[100%] bg-white rounded-3xl shadow-md p-4">
        <Title
          text={"Shop all New Year, Now You"}
          size={"xl"}
          className="font-bold text-[#353B46]"
        />

        <img
          src="/assets/images/products/category3.svg"
          alt="pylesmok"
          className="w-[100%] h-[70%]"
        ></img>

        <div className="flex flex-row justify-around items-center">
          <Link
            href={"categoryName"}
            className="flex w-[100%] bg-[#f2f5f7] rounded-full h-[56px] justify-center shadow-none hover:bg-gray-200 items-center bottom-[4px] relative"
          >
            <Label className="text-black text-base flex-grow text-center left-4 relative">Shop all New Year, Now You</Label>
            <div className="bg-black rounded-full p-3 right-2 relative">
              <img
              src="/assets/images/arrow-top-up.svg"
              alt="arrow"
              className="w-[100%] h-[100%]"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
      <div className="w-[284px] h-[50%] bg-white rounded-3xl shadow-md p-4">
          <div className="flex text-[#9C9C9C] items-center p-3 gap-1">
            <img src="/assets/images/categoryIcon.svg" alt="cetegory" />
            <Label className="text-sm">Category</Label>
          </div>
          <Label className="text-xl font-bold p-3">Office Products</Label>
          <img src="/assets/images/products/category4.svg" alt="categ2" />
          <div className="flex justify-between items-center text-[#828282]">
            <Label className="text-sm">+8,000 products</Label>
            <Link href={"category2Name"} className="text-sm">
              Explore more
            </Link>
          </div>
        </div>
        
        <div className="w-[284px] h-[50%] bg-white rounded-3xl shadow-md p-4">
          <div className="flex text-[#9C9C9C] items-center p-3 gap-1">
            <img src="/assets/images/categoryIcon.svg" alt="cetegory" />
            <Label className="text-sm">Category</Label>
          </div>
          <Label className="text-xl font-bold p-3">Office Products</Label>
          <img src="/assets/images/products/category5.svg" alt="categ2" />
          <div className="flex justify-between items-center text-[#828282]">
            <Label className="text-sm">+5,000 products</Label>
            <Link href={"category2Name"} className="text-sm">
              Explore more
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
