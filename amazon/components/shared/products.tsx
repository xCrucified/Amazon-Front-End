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
import {
  decreaseSelectedVal,
  demarkAsGift,
  increaseSelectedVal,
  markAsGift,
  removeFromCart,
} from "@/store/slices/cartSlice";

interface Props {
  className?: string;
  controls?: boolean;
}

export const Products: React.FC<Props> = ({ className, controls }) => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  if (!cart) {
    return null;
  }

  const displayedProducts = controls
    ? Object.values(cart)
    : Object.values(cart).filter((item) => item.selected > 0);

  const getSubtotal = (): JSX.Element => {
    let total = 0;
    displayedProducts.forEach((item) => {
      total += item.price * item.selected;
    });

    if (displayedProducts.length === 1) {
      return (
        <Label className="text-right text-[19px] pt-5">
          Subtotal (one item): £ <span className="font-bold">{total.toFixed(2)}</span>
        </Label>
      );
    } else {
      return (
        <Label className="text-right text-[19px] pt-5">
          Subtotal ({displayedProducts.length} items): £{" "}
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
  };

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
    <div
      className={cn(
        controls ? "border-t-2" : "border-t border-[#7c7c7c]/60",
        "flex flex-col",
        className
      )}
    >
      {displayedProducts.map((item, index) => (
        <div
          key={index}
          className={cn(controls ? "border-b-2" : "border-b border-[#7c7c7c]/60", "flex gap-4 p-4")}
        >
          <div
            className={cn(
              controls ? "mr-6 w-[120px] h-[120px]" : "w-[140px] h-[140px] pr-4",
              "relative"
            )}
          >
            <Image src={item.image} fill alt="product" className="object-contain" />
          </div>
          <div className={cn(!controls && "justify-between", "w-full flex flex-col")}>
            <Label className={cn(controls ? "font-bold pb-1" : "text-[11px] pb-4")}>
              {item.desc}
            </Label>
            {controls && <Label className="pb-3">{setStockLabel(item.inStock)}</Label>}
            <section className={cn(controls && "mt-1", "pb-3")}>
              {item.properties.map((property) => (
                <div className="flex gap-2" key={property.category}>
                  <Label className={cn(!controls && "text-[11px]", "font-bold")}>
                    {property.category}:
                  </Label>
                  <Label className={cn(!controls && "text-[11px]")}>{property.value}</Label>
                </div>
              ))}
            </section>
            {controls ? (
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
            ) : (
              <Label className="text-[11px]">Quantity: {item.selected}</Label>
            )}
            {controls && (
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
            )}
          </div>
          <div className="flex text-[19px] self-center gap-1 pl-[6]">
            £<span className="font-bold">{item.price.toFixed(2)}</span>
          </div>
        </div>
      ))}
      {controls && getSubtotal()}
    </div>
  );
};

export default Products;
