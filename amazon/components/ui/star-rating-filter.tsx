import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  initialRate: number;
  className?: string;
}

const initialItems = [1, 2, 3, 4, 5];

export const StarRatingFilter: React.FC<Props> = ({ className, initialRate }) => {
  const [rate, setRate] = useState<number>(initialRate);

  return (
    <div className={cn("flex w-[100%]", className)}>
      {initialItems.map((item) => (
        <img
          key={item}
          src={item <= rate ? "/assets/images/filled.svg" : "/assets/images/non-filled.svg"}
          className="cursor-pointer"
          onClick={() => setRate(item)}
          alt="star"
        />
      ))}
    </div>
  );
};

export default StarRatingFilter;
