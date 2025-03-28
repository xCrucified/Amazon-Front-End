/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProductItem from "./productItem";
import { cn } from "@/lib/utilities/utils";

interface Props {
  items: any[];
  className?: string;
}
const filterItems: Filters[] = [
  { id: 1, name: "Price (low to high)" },
  { id: 2, name: "Price (high to low)" },
];

interface Filters {
  id: number;
  name: string;
}

// "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce"
export const ProductItemsGroupList: React.FC<Props> = ({ items }) => {
  return (
    <div className={cn("", className)}>
      <ProductItem
        name={
          "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce"
        }
        rate={4}
        price={33.33}
        oldPrice={55.55}
        properties={["Hut", "Bob"]}
        createDate={"12.12.2001"}
        id={"1"}
      />
    </div>
  );
};

export default ProductItemsGroupList;
