/* eslint-disable @next/next/no-img-element */
import StarRating from "@/components/ui/star-rating";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  id: number;
  user: string;
  rate: number;
  description?: string;
  images?: string[];
  className?: string;
}

export const Review: React.FC<Props> = ({
  id,
  user,
  rate,
  description,
  images,
  className,
}) => {
  return (
    <div className={cn("w-[739px] mb-[24px]", className)}>
      <div className="flex gap-3 w-full mb-3 items-center">
        <img
          src="/assets/images/image.svg"
          alt="userimg"
          width={32}
          height={32}
        />
        <p className="font-bold text-[19px]">{user}</p>
      </div>
      <div>
        <StarRating rate={rate} icon={true} secondHalf={true} />
      </div>
      <div className="mb-3">
        <p className="text-gray-500 text-[12px]">
          Reviewed in {"User Country"} on {"Date"}
        </p>
      </div>
      <div className="mb-[17px]">
        <p>{description}</p>
      </div>
      <div className="flex outline gap-[14px] mt-[17px] justify-start">
        {images
          ?.map((src, index) => (
            <img
              key={`${id}-${index}`}
              src={src}
              alt={`review image ${id} - ${index}`}
              width={"100%"}
              height={"100%"}
            />
          ))
          .slice(0, 5)}
      </div>
      <p className="my-[17px] text-gray-400">
        {"13"} people found this helpful
      </p>
      <div className="flex gap-3">
        <button className="text-gray-500 hover:text-black hover:bg-gray-200 rounded-[10px] p-4">
          Helpful
        </button>
        <button className="text-gray-500 hover:text-black hover:bg-gray-200 rounded-[10px] p-4">
          Report
        </button>
      </div>
    </div>
  );
};

export default Review;
