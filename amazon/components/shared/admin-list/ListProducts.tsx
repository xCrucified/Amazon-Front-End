/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/star-rating";
import router from "next/dist/client/router";
import Link from "next/link";
import { Title } from "@/components/ui/title";

interface Product {
  id: number;
  name: string;
  rate: number;
  price: number;
  oldPrice: number;
  userId: string;
}

const ListCategories = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "api/Product/all"
        );
        if (!response.ok) {
          throw new Error("Failed to load categories");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = (productId: number) => {
    router.push(`/category/edit-product/${productId}`);
  };

  const handleDelete = async (productId: number) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `api/Product/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }

      setProducts(products.filter((products) => products.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading categories...</p>;

  return (
    <>
      <Title text={"Products"} size="lg" className="font-extrabold" />
      <div className="flex w-full gap-10">
        {products.map((product) => (
          <div
            className={"relative w-[284px] h-[400px] mb-12"}
            key={product.id}
          >
            <div className="bg-white rounded-2xl h-[100%] w-[100%]">
              <div className="m-2.5">
                <img
                  src={"/assets/images/products/mat.svg"}
                  alt={product.name}
                ></img>

                <div>
                  <p className="text-sm text-[#757575]">Mats</p>
                  <Label className="text-[20px] font-bold max-w-[252px] flex flex-col">
                    {product.name.length > 24
                      ? `${product.name.slice(
                          0,
                          product.name.lastIndexOf(" ")
                        )}...`
                      : product.name}
                  </Label>
                </div>

                <div className="text-[#5a6b8c] gap-4 p-0">
                  <StarRating
                    key={product.id}
                    rate={5}
                    secondHalf
                    icon
                  ></StarRating>
                  <div className="flex gap-[10px]">
                    <div>
                      <span className="text-lg">£</span>
                      <Label className="text-3xl font-bold w-[82.4px] h-[23px] ">
                        {Number(product.price)}
                      </Label>
                    </div>
                    <div>
                      <Label className="text-base text-[#a2a5ab]">
                        {product.oldPrice ? (
                          <del>£{product.oldPrice}</del>
                        ) : null}
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative justify-between bottom-0">
                <Button
                  onClick={() => handleEdit(product.id)}
                  className="bg-blue-400 hover:opacity-80"
                >
                  Edit
                </Button>
                <Link
                  className="flex bg-green-600 hover:opacity-80 rounded-md text-white items-center p-1"
                  href={`product/${product.id}`}
                >
                  Locate to product
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

export default ListCategories;
