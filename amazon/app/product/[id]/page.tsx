/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/star-rating";
import Quantity from "@/components/ui/products-quantity";

interface Props {
  className?: string;
  params: { id: string };
}

export const ProductPage: React.FC<Props> = ({ className, params }) => {
  const [selected, setSelected] = useState<number | null>(null);
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
        <div className="w-[740px] h-full">
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
          <div className="flex rounded-lg w-[488px] h-[80px] justify-between">
            <Button
              onClick={() => setSelected(1)}
              className={cn(
                "w-[50%] h-full bg-[#dedede] text-[#636363] hover:bg-gray-100 rounded-none border-[3px] border-[#a8a8a8] rounded-tl-lg rounded-bl-lg",
                selected === 1
                  ? "border-[#5b6c8c] border-4 bg-[#f5f5f5] text-black"
                  : ""
              )}
            >
              <div className="w-[308px] h-[100%] flex gap-2 flex-col justify-between">
                <p className="self-start">Buy new:</p>
                <p className="self-center text-[39px] mt-1">
                  <span className="text-lg">£</span>
                  {Number(199.25).toFixed(2)}
                </p>
              </div>
            </Button>

            <Button
              onClick={() => setSelected(2)}
              className={cn(
                "w-[50%] h-full bg-[#dedede] text-[#636363] hover:bg-gray-100 rounded-none border-[3px] border-[#a8a8a8] rounded-tr-lg rounded-br-lg",
                selected === 2
                  ? "border-[#5b6c8c] border-4 bg-[#f5f5f5] text-black"
                  : ""
              )}
            >
              <div className="w-[308px] h-[100%] flex gap-2 flex-col justify-between">
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
          <div className="mt-[24px]">
            <p>Quantity:</p>
            <Quantity />
          </div>
          <div className="w-[419px] h-[56px] mb-3">
            <div className="w-full h-full flex justify-start items-center">
              <Button className="w-[60%] bg-red-400 shadow-red-400 hover:bg-red-400">
                Buy now
              </Button>
              <Button className="w-[40%] bg-inherit shadow-none text-black hover:bg-inherit">
                <img
                  src="/assets/images/products/cart-btn.svg"
                  alt="cart"
                  style={{ filter: "brightness(0) saturate(100%)" }}
                  width={23}
                />
                Add to cart
              </Button>
            </div>
          </div>
          <span className="h-[64px] w-full bg-black relative">
            <span className="flex gap-1">
              <p className="text-blue-300 border-b-blue-300 border-b-2">
                FREE delivery
              </p>
              <p className="font-bold">Monday, January 20.</p>
              <p>Order within</p>
              <p className="text-green-500">20 hrs 15 mins</p>
            </span>
            <span className="flex gap-1">
              <p>Or fastest delivery</p>
              <p className="font-bold">Saturday, January 18</p>
            </span>
          </span>
          <div>
            outline
            name
            outline
            name
            outline
            name
            outline
            name
          </div>
        </div>
      </div>
      <div>
        <Label>Product information</Label>
      </div>
    </Container>
  );
};

export default ProductPage;
