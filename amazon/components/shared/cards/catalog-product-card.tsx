import StarRating from "@/components/ui/star-rating";
import { cn } from "@/lib/utils";
import { addToCart, Product } from "@/store/slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  className?: string;
  product: Product;
}

export const CatalogProductCard: React.FC<Props> = ({ className, product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={cn("p-4 flex flex-col justify-between gap-2 bg-[#f0f0f0] rounded-lg", className)}
    >
      <div className="flex flex-col gap-2">
        <img
          src={product.image}
          className="w-[252px] h-[272px] mx-auto"
          alt={product.brand!.toLowerCase()}
        />
        <label className="text-[19px] leding-[21px] font-bold text-wrap line-clamp-4">
          {product.title}
        </label>
        <div className="text-[13px] leading-[15px] text-[#757575]">{product.brand}</div>
        <div className="flex flex-col gap-1">
          {product.top1Rated && (
            <div className="text-[#5a6c8d] text-[16px] leading-[18px] font-bold">#1 Top Rated</div>
          )}
          <div className="flex w-[fit-content] gap-4">
            <StarRating rate={product.rating!} />
            <span className="text-[#5a6c8d] text-[16px] leading-[18px]">
              {product.reviewsCount!.toLocaleString()}
            </span>
          </div>
          <div className="text-[13px] leading-[15px] text-[#757575]">{product.features}</div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-3 items-start">
          <div className="text-[#5a6c8d] text-[32px] leading-[34px] font-bold">
            £ {product.price}
          </div>
          {product.oldPrice && (
            <div className="text-[#757575] text-[16px] leading-[18px]">
              £ <span className="line-through ">{product.oldPrice}</span>
            </div>
          )}
        </div>
        <div className="text-[13px] leading-[15px]">{product.priceFeatures}</div>
        <button
          type="button"
          className="bg-[#353b46] rounded-full w-full text-white text-[16px] leading-[18px] py-2"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
        <label className="text-emerald-400">FREE delivery</label>
      </div>
    </div>
  );
};

export default CatalogProductCard;
