/* eslint-disable @next/next/no-img-element */
"use client";

import StarRating from "@/components/ui/star-rating";
import { cn } from "@/lib/utilities/utils";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  name: string;
  rate: number;
  price: number;
  oldPrice: number;
  properties: string[];
  createDate: string;
  className?: string;
}

export const ProductItem: React.FC<Props> = ({
  id,
  name,
  rate,
  price,
  oldPrice,
  properties,
  createDate,
  className,
}) => {
  return (
    <div className={cn("flex w-full h-full", className)}>
      <div key={id} className="flex p-3 mx-[24px] gap-[36px] w-full rounded-2xl bg-white">
        <img
          src="/assets/images/products/mat.svg"
          className="w-[211px] h-[213px]"
          alt="img"
        />
        <div className="flex flex-col w-[582px] h-full py-3 gap-2.5">
          <div className="flex flex-col">
            <a href="product/[id]" className="text-[12px] text-blue-900">
              {name}
            </a>
            <p className="text-[12px] text-green-400">In Stock</p>
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="flex">
              <StarRating className="w-[130px]" rate={rate} />
              <p className="text-[16px] text-blue-900 opacity-65">6,934</p>
            </div>
            <p className="text-[12px] opacity-45">1K + bought this month</p>
          </div>
          <div className="flex flex-col justify-between text-[14px]">
            <div className="flex gap-1">
              <p className="font-bold">Color:</p>
              <p>{properties}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Style:</p>
              <p>{properties}</p>
            </div>
          </div>
          <div className="flex text-[13px]">
            <p>Item added {createDate}</p>
          </div>
          <div className="flex h-full text-[16px] gap-5 text-blue-900 opacity-85">
            <button>Add a note</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="flex flex-col w-[140px] text-[21px]">
          <del className="self-end text-[#a2a5ab]">
            <p className="text-base text-[#a2a5ab]">£{oldPrice}</p>
          </del>
          <p className="text-black self-end font-bold">£{price}</p>
        </div>
        <div className="absolute grid place-items-center right-[456px] bottom-[292px]">
          <Link href={"product/" + id} className="absolute grid place-items-center bottom-2 right-0 z-10 w-[265px] h-[48px] bg-[#E16C60] rounded-lg font-bold text-white text-[19px]">
            Add to Card
          </Link>
          <img  src="/assets/images/Union.svg" alt="misc" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
