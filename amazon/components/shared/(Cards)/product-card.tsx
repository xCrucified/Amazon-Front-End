/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/star-rating";

interface Props {
  id: number;
  name: string;
  rate: number;
  price: number;
  image?: string;

  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  image,
  rate,
  className,
}) => {
  return (
    <div className={cn("relative w-[284px] h-[400px]", className)}>
      <div className="bg-white rounded-2xl h-[100%] w-[100%]">
        <div className="m-2.5">
          <img src={image} alt={name}></img>

          <div>
            <p className="text-sm text-[#757575]">Mats</p>
            <Label className="text-[20px] font-bold max-w-[100%] flex flex-col">
              {name}
            </Label>
          </div>

          <div className="text-[#5a6b8c] gap-4 p-0">
          <StarRating key={id} rate={rate}></StarRating>
            <span className="text-lg">£</span>
            <Label className="text-3xl font-bold w-[82.4px] h-[23px] ">
              {Number(price)}
            </Label>
          </div>

          <Link href={`product/${id}`} className="absolute left-[214px] bottom-0">
            <img
              src="/assets/images/products/cart-btn.svg"
              alt="toCart"
              className="absolute p-[8px] bg-[#343a45] left-[20px] rounded-xl w-[50px] h-[48px] top-5"
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
