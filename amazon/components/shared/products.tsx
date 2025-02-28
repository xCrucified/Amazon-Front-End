"use client";

import React, { JSX, useState } from "react";
import { cn } from "@/lib/utilities/utils";
import Image from "next/image";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface Props {
  className?: string;
}

interface ProductProperties {
  category: string;
  value: string;
}

interface Products {
  id: number;
  desc: string;
  inStock: number;
  selected: number;
  price: number;
  properties: ProductProperties[];
  image: string;
}

const items: Products[] = [
  {
    id: 1,
    desc: 'Retrospec Solana Yoga Mat 1/2" Thick w/Nylon Strap for Men & Women - Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce',
    inStock: 10,
    selected: 1,
    price: 19.99,
    properties: [
      { category: "Color name", value: "Wild Spruce" },
      { category: "Style", value: "½ Inch" },
    ],
    image: "/assets/images/products/mat.svg",
  },
  {
    id: 2,
    desc: "Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR CamerasCanon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR Cameras",
    inStock: 2,
    selected: 1,
    price: 120.0,
    properties: [{ category: "Color name", value: "Wild Spruce" }],
    image: "/assets/images/products/camera-lens.png",
  },
  {
    id: 3,
    desc: "Camera Lens",
    inStock: 0,
    selected: 0,
    price: 190.0,
    properties: [{ category: "Color name", value: "Wild Spruce" }],
    image: "/assets/images/products/camera-lens.png",
  },
];

const initialItems: Products[] = [
  {
    id: 1,
    desc: 'Retrospec Solana Yoga Mat 1/2" Thick w/Nylon Strap for Men & Women - Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce',
    inStock: 10,
    selected: 1,
    price: 19.99,
    properties: [
      { category: "Color name", value: "Wild Spruce" },
      { category: "Style", value: "½ Inch" },
    ],
    image: "/assets/images/products/mat.svg",
  },
  {
    id: 2,
    desc: "Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR CamerasCanon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR Cameras",
    inStock: 2,
    selected: 1,
    price: 120.0,
    properties: [{ category: "Color name", value: "Wild Spruce" }],
    image: "/assets/images/products/camera-lens.png",
  },
  {
    id: 3,
    desc: "Camera Lens",
    inStock: 0,
    selected: 0,
    price: 190.0,
    properties: [{ category: "Color name", value: "Wild Spruce" }],
    image: "/assets/images/products/camera-lens.png",
  },
];

export const Products: React.FC<Props> = ({ className }) => {
  const [items, setItems] = useState<Products[]>(initialItems);

  const setStockLabel = (inStock: number) => {
    if (inStock >= 5) {
      return <span className="text-emerald-400">In Stock</span>;
    } else if (inStock > 0 && inStock < 5) {
      return <span className="text-red-400">Only {inStock} left in Stock</span>;
    } else {
      return <span className="text-red-400">Out Of Stock</span>;
    }
  };

  const getSubtotal = (): JSX.Element => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.selected;
    });

    if (items.length === 1) {
      return (
        <Label className="text-right text-[19px] pt-5">
          Subtotal (one item): £ <span className="font-bold">{total.toFixed(2)}</span>
        </Label>
      );
    } else {
      return (
        <Label className="text-right text-[19px] pt-5">
          Subtotal ({items.length} items): £ <span className="font-bold">{total.toFixed(2)}</span>
        </Label>
      );
    }
  };

  const handleDecSelected = (id: number) => () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.selected > 0 ? { ...item, selected: item.selected - 1 } : item
      )
    );
  };

  const handleIncSelected = (id: number) => () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.selected < item.inStock
          ? { ...item, selected: item.selected + 1 }
          : item
      )
    );
  };

  return (
    <div className={cn("flex flex-col border-t-2", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 p-4 border-b-2">
          <div className="relative w-[120px] h-[120px] mr-6">
            <Image src={item.image} fill alt="product" className="object-contain" />
          </div>
          <div className="w-full flex flex-col text-[13px]">
            <Label className="font-bold pb-1">{item.desc}</Label>
            <Label className="pb-3">{setStockLabel(item.inStock)}</Label>
            <section className="pb-3">
              {item.properties.map((property) => (
                <div className="flex gap-2" key={property.category}>
                  <Label className="font-bold">{property.category}:</Label>
                  <Label>{property.value}</Label>
                </div>
              ))}
            </section>
            <div className="flex items-center gap-2 pb-3">
              <Checkbox
                id="gift"
                className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[2px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none shadow-none"
              />
              <Label className="text-[12px]">
                This will be a gift.{" "}
                <Link href="/gifts" className="text-[#37569e]">
                  Learn more
                </Link>
              </Label>
            </div>
            <section className="flex items-center w-[fit-content] gap-2 h-[24px]">
              <div className="flex bg-muted items-center p-1 gap-2 rounded-full">
                <Button
                  variant="ghost"
                  className="hover:bg-transparent h-[fit-content]"
                  size="icon"
                  type="button"
                  onClick={handleDecSelected(item.id)}
                >
                  <Minus />
                </Button>
                <Label className="text-red-500">{item.selected}</Label>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent h-[fit-content]"
                  size="icon"
                  type="button"
                  onClick={handleIncSelected(item.id)}
                >
                  <Plus />
                </Button>
              </div>
              <Button
                variant="ghost"
                type="button"
                className="w-[fit-contet] text-[#37569E] hover:text-[#222935] rounded-full"
              >
                Save for later
              </Button>
              <Button
                variant="ghost"
                type="button"
                className="w-[fit-contet] text-[#37569E] hover:text-[#222935] rounded-full"
              >
                Delete
              </Button>
            </section>
          </div>
          <div className="flex text-[19px] self-center gap-1 pl-[6]">
            £<span className="font-bold">{item.price.toFixed(2)}</span>
          </div>
        </div>
      ))}
      {getSubtotal()}
    </div>
  );
};

export default Products;
