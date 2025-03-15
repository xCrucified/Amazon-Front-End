import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { CategoryBar } from "../cards/category-bar";
import ProductGroupList from "../cards/product-group-list";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn("p-6", className)}>
      <CategoryBar />
      <div className="top-[30px] relative">
        <ProductGroupList
          title={"Best Sellers in Sports & Outdoors"}
          items={[
            {
              id: 0,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 1,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 2,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 3,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 4,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 5,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 6,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 7,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 8,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 9,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 10,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 11,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 12,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
          ]}
          categoryId={1}
        />
        <ProductGroupList
          title={"Best Sellers in Home & Kitchen"}  
          items={[
            {
              id: 0,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 1,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 2,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 3,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 4,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 5,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 6,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 7,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 8,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 9,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 10,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 11,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 12,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
          ]}
          categoryId={2}
        />
        <ProductGroupList
          title={"Best Sellers in Clothing & Accessories"}
          items={[
            {
              id: 0,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 1,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 2,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 3,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 4,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 5,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 6,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 7,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 8,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 9,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 10,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 11,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
            {
              id: 12,
              name: "Retrospec Solana Yoga Mat",
              imageUrl: "/assets/images/products/mat.svg",
              items: [
                {
                  price: 16.33,
                },
              ],
            },
          ]}
          categoryId={3}
        />
      </div>
    </Container>
  );
};

export default Main;
