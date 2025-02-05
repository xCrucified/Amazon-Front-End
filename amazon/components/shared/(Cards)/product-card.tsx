/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Container } from "../container";
import { Label } from "@/components/ui/label";

interface Props {
  id: number;
  name: string;
  price: number;
  image?: string;

  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  // name,
  // price,
  // imageUrl,
  className,
}) => {
  return (
    <Container className={cn("w-[284px] h-[430px] relative mt-6", className)}>
      <Link href={`product/${id}`}>
        <div className="bg-white w-[100%] h-[100%] rounded-3xl shadow-md p-4">
          <img src={"/assets/images/products/mat.svg"} alt={"mat"}></img>
          
          <div>
            <p></p>

            <Label></Label>

          </div>
        </div>
      </Link>
    </Container>
  );
};

export default ProductCard;
