"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const SearchInput = () => {
  return (
    <div className="flex relative rounded-[8px] h-[56px] w-[920px]">
      <div className="relative min-w-[100%] min-h-[100%] justify-center items-center">
        <input
          className="rounded-[8px] bg-transparent bg-white w-[100%] h-[100%] pr-12 focus:outline-none p-3 text-[#343a45]"
          type="text"
          placeholder="Search Onyx"
        />
        <Button className="absolute right-0.5 top-1/2 transform -translate-y-1/2 items-center justify-center bg-[#343a45] hover:bg-[#343a45/90] h-11 w-11 rounded-tl-3xl">
          <div className="flex justify-between items-center absolute right-[40px] gap-4">
            <label className="text-[#343a45] text-lg font-bold">⌘+K</label>
            <Image
              src={"./assets/images/Search.svg"}
              alt={""}
              width={128}
              height={128}
              className="w-[36px]"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
