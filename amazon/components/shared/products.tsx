"use client";

import React, { JSX } from "react";
import { cn } from "@/lib/utilities/utils";
import Image from "next/image";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { decreaseSelectedVal, demarkAsGift, increaseSelectedVal, markAsGift, removeFromCart } from "@/store/slices/cartSlice";

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  if (!cart) {
    return null;
  }

  const getSubtotal = (): JSX.Element => {
    let total = 0;
    Object.values(cart).forEach((item) => {
      total += item.price * item.selected;
    });

    if (Object.keys(cart).length === 1) {
      return (
        <Label className="text-right text-[19px] pt-5">
          Subtotal (one item): £ <span className="font-bold">{total.toFixed(2)}</span>
        </Label>
      );
    } else {
      return (
        <Label className="text-right text-[19px] pt-5">
          Subtotal ({Object.keys(cart).length} items): £{" "}
          <span className="font-bold">{total.toFixed(2)}</span>
        </Label>
      );
    }
  };

  const setStockLabel = (inStock: number) => {
    if (inStock >= 5) {
      return <span className="text-emerald-400">In Stock</span>;
    } else if (inStock > 0 && inStock < 5) {
      return <span className="text-red-400">Only {inStock} left in Stock</span>;
    } else {
      return <span className="text-red-400">Out Of Stock</span>;
    }
  };

  const handleGiftChange = (id: number) => {
    if (cart[id].isGift) {
      dispatch(demarkAsGift(id));
    } else {
      dispatch(markAsGift(id));
    }
  }

  const handleDelete = (id: number) => () => {
    const product = Object.values(cart).find((item) => item.id === id);
    if (product) {
      dispatch(removeFromCart(product));
    }
  };

  const handleIncSelected = (id: number) => () => {
    if (cart[id].selected < cart[id].inStock) {
      dispatch(increaseSelectedVal(id));
    }
  };

  const handleDecSelected = (id: number) => () => {
    if (cart[id].selected > 0) {
      dispatch(decreaseSelectedVal(id));
    }
  };

  return (
    <div className={cn("flex flex-col border-t-2", className)}>
      {Object.values(cart).map((item, index) => (
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
                checked={item.isGift}
                onClick={() => handleGiftChange(item.id)}
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
                onClick={handleDelete(item.id)}
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
