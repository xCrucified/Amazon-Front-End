"use client";

import { Button } from "@/components/ui/button";
import router from "next/router";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
}

const ListCategories = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "api/Product/all");
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
    // Redirect to the edit page
    router.push(`/category/edit-product/${productId}`);
  };

  const handleDelete = async (productId: number) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `api/Product/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }

      // Remove the deleted product from the state
      setProducts(products.filter((products) => products.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="w-full">
      <div className="flex gap-10">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <Button className="bg-green-700 w-[200px]">Add</Button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-gray-200">
              <td className="p-3">{product.id}</td>
              <td className="p-3">{product.name}</td>
              <Button onClick={() => handleEdit(product.id)} className="bg-purple-400 hover:opacity-80">Edit</Button>
              <Button onClick={() => handleDelete(product.id)} className="bg-red-400 hover:opacity-80">Remove</Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategories;
