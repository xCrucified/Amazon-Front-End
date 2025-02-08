import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { CategoryBar } from "../(Cards)/category-bar";
import ProductCard from "../(Cards)/product-card";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn("p-6", className)}>
      <CategoryBar />
      <ProductCard id={0} name={"Retrospec Solana Yoga Mat"} image="/assets/images/products/mat.svg" price={16.33} oldPrice={22.43} rate={4.99} />
    </Container>
  );
};

export default Main;
