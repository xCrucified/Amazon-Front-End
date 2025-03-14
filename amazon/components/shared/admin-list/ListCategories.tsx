"use client";

import React, { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

const ListCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
        if (!response.ok) {
          throw new Error("Failed to load categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-t border-gray-200">
              <td className="p-3">{category.id}</td>
              <td className="p-3">{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategories;
