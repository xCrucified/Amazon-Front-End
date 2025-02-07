/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "./label";

interface Props {
  key: number;
  rate: number;
  className?: string;
}
const items: Props[] = [
  {
    key: 1,
    rate: 1,
  },
  {
    key: 2,
    rate: 2,
  },
  {
    key: 3,
    rate: 3,
  },
  {
    key: 4,
    rate: 4,
  },
  {
    key: 5,
    rate: 5,
  },
];

export const StarRating: React.FC<Props> = ({ className, rate }) => {
  return (
    <div className={cn("flex w-[100%]", className)}>
      {items.map((item) => (
        <img
          key={item.key}
          src={
            item.rate <= Number(rate)
              ? "/assets/images/filled.svg"
              : "/assets/images/non-filled.svg"
          }
          alt="star"
        />
      ))}
      <Label className="relative left-[10px] flex">
        <p className="text-lg">{Number(rate)}</p>
        <img src="/assets/images/filled.svg" alt="star" />
      </Label>
    </div>
  );
};

export default StarRating;
