/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useCallback } from "react";
import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/star-rating";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Title } from "@/components/ui/title";
import { Product } from "@/lib/interfaces";

const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}api/Product/all`,
        );

        if (!response.ok) {
          throw new Error("Failed to load categories");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Error loading products. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = useCallback(
    (productId: number) => {
      router.push(`/category/edit-product/${productId}`);
    },
    [router]
  );

  const handleDelete = useCallback(async (productId: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/Product/${productId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }

      setProducts((prev) => prev.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;
  if (!products.length) return <p>No products available.</p>;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };
  return (
    <>
      <Title text="Products" size="lg" className="font-extrabold" />
      <div className="flex flex-wrap gap-10">
        {products.map((product) => (
          <div className="relative w-[284px] h-[400px] mb-12" key={product.id}>
            <div className="bg-white rounded-2xl h-full w-full p-4">
              <img
                src={`https://gosellbackupadequatelocu.blob.core.windows.net/onyx/600_${product.images?.[0]?.image}`}
                className="w-[252px] h-[272px] mx-auto object-contain"
                alt="product image"
                width={252}
                height={272}
              />
              <p className="text-sm text-gray-500">Mats</p>
              <Label className="text-xl font-bold">
                {product.name
                  ? `${product.name.slice(0, 24)}...`
                  : product.name}
              </Label>

              <div className="text-blue-800 gap-4 mt-2">
                <StarRating
                  rate={Math.floor(
                    product.reviews.reduce(
                      (sum, review) => sum + review.rate,
                      0
                    ) / product.reviews.length
                  )}
                  secondHalf
                  icon
                />
                <div className="flex gap-4 mt-2">
                  <span className="text-3xl font-bold">
                    {formatPrice(product.price)}
                  </span>
                  {product.price && (
                    <del className="text-base text-gray-400">
                      {formatPrice(product.price)}
                    </del>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button
                  onClick={() => handleEdit(product.id)}
                  className="bg-blue-400 hover:opacity-80"
                >
                  Edit
                </Button>
                <Link
                  href={`/product/${product.id}`}
                  className="flex bg-green-600 hover:opacity-80 rounded-md text-white items-center p-1"
                >
                  View Product
                </Link>
                <Button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-400 hover:opacity-80"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProducts;
