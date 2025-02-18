import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Categories from "../categories";
interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("h-[56px] w-[1492px] outline p-6", className)}>
      <div className="flex justify-between items-center h-[100%] w-[100%]">
        <Button className="h-[56px] w-[68px] transition-all duration-124 transform hover:translate-y-1 hover:border-b hover:border-black">
          <Image src={"/assets/images/AllBtn.svg"} alt={"All"} width={22} height={22} />
        </Button>

        <Categories />
      </div>
      {/* <div className="grid grid-cols-12 items-center gap-2 whitespace-nowrap">
        <div className="col-span-2 col-start-2 w-[68px] h-[56px] p-[16px] flex justify-between">
            <Button className="w-full transition-all duration-124 transform hover:translate-y-1 hover:border-b hover:border-black">
              <Image src={"/assets/images/AllBtn.svg"} alt={"All"} width={16} height={16}/>
            </Button>
        </div>
        <div className="col-span-6 flex justify-center items-center">
          <Categories />
        </div>
      </div> */}
    </div>
  );
};
