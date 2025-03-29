import StarRating from "@/components/ui/star-rating";
import { Product } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { addToCart } from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  className?: string;
  product: Product;
  subcategory: string;
}

export const CatalogProductCard: React.FC<Props> = ({ className, product, subcategory }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    if (!product.images[0]) {
      return;
    }

    setImage(product.images[0].image);
  }, [product.images]);

  return (
    <div
      className={cn("p-4 flex flex-col justify-between gap-2 bg-[#f0f0f0] rounded-lg", className)}
    >
      <div className="flex flex-col gap-2">
        {image && (
          <img
            src={`https://gosellbackupadequatelocu.blob.core.windows.net/onyx/600_${image}`}
            className="w-[252px] h-[272px] mx-auto object-contain"
            alt="product image"
          />
        )}
        <label
          className="text-[19px] leding-[21px] font-bold text-wrap line-clamp-4 hover:underline cursor-pointer"
          onClick={() => {
            push(`/product/${product.id}`);
          }}
        >
          {product.name}
        </label>
        <div className="text-[13px] leading-[15px] text-[#757575]">{subcategory}</div>
        <div className="flex flex-col gap-1">
          <div className="flex w-[fit-content] gap-4">
            <StarRating
              rate={Math.floor(
                product.reviews.reduce((sum, review) => sum + review.rate, 0) /
                  product.reviews.length
              )}
            />
            <span className="text-[#5a6c8d] text-[16px] leading-[18px]">
              {product.reviews.length.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-3 items-start">
          <div className="text-[#5a6c8d] text-[32px] leading-[34px] font-bold">
            £ {product.price.toLocaleString()}
          </div>
        </div>
        <button
          type="button"
          className="bg-[#353b46] rounded-full w-full text-white text-[16px] leading-[18px] py-2"
          onClick={() => {
            dispatch(addToCart(product));
            toast.success("Added to cart!");
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CatalogProductCard;
