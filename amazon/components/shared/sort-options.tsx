"use client";

"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  onSortChange?: (option: string) => void;
}

export const SortOptions: React.FC<Props> = ({ className, onSortChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Price: High to Low");
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Avg. customer review",
    "Best Sellers",
  ];

  // Map display option to sorting value for callback use
  const mapOptionToSortValue = (option: string) => {
    switch (option) {
      case "Price: Low to High":
        return "priceAsc";
      case "Price: High to Low":
        return "priceDesc";
      case "Avg. customer review":
        return "ratingDesc";
      case "Best Sellers":
        return "bestSellers";
      default:
        return "";
    }
  };

  return (
    <section ref={containerRef} className={cn("relative inline-block", className)}>
      <span onClick={toggleOptions} className="cursor-pointer text-[#8e9dBc]">
        Sort by: {selected}
      </span>
      {open && (
        <ul className="absolute left-0 top-full mt-1 bg-white overflow-hidden border-gray-200 rounded-xl w-[220px] shadow-xl border-none">
          {sortOptions.map((option, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelected(option);
                setOpen(false);
                const sortValue = mapOptionToSortValue(option);
                if (onSortChange) {
                  onSortChange(sortValue);
                }
              }}
              className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SortOptions;
