/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { Input } from "@/components/ui/input";
import ReviewGroupList from "../reviews/review-group-list";
import Link from "next/link";
import ProductGroupList from "@/components/shared/cards/product-group-list";
import { ModalImage } from "@/components/shared/modal/modalImage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  images: {
    id: number;
    src: string;
  };
  className?: string;
  params: { id: string };
}

const reviewImages = [
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
  "/assets/images/productImg.png",
]

export const ProductPage: React.FC<Props> = ({ className, params }) => {
  const images = useSelector((state: RootState) => state.images);
  
  const [selected, setSelected] = useState<number | null>(1);
  const [isRed, setIsRed] = useState(false);
  const [curr, setCurr] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 5;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const totalSlides = Math.ceil(reviewImages.length / itemsPerPage);
  
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const next = useCallback(() => {
    setCurr((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurr((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const savedState = localStorage.getItem("isRed");
    if (savedState) {
      setIsRed(JSON.parse(savedState));
    }
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
    <Container className={cn(className, "mb-10 p-6")}>
      <div className="w-full h-full flex gap-[56px] mt-[20px]">
        <div className="w-[696px] rounded-md">
          {images.images.slice(0, 1).map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(image.url)}
              className="w-[100%] h-[100%] rounded-lg"
            >
              <img src={image.url} alt="product" />
            </button>
          ))}
          {isModalOpen && selectedImage && (
            <ModalImage
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              images={images.images.map((image) => image.url)}
            />
          )}
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
          <div className="flex rounded-lg w-[488px] h-[80px] justify-between mt-3">
            <Button
              onClick={() => setSelected(1)}
              className={cn(
                "w-[50%] h-full bg-[#dedede] text-[#636363] hover:bg-gray-100 rounded-none -[border3px] border-[#a8a8a8] rounded-tl-lg rounded-bl-lg",
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

      <div className="mt-[20px] border-b-[2px]">
        <Label className="text-[20px]">Product information</Label>
      </div>

      <div className="mt-[32px] flex justify-between">
        <div className="grid grid-cols-3 grid-rows-5 gap-[36px] w-[672px]">
          {images.images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(image.url)}
              className="w-[208px] h-[208px] rounded-lg"
            >
              <img src={image.url} alt="img" />
            </button>
            
          ))}
          {isModalOpen && selectedImage && (
            <ModalImage
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              images={images.images.map((image) => image.url)}
            />
          )}
            
        </div>
        <div className="">
          <div className="grid grid-rows-7 border-t-2">
            <Label className="flex font-semibold text-[28px] gap-[24px] h-[72px] items-center border-b-2">
              Technical Details
            </Label>
            <div className="flex justify-between items-center text-[16px] border-b-2">
              <p>Manufacturer</p>
              <p>Canon</p>
            </div>
            <div className="flex justify-between items-center text-[16px] border-b-2">
              <p>Place of Business</p>
              <p>MELVILLE, NY, 11747 US</p>
            </div>
            <div className="flex justify-between items-center text-[16px] border-b-2">
              <p>Item model number</p>
              <p>‎6473A003</p>
            </div>
            <div className="flex justify-between items-center text-[16px] border-b-2">
              <p>Product Dimensions</p>
              <p>‎12.2 x 7.1 x 7.1 cm; 480 g</p>
            </div>
            <div className="flex justify-between items-center text-[16px] border-b-2">
              <p>ASIN</p>
              <p>B00004THD0</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[715px]">
            <Label className="font-semibold text-[22px]">
              Product description
            </Label>
            <p
              className="font-thin w-[572px]"
              style={{ fontFamily: "sans-serif", fontStyle: "normal" }}
            >
              Capture the far-off action of fast-paced sports or zoom in for an
              intimate portrait with the Canon EF 75-300mm telephoto zoom lens.
              The optical system, construction, and exterior are the same as the
              EF 75-300 mm f/4-5.6 III USM’s. The difference is that it uses a
              DC motor instead of a USM to drive the AF. As with all Canon lens,
              this 75-300 model carries a one-year warranty.
            </p>
          </div>
          <div className="mt-16 border-b-2 border-t-2 h-[140px]">
            <div className="border-b-2 h-[50%] flex items-center">
              <Label className="font-semibold text-[22px]">
                Additional Information
              </Label>
            </div>
            <div className="flex justify-between items-center h-[50%]">
              <Label className="text-[15.5px]">Best Sellers Rank</Label>
              <div>
                <p>
                  #1,709 in Electronics (
                  <a href="top" className="text-blue-700 underline">
                    See Top 100 in Electronics
                  </a>
                  )
                </p>
                <p>
                  #1 in{" "}
                  <a href="top" className="text-blue-700 underline">
                    SLR Camera Lenses
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t-2 h-[140px]">
            <div className="border-b-2 h-[50%] flex items-center">
              <Label className="font-semibold text-[22px]">Feedback</Label>
            </div>
            <div className="h-[50%] flex items-center">
              <Label className="text-[16px]">
                Would you like to 
                <a href="test" className="text-blue-700 underline">
                  tell us about a lower price? 
                </a>
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-[2px]">
        <Label className="text-[22px]">Looking for specific info?</Label>
      </div>

      <div className="mt-5 flex justify-between">
        <div className="flex w-[672px] h-full relative">
          <Input
            type="search"
            placeholder="Search in reviews, Q&A…"
            className="pl-10"
          />
          <img
            src="/assets/images/Search.svg"
            alt="search"
            width={32}
            height={32}
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            style={{ filter: "brightness(0) saturate(100%)" }}
          />
        </div>
        <div className="flex w-[715px] h-full relative flex-col">
          <div className="">
            <Label className="font-semibold text-[22px] relative">
              Customers say
            </Label>
            <p className="mt-2">
              Customers find the camera lens offers good value for money. They
              say it works well, is useful for amateur photographers, and a
              great starter lens. Many customers are satisfied with the zoom
              quality and ease of use. However, some have mixed opinions on the
              overall quality and focus ability.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <Label className="font-semibold text-[22px] relative">
                Reviews with images
              </Label>
              <button className="text-blue-700 underline">
                See all customer images
              </button>
            </div>
            <div className={cn("overflow-hidden w-full mt-5")}>
              <div ref={listRef} className="flex flex-col">
              <div className="flex gap-3 w-full">
                  {reviewImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt="img"
                      className="rounded-lg w-[168px] h-[168px]"
                    />
                  ))}
                </div>
              </div>
              <div className="w-[100%] flex justify-between items-center mt-3">
                <Button
                  onClick={prev}
                  className={cn(
                    "bg-inherit ring-0 hover:bg-inherit shadow-none",
                    curr === 0 ? "opacity-50 cursor-not-allowed" : ""
                  )}
                  disabled={curr === 0}
                >
                  <img
                    src="/assets/images/arrow-long-left.svg"
                    alt="arrow-left"
                    style={{
                      filter: curr === 0 ? "grayscale(100%)" : "none",
                    }}
                  />
                </Button>
                <Button
                  onClick={next}
                  className={cn(
                    "bg-inherit ring-0 hover:bg-inherit shadow-none",
                    curr + 1 >= totalSlides
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  )}
                  disabled={curr + 1 >= totalSlides}
                >
                  <img
                    src="/assets/images/arrow-long-right.svg"
                    alt="arrow-right"
                    style={{
                      filter:
                        curr + 1 >= totalSlides ? "grayscale(100%)" : "none",
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Label className="font-semibold text-[22px] flex mb-7">
              Reviews with images
            </Label>
            <ReviewGroupList
              reviews={[
                {
                  id: 1,
                  user: "BOB",
                  images: [
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                  ],
                  rate: 4,
                  subDescription: "Great beginner lens; no IS and AF is slow",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum deleniti quo temporibus facere obcaecati sunt accusantium sint! Quo iure obcaecati vel dicta aperiam, est repudiandae nostrum impedit fuga placeat!",
                },
                {
                  id: 2,
                  user: "ROB",
                  images: [
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                    "/assets/images/litakTest.svg",
                  ],
                  rate: 4,
                  subDescription: "Great product",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum deleniti quo temporibus facere obcaecati sunt accusantium sint! Quo iure obcaecati vel dicta aperiam, est repudiandae nostrum impedit fuga placeat!",
                },
              ]}
            />
          </div>
          <div className="w-full py-[12px] border-b-[3px] border-t-[3px]">
            <Link
              className="w-[100%] h-[100%] text-blue-900"
              href="/product/reviews/all"
            >
              See more reviews
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Label className="flex gap-1 font-bold text-[18px] border-b-[3px] mb-5">
          Continue shopping for{" "}
          <a href="/" className="text-blue-900">
            See more
          </a>
        </Label>
        <ProductGroupList
          title={""}
          items={[
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
          ]}
          categoryId={4}
        />
      </div>
    </Container>
  );
};

export default ProductPage;