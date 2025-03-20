"use client";

import { Button } from "@/components/ui/button";
import router from "next/router";
import React, { useEffect, useState } from "react";

interface SubCategory {
  id: number;
  name: string;
  categoryId: number;
}

const ListSubCategories = () => {
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);
  // "http://localhost:5237/api/Category/all"
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "api/SubCategory/all"
        );
        if (!response.ok) {
          throw new Error("Failed to load categories");
        }
        const data = await response.json();
        setSubCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = (subCategoryId: number) => {
    // Redirect to the edit page
    router.push(`/subCategory/edit-subCategory/${subCategoryId}`);
  };

  const handleDelete = async (subCategoryId: number) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `api/Subcategory/${subCategoryId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }

      setSubCategories(
        subCategories.filter((subCategory) => subCategory.id !== subCategoryId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="w-full">
      <div className="flex gap-10">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <Button className="bg-green-700 w-[200px]">Add</Button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">CategoryId</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((category) => (
            <tr key={category.id} className="border-t border-gray-200">
              <td className="p-3">{category.id}</td>
              <td className="p-3">{category.name}</td>
              <td className="p-3">{category.categoryId}</td>
              <div className="flex justify-end mr-10 gap-3">
                <Button
                  onClick={() => handleEdit(category.id)}
                  className="bg-purple-400 hover:opacity-80"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-400 hover:opacity-80"
                >
                  Remove
                </Button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSubCategories;
