/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utilities/utils";
import React from "react";
import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";

interface Props {
  id: number;
  name: string;
  rate: number;
  price: number;
  image?: string;
  oldPrice?: number;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  oldPrice,
  image,
  rate,
  className,
}) => {
  const handleLocateToProduct = () => {
    window.location.href = `product/${id}`;
  };

  return (
    <div className={cn("relative w-[284px] h-[400px] mb-12", className)}>
      <div className="bg-white rounded-2xl h-[100%] w-[100%]">
        <div className="m-2.5">
        <img
            src={image}
            className="w-[252px] h-[272px] mx-auto object-contain"
            alt="product image"
          />

          <div>
            <p className="text-sm text-[#757575]">Mats</p>
            <Label className="text-[20px] font-bold max-w-[252px] flex flex-col">
              {name.length > 24 ? `${name.slice(0, name.lastIndexOf(' '))}...` : name}
            </Label>
          </div>

          <div className="text-[#5a6b8c] gap-4 p-0">
            <StarRating key={id} rate={rate} secondHalf icon ></StarRating>
            <div className="flex gap-[10px]">
              <div>
                <span className="text-lg">£</span>
                <Label className="text-3xl font-bold w-[82.4px] h-[23px] ">
                  {Number(price)}
                </Label>
              </div>
              <div>
                <Label className="text-base text-[#a2a5ab]">
                  {oldPrice ? <del>£{oldPrice}</del> : null}
                </Label>
              </div>
            </div>
          </div>

          <Button
            onClick={handleLocateToProduct}
            className="absolute left-[217px] bottom-[-10px] bg-inherit hover:bg-inherit shadow-none"
          >
            <img
              src="/assets/images/products/cart-btn.svg"
              alt="toCart"
              className="absolute p-2 bg-[#343a45] left-[20px] top-[20px] rounded-xl w-[48px] h-[48px] "
            />
            <img
              src="/assets/images/products/btn-cart-product.svg"
              alt="add-cart"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
