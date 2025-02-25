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

const items: Props[] = [
  {
    id: 1,
    user: "Jokerr",
    rate: 4,
    description:
      "There was a tiny piece of dust that was inside the lens (visible on right side in pics) that I didn`t notice until after I took my photos, but I had it replaced super quickly and easily which is great support, and the new one is perfect.This is a great beginner/budget zoom lens that is a big upgrade from the included kit lens on the Rebel T7. For the price, it does the job very well. The focal range covers a decent amount and I have only tested it at an air show, but it does make you work for the shot. Great value lens.Some drawbacks though is that there is no image stabilization, and the autofocus can be pretty slow and get confused especially on faster moving objects. I already expected those issues, since you get what you pay for, but for something that isn`t the USM or higher end lenses it did way better than I thought it would. I had to use manual focus a fair bit so I missed some shots, but the ones I managed to get turned out way better than I expected.Overall for the price it is a great buy, especially if you plan on photographing slower/still subjects. For practice or casual/hobby photography this is a perfect starter for using telephoto/zoom lenses. I plan to try it on wildlife which may be easier than fast moving planes.",
    images: [
      "/assets/images/litakTest.svg",
      "/assets/images/litakTest.svg",
      "/assets/images/litakTest.svg",
      "/assets/images/litakTest.svg",
      "/assets/images/litakTest.svg",
    ],
  },
];

export const Reviews: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[739px]", className)}>
      <div className="flex gap-3 w-full">
        <img
          src="/assets/images/image.svg"
          alt="userimg"
          width={26}
          height={26}
        />
        <p>Jokerr</p>
      </div>
      <div>
        <StarRating key={0} rate={4} icon={true} secondHalf={true} />
      </div>
      <div className="mb-[17px]">
        <p className="text-gray-500 text-[12px]">
          Reviewed in {"User Country"} on {"Date"}
        </p>
      </div>
      <div className="mb-[17px]">
        <p>
          There was a tiny piece of dust that was inside the lens (visible on
          right side in pics) that I didn`t notice until after I took my photos,
          but I had it replaced super quickly and easily which is great support,
          and the new one is perfect.This is a great beginner/budget zoom lens
          that is a big upgrade from the included kit lens on the Rebel T7. For
          the price, it does the job very well. The focal range covers a decent
          amount and I have only tested it at an air show, but it does make you
          work for the shot. Great value lens.Some drawbacks though is that
          there is no image stabilization, and the autofocus can be pretty slow
          and get confused especially on faster moving objects. I already
          expected those issues, since you get what you pay for, but for
          something that isn`t the USM or higher end lenses it did way better
          than I thought it would. I had to use manual focus a fair bit so I
          missed some shots, but the ones I managed to get turned out way better
          than I expected.Overall for the price it is a great buy, especially if
          you plan on photographing slower/still subjects. For practice or
          casual/hobby photography this is a perfect starter for using
          telephoto/zoom lenses. I plan to try it on wildlife which may be
          easier than fast moving planes.
        </p>
      </div>
      <div className="flex gap-[14px] mt-[17px] w-[100%] justify-start">
        {items.map((item) =>
          item.images?.map((src, index) => (
            <img
              key={`${item.id}-${index}`}
              src={src}
              alt={`review image ${item.id} - ${index}`}
              width={"20%"}
              height={100}
            />
          ))
        )}
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

export default Reviews;
