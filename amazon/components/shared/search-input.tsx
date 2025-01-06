"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const SearchInput = (className: Props) => {
  return (
    <>
      <div className="flex flex-1 justify-between relative h-11 outline">
        <Search className={cn(`absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400 ${className}`)} />
        <input
          className="outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="search"
        />
        
      </div>
    </>
  );
};
