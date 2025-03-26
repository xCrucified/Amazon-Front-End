/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Title } from "@/components/ui/title";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/hooks/hooks";
import { setActiveId } from "@/store/slices/categorySlice";
import ProductCard from "./product-card";
import { Container } from "../container";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  titleClassName?: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  className,
  title,
  titleClassName,
  items,
  listClassName,
  categoryId,
}) => {
  const dispatch = useAppDispatch();
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [curr, setCurr] = useState(0);

  const itemsPerPage = 5;
  const totalSlides = Math.ceil(items.length / itemsPerPage);

  const next = useCallback(() => {
    setCurr((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurr((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setActiveId(categoryId));
        }
      },
      { threshold: 0.5 }
    );

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }
    if (listRef.current) {
      listRef.current.style.transition = "transform 0.5s ease-in-out";
      listRef.current.style.transform = `translateX(-${curr * 100}%)`;
    }

    return () => observer.disconnect();
  }, [categoryId, dispatch, curr]);

  return (
    <div className={cn("flex flex-col", className)} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className={cn("font-extrabold", titleClassName)} />

      <div className={cn("overflow-hidden w-[fit-content]", listClassName)}>
        <div ref={listRef} className="flex w-full">
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex min-w-full gap-[15px]">
              {items
                .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.imageUrl}
                    price={product.items?.[0]?.price || "N/A"}
                    rate={product.rate || 1}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>

      <Container className="w-full bottom-5 relative flex justify-between items-center">
        <Button
          onClick={prev}
          className={cn(
            "bg-inherit ring-0 hover:bg-inherit shadow-none",
            curr === 0 ? "opacity-50 cursor-not-allowed" : ""
          )}
          disabled={curr === 0}
        >
          <img
            src="/assets/images/arrow-long-left.svg"
            alt="arrow-left"
            style={{ filter: curr === 0 ? "grayscale(100%)" : "none" }}
          />
        </Button>
        <Button
          onClick={next}
          className={cn(
            "bg-inherit ring-0 hover:bg-inherit shadow-none",
            curr + 1 >= totalSlides ? "opacity-50 cursor-not-allowed" : ""
          )}
          disabled={curr + 1 >= totalSlides}
        >
          <img
            src="/assets/images/arrow-long-right.svg"
            alt="arrow-right"
            style={{ filter: curr + 1 >= totalSlides ? "grayscale(100%)" : "none" }}
          />
        </Button>
      </Container>
    </div>
  );
};

export default ProductGroupList;
