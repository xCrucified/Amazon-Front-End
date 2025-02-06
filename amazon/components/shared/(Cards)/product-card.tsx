/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Label } from "@/components/ui/label";

interface Props {
  id: number;
  name: string;
  price: number;
  image?: string;

  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  // name,
  // price,
  // imageUrl,
  className,
}) => {
  return (
    <div className={cn("relative w-[284px] h-[430px]", className)}>
      <div className="bg-white rounded-2xl">
        <div className="m-2">
          <img src={"/assets/images/products/mat.svg"} alt={"mat"}></img>

          <div>
            <p className="text-sm text-[#757575]">Mats</p>
            <Label className="text-[20px] font-bold max-w-[100%] flex flex-col">
              Retrospec Solana Yoga M...
            </Label>
          </div>

          <div className="text-[#5a6b8c]">
            <span className="text-lg">£</span>
            <Label className="text-3xl font-bold w-[82.4px] h-[23px] ">
              49.99
            </Label>
          </div>

          <Link href={`product/${id}`} className="relative left-[206px]">
            <img
              src="/assets/images/products/cart-btn.svg"
              alt="toCart"
              className="absolute p-[9px] bg-[#343a45] bottom-0 left-[21px] rounded-xl w-[50px] h-[48px]"
            />
            <img
              src="/assets/images/products/btn-cart-product.svg"
              alt="add-cart"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
