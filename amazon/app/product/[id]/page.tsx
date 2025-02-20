/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/star-rating";
import Quantity from "@/components/ui/products-quantity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  className?: string;
  params: { id: string };
}

export const ProductPage: React.FC<Props> = ({ className, params }) => {
  const [selected, setSelected] = useState<number | null>(1);
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
      <div className="w-full h-full flex gap-[56px] mt-[20px] p-6">
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
          <div className="flex rounded-lg w-[488px] h-[80px] justify-between mt-5">
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
            <Quantity className="mt-2" />
          </div>
          <div className="w-[419px] h-[56px] mb-3">
            <div className="w-full h-[56px] flex justify-start items-center mt-7">
              <Button className="w-[60%] h-full bg-red-400 shadow-red-400 hover:bg-red-400">
                Buy now
              </Button>
              <Button className="w-[40%] h-full bg-inherit shadow-none text-black hover:bg-inherit">
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
            <Accordion type="multiple" className="w-full mt-[24px]">
              <AccordionItem value="item-1" className="border-t-2">
                <AccordionTrigger className="font-bold">
                  Product details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Ships Brand</Label>
                    <p>Canon</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Focal length description</Label>
                    <p>EF 75-300mm f/4-5.6 III</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Lens type</Label>
                    <p>Telephoto</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Compatible mountings</Label>
                    <p>Canon EF</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Camera lens description</Label>
                    <p>300 millimeters</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold">
                  About this item
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc ml-5">
                    <li>
                      75-300mm telephoto zoom lens with f/4-5.6 maximum aperture
                      for Canon SLR cameras
                    </li>
                    <li>
                      Improved mechanism makes zooming smoother; front part of
                      zoom ring sports silver ring
                    </li>
                    <li>
                      Measures 2.8 inches in diameter and 4.8 inches long;
                      weighs 16.8 ounces
                    </li>
                    <li>Filter size: 58mm</li>
                    <li>Maximum aperture: 1:4-5.6</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold">
                  Payment
                </AccordionTrigger>
                <AccordionContent>
                  We work hard to protect your security and privacy. Our payment
                  security system encrypts your information during transmission.
                  We don’t share your credit card details with third-party
                  sellers, and we don’t sell your information to others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold">
                  Returns
                </AccordionTrigger>
                <AccordionContent>
                  This item can be returned in its original condition for a full
                  refund or replacement within 30 days of receipt.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="mt-[20px] m-6 border-b-[2px]">
        <Label className="text-[20px]">Product information</Label>
      </div>
      <div className="w-full h-full mt-[32px] p-6 flex gap-[56px]">
        <div className="grid w-[696px] grid-cols-3 gap-[24px]">
          <img
            src="/assets/images/productImg.png"
            alt="img"
            className="rounded-lg w-[208px]"
          />
          <img
            src="/assets/images/productImg.png"
            alt="img"
            className="rounded-lg w-[208px]"
          />
          <img
            src="/assets/images/productImg.png"
            alt="img"
            className="rounded-lg w-[208px]"
          />
          <img
            src="/assets/images/productImg.png"
            alt="img"
            className="rounded-lg w-[208px]"
          />
          <img
            src="/assets/images/productImg.png"
            alt="img"
            className="rounded-lg w-[208px]"
          />
        </div>
        <div className="w-[740px]">
          <div className="grid grid-rows-6 border-t-2">
            <Label className="flex font-bold text-[21px] self-center gap-[24px]">Technical Details</Label>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;