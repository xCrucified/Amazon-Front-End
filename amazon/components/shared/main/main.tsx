"use client";

import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utilities/utils";
import { Container } from "../container";
import { CategoryBar } from "../cards/category-bar";
import ProductGroupList from "../cards/product-group-list";
import { Product, Category } from "@/lib/interfaces";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/Product/all`
      );
      if (!response.ok) {
        throw new Error(`Error loading categories: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError("Error loading products. Try later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/Category/all`
      );

      if (!response.ok) {
        throw new Error(`Error loading categories: ${response.status}`);
      }

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error loading categories", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!products.length) return <p>Product is not reachable.</p>;

  return (
    <Container className={cn("p-6", className)}>
      <CategoryBar />
      <div className="top-[30px] relative z-50">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.categoryId === category.id
          );
          console.log(categoryProducts);
          if (!categoryProducts.length) return null;

          return (
            <ProductGroupList
            key={category.id}
            title={category.name}
            items={categoryProducts.map((product) => ({
              id: product.id,
              name: product.name,
              imageUrl: `https://gosellbackupadequatelocu.blob.core.windows.net/onyx/600_${product.images?.[0]?.image}`,
              items: [{ price: product.price }],
            }))}
            categoryId={category.id}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Main;
