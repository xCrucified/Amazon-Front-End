import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Collapse from "../ui/collapse";

interface Props {
  className?: string;
  categoryName: string | undefined;
}

export interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
}

export const CatalogFilter: React.FC<Props> = ({ className, categoryName }) => {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch("/api/subcategories/byName", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryName,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to load categories");
        }
        setSubcategories(await response.json());
      } catch (e) {
        console.error(e);
      }
    };

    fetchSubcategories();
  }, [categoryName]);

  return (
    <section className={cn("w-[200px] flex flex-col gap-3 p-6", className)}>
      <label className="text-[32px] leading-[32px] font-bold w-[fit-content]">Electronic Store</label>
      <Collapse subcatogries={subcategories} />
    </section>
  );
};

export default CatalogFilter;
