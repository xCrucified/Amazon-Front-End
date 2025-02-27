import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import Categories from "../categories";
import Image from "next/image";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("h-[56px] w-[1492px] p-6", className)}>
      <div className="flex justify-between items-center h-[100%] w-[100%]">
        <Button className="h-[56px] w-[68px] transition-all duration-124 transform hover:translate-y-1 hover:bg-gray-100 bg-white">
          <Image
            src={"/assets/images/AllBtn.svg"}
            alt={"All"}
            width={22}
            height={22}
          />
        </Button>

        <Categories />
      </div>
    </div>
  );
};
