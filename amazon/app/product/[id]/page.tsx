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
    <Container>
      <div
        className={cn(
          "flex outline gap-[56px] w-full h-full mt-[20px] justify-center p-6",
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
          <div>
            {/* TODO:
            <p>buy new</p>
            <p>save with used</p> */}
          </div>
        </div>
      </div>
      <div className="h-[220px] outline"></div>
    </Container>
  );
};

export default ProductPage;
