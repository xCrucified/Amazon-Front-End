import React from "react";
import ProductItem from "./productItem";
import { cn } from "@/lib/utilities/utils";

interface Props {
  items: any[];
  className?: string;
}
// const filterItems: Filters[] = [
//   { id: 1, name: "Price (low to high)" },
//   { id: 2, name: "Price (high to low)" },
// ];

// interface Filters {
//   id: number;
//   name: string;
// }

// "Retrospec Solana Yoga Mat 1/2 Thick w/Nylon Strap for Men & Women – Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce"
export const ProductItemsGroupList: React.FC<Props> = ({ items }) => {
  return (
    <div className={cn("flex flex-col gap-12")}>
      {items.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          rate={item.rate}
          price={item.price}
          oldPrice={item.oldPrice}
          createDate={item.createDate}
        />
      ))}
    </div>
  );
};

export default ProductItemsGroupList;
