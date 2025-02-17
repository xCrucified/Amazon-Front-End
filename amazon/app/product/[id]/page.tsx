/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/star-rating";

interface Props {
  className?: string;
  params: { id: string };
}

export const ProductPage: React.FC<Props> = ({ className, params }) => {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("isRed");
    if (savedState) {
      setIsRed(JSON.parse(savedState));
    }
  }, []);

  const handleButtonClick = () => {
    const newState = !isRed;
    setIsRed(newState);
    localStorage.setItem("isRed", JSON.stringify(newState));
  };

  return (
    <Container className="mb-10">
      <div
        className={cn(
          "flex gap-[56px] w-full h-full mt-[20px] justify-center p-6",
          className
        )}
      >
        <div className="w-[696px] rounded-md">
          <img src="/assets/images/productImg.png" alt="product" />
        </div>
        <div className="outline w-[740px] h-full">
          <div className="flex justify-between items-center">
            <Label className="text-[23px] font-bold w-[594px]">
              Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR
              Cameras
            </Label>
            <Button
              className="bg-inherit hover:bg-inherit shadow-none"
              onClick={handleButtonClick}
            >
              <img
                src={
                  isRed
                    ? "/assets/images/HeartBtn-F.svg"
                    : "/assets/images/HeartBtn-N.svg"
                }
                alt="save"
                width={32}
                height={32}
              />
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <StarRating key={0} rate={4.5} icon={false} />
            <Label className="w-[240px]">
              <span className="font-bold">{"200+ bought"}</span> in past month
            </Label>
          </div>
          <div className="flex rounded-lg w-[488px] h-[80px] justify-between ">
            <Button className="w-[50%] h-full bg-[#dedede] text-[#636363] hover:bg-gray-100 rounded-none border-[3px] border-[#a8a8a8] focus:border-[#5b6c8c] focus:border-4 focus:bg-[#f5f5f5] focus:text-black rounded-tl-lg rounded-bl-lg">
              <div className="w-[308px] h-[100%] flex gap-2 flex-col justify-between ">
                <p className="self-start">Buy new:</p>
                <p className="self-center text-[39px] mt-1">
                  <span className="text-lg">£</span>
                  {Number(199.25).toFixed(2)}
                </p>
              </div>
            </Button>

            <Button className="w-[50%] h-full bg-[#dedede] text-[#636363] hover:bg-gray-100 rounded-none border-[3px] border-[#a8a8a8] focus:border-[#5b6c8c] focus:border-4 focus:bg-[#f5f5f5] focus:text-black rounded-tr-lg rounded-br-lg">
              <div className="w-[308px] h-[100%] flex gap-2 flex-col justify-between ">
                <p className="self-center">Save with Used – Like New:</p>
                <p className="self-center text-[39px] mt-1">
                  <span className="text-lg">£</span>
                  {Number(199.25).toFixed(2)}
                </p>
              </div>
            </Button>
          </div>
          <span className="h-[24px] text-[#E30000] text-[13px] font-extralight">
            <p>Only 6 left in stock.</p>
          </span>
          <div>
            <p>Quantity:</p>
            <Quantity /> {/* RadioGroup shadcn */}
          </div>
        </div>
      </div>
      <div className="h-[220px] outline"></div>
    </Container>
  );
};

export default ProductPage;
