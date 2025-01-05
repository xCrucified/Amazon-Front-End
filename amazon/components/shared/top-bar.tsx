import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Categories from "./categories";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("sticky top-0 bg-white py-5 shadow-lg z-10", className)}>
      <div className="grid grid-cols-12 items-center gap-2">
        <div className="col-span-2 col-start-2 w-[85px] flex justify-center">
          <Button className="w-full">All</Button>
        </div>
        <div className="col-span-6 flex justify-center">
          <Categories />
        </div>
      </div>
    </div>
  );
};
