/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { Button } from "../../ui/button";
import { Container } from "../container";

const categories = [
  {
    title: "Books",
    items: ["Kindle Books", "Audible Audiobooks"],
  },
  {
    title: "Video Games & Prime Gaming",
    items: ["All Video Games", "PC Gaming"],
  },
  {
    title: "Music, Movies & TV Shows",
    items: ["All Movies & TV Shows", "Music"],
  },
  {
    title: "Electronics, Computers & Office",
    items: ["Electronics", "Computers"],
  },
  {
    title: "Alexa Smart Home",
    items: ["Onyx Smart Home", "Other"],
  },
  {
    title: "Home, Garden, Pets & Tools",
    items: ["Home", "Tools & Home Improvement", "Pet Supplies"],
  },
  {
    title: "Grocery & Whole Foods Market",
    items: [
      "Grocery",
      "Natural & Organic",
      "International Food Market",
      "Whole Foods Market",
      "Subscribe & Save",
    ],
  },
  {
    title: "Health & Beauty",
    items: [
      "Beauty",
      "Premium Beauty",
      "Health & Personal Care",
      "Household Supplies",
    ],
  },
  {
    title: "Toys, Kids, Baby & STEM",
    items: ["Toys & Games", "Baby", "All STEM"],
  },
  {
    title: "Clothing, Shoes & Jewellery",
    items: ["Onyx Fashion", "Women", "Men", "Girls", "Baby"],
  },
  {
    title: "Handmade",
    items: ["All Handmade"],
  },
  {
    title: "Sports & Outdoors",
    items: ["Sports", "Outdoor Gear"],
  },
];

export const ModalAll = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-25 h-[84%] overflow-hidden flex justify-end self-end"></div>
      <Container className="h-[739px] w-[1447px] mt-[155px] z-[51] fixed inset-0 flex items-center justify-center bg-[#f5f5f5] modal-shadow rounded-bl-xl rounded-br-xl">
        <div className="grid grid-cols-3 gap-7 place-content-center w-[90%]">
          <Button
            onClick={onClose}
            className="absolute top-0 left-0 m-2 bg-inherit hover:bg-inherit ring-0 shadow-none"
          >
            <img src="/assets/images/closeImg.svg" alt="X"></img>
          </Button>
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-bold text-lg border-b-2">{category.title}</h3>
              <ul className="p-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-600 cursor-pointer hover:text-black ml-[48px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
