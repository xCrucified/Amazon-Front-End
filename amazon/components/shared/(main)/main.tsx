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
      <ProductCard id={0} name={""} price={0} rate={0} />
    </Container>
  );
};

export default Main;
