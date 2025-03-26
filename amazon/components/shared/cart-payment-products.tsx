"use client";

import React, { JSX } from "react";
import { cn } from "@/lib/utils";
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
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  controls?: boolean;
}

export const Products: React.FC<Props> = ({ className, controls }) => {
  const { push } = useRouter();

  const isDate = useSelector((state: RootState) => state.deliveryDate.isSelected);
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  if (!cart) {
    return null;
  }

  const displayedProducts = controls
    ? cart
    : cart.filter((item) => item.selected > 0);

  const getSubtotal = (): JSX.Element => {
    let total = 0;
    displayedProducts.forEach((item) => {
      total += item.price * item.selected;
    });

    if (isDate) {
      total += 5;
    }

    if (controls) {
      if (displayedProducts.length === 1) {
        return (
          <Label className="text-right text-[19px] pt-5">
            Subtotal (one item): £ <span className="font-bold">{total.toFixed(2)}</span>
          </Label>
        );
      } else {
        return (
          <Label className="text-right text-[19px] pt-5">
            Subtotal ({displayedProducts.filter((item) => item.selected > 0).length} items): £{" "}
            <span className="font-bold">{total.toFixed(2)}</span>
          </Label>
        );
      }
    } else {
      return (
        <div className="w-full h-[fit-content] flex justify-between pt-4 pb-2">
          <div
            className="mt-auto text-[16px] hover:cursor-pointer flex gap-1 items-center"
            onClick={() => {
              push("/cart");
            }}
          >
            <Image
              src="/assets/images/arrow-bend-down-left.svg"
              height={0}
              width={0}
              className="w-[fit-content] h-[fit-content]"
              alt="arrow-left"
            />
            <span className="ml-2">Edit your order</span>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[fit-content] gap-8">
              <div className="flex flex-col">
                <Label className="text-[11px]">Items:</Label>
                <Label className="text-[11px]">Shippping & Handling:</Label>
                <Label className="text-[11px]">Total before tax:</Label>
                <Label className="text-[11px]">Estimated GST/HST:</Label>
                <Label className="text-[11px]">Esitmated PST/RST/QST:</Label>
              </div>
              <div className="flex flex-col text-right">
                <Label className="text-[11px]">£ {total.toFixed(2)}</Label>
                <Label className="text-[11px]">£ 0.00</Label>
                <Label className="text-[11px]">£ 0.00</Label>
                <Label className="text-[11px]">£ 0.00</Label>
                <Label className="text-[11px]">£ 0.00</Label>
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-[19px] font-bold text-[#e16c60]">Order Total:</Label>
              <Label className="text-[19px] text-[#e16c60]">
                £ <span className="font-bold">{total.toFixed(2)}</span>
              </Label>
            </div>
          </div>
        </div>
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
    const product = cart.find((_, index) => index === id);
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
          className={cn(
            controls ? "border-b-2" : "border-b border-[#7c7c7c]/60",
            "flex gap-4 p-4 relative"
          )}
        >
          {controls && item.inStock === 0 && (
            <div className="absolute z-10 top-0 left-0 w-full h-full opacity-50 bg-gray-50" />
          )}
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
              {item.title}
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
                  onClick={() => handleGiftChange(index)}
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
                    onClick={handleDecSelected(index)}
                  >
                    <Minus />
                  </Button>
                  <Label className="text-red-500">{item.selected}</Label>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent h-[fit-content]"
                    size="icon"
                    type="button"
                    onClick={handleIncSelected(index)}
                  >
                    <Plus />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  type="button"
                  className="w-[fit-contet] z-20 text-[#37569E] hover:text-[#222935] rounded-full"
                >
                  Save for later
                </Button>
                <Button
                  variant="ghost"
                  type="button"
                  className="w-[fit-contet] z-20 text-[#37569E] hover:text-[#222935] rounded-full"
                  onClick={handleDelete(index)}
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
      {getSubtotal()}
    </div>
  );
};

export default Products;
