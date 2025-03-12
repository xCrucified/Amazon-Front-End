import React from "react";
import ProductItem from "./productItem";
import { cn } from "@/lib/utilities/utils";

interface Props {
  className?: string;
}

export const ProductItemsGroupList: React.FC<Props> = ({ className }) => {
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
