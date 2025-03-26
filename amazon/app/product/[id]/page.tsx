/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/star-rating";
import Quantity from "@/components/ui/products-quantity";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReviewGroupList from "../reviews/review-group-list";
import ProductGroupList from "@/components/shared/cards/product-group-list";
import { ModalImage } from "@/components/shared/modal/modalImage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { cn } from "@/lib/utils";

export const ProductPage: React.FC = () => {
  const images = useSelector((state: RootState) => state.images);
  const reviewImages = Array(16).fill("/assets/images/productImg.png");

  const [selected, setSelected] = useState<number | null>(1);
  const [isRed, setIsRed] = useState(false);
  const [curr, setCurr] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 5;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const totalSlides = Math.ceil(reviewImages.length / itemsPerPage);

  const next = useCallback(() => setCurr((prev) => (prev + 1 < totalSlides ? prev + 1 : prev)), [totalSlides]);
  const prev = useCallback(() => setCurr((prev) => (prev > 0 ? prev - 1 : prev)), []);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const savedState = localStorage.getItem("isRed");
    if (savedState) setIsRed(JSON.parse(savedState));

    if (listRef.current) {
      listRef.current.style.transition = "transform 0.5s ease-in-out";
      listRef.current.style.transform = `translateX(-${curr * 100}%)`;
    }
  }, [curr]);

  const handleButtonClick = () => {
    const newState = !isRed;
    setIsRed(newState);
    localStorage.setItem("isRed", JSON.stringify(newState));
  };

  return (
    <Container className={cn("mb-10 p-6")}>
      <div className="flex gap-[56px] mt-[20px]">
        <div className="w-[696px] rounded-md">
          {images.images.slice(0, 1).map((image, index) => (
            <button key={index} onClick={() => handleImageClick(index)} className="h-[696px] rounded-lg">
              <img src={image.url} alt={`product-${index}`} />
            </button>
          ))}

          {isModalOpen && (
            <ModalImage
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              images={images.images.map((img) => img.url)}
              currentIndex={selectedIndex}
            />
          )}
        </div>

        <div className="w-[740px] h-full">
          <div className="flex justify-between items-center">
            <Label className="text-[23px] font-bold w-[594px]">
              Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR Cameras
            </Label>
            <Button className="bg-inherit hover:bg-inherit shadow-none" onClick={handleButtonClick}>
              <img
                src={isRed ? "/assets/images/HeartBtn-F.svg" : "/assets/images/HeartBtn-N.svg"}
                alt="save"
                width={32}
                height={32}
              />
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <StarRating key={0} rate={4.5} icon={false} />
            <Label className="w-[240px]">
              <span className="font-bold">200+ bought</span> in the past month
            </Label>
          </div>

          <div className="flex rounded-lg w-[488px] h-[80px] justify-between mt-3">
            <Button
              onClick={() => setSelected(1)}
              className={cn(
                "w-[50%] h-full bg-[#dedede] text-[#636363] hover:bg-gray-100 rounded-none border-[3px] border-[#a8a8a8] rounded-tl-lg rounded-bl-lg",
                selected === 1 ? "border-[#5b6c8c] border-4 bg-[#f5f5f5] text-black" : ""
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
                selected === 2 ? "border-[#5b6c8c] border-4 bg-[#f5f5f5] text-black" : ""
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

          <span className="flex h-[24px] text-[#E30000] text-[13px] font-extralight mt-2">
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
              <p className="text-blue-300 border-b-blue-300 border-b-2">FREE delivery</p>
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
            <Accordion type="single" collapsible className="w-full mt-[24px]">
              <AccordionItem value="item-1" className="border-t-2">
                <AccordionTrigger className="font-bold">Product details</AccordionTrigger>
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
                    <Label>Max. magnification</Label>
                    <p>0.25x</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Item dimensions L x W x H</Label>
                    <p>6.9 x 6.9 x 4.3 inches</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Label className="font-bold">Other sellers on Amazon</Label>
        <ProductGroupList className="mt-4" title={"Test"}  items={[
            {
              id: 0,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 1,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 2,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 3,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 4,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 5,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 6,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
          ]} categoryId={1}  />
      </div>

      <div className="mt-10">
        <ReviewGroupList reviews={[
            {
              id: 0,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 1,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 2,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 3,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 4,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 5,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 6,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
          ]} />
        <div className="mt-[24px] flex gap-2 justify-center">
          <Button className="border-none" onClick={prev}>Prev</Button>
          <Button className="border-none" onClick={next}>Next</Button>
        </div>
      </div>
    </Container>
  );
};
