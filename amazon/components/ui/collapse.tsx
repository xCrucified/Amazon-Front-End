"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Subcategory } from "../shared/catalog-filter";
import { Checkbox } from "./checkbox";
import StarRatingFilter from "./star-rating-filter";

interface CollapseProps {
  className?: string;
  subcatogries: Subcategory[];
}

interface Brand {
  id: number;
  name: string;
  checked: boolean;
}

const initialBrands: Brand[] = [
  { id: 1, name: "Amazon Basics", checked: false },
  { id: 2, name: "Laptops", checked: false },
  { id: 3, name: "Monitors", checked: false },
  { id: 4, name: "Desktops", checked: false },
  { id: 5, name: "Headphones", checked: false },
  { id: 6, name: "TVs", checked: false },
  { id: 7, name: "Speakers", checked: false },
  { id: 8, name: "Projectors", checked: false },
  { id: 9, name: "Routers", checked: false },
  { id: 10, name: "Gaming tech", checked: false },
];

export const Collapse: React.FC<CollapseProps> = ({ className, subcatogries }) => {
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isPrimeOpen, setIsPrimeOpen] = useState(false);
  const [isPrimeChecked, setIsPrimeChecked] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [isIn3DaysOpen, setIsIn3DaysOpen] = useState(false);
  const [isIn3DaysShipping, setIsIn3DaysShipping] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [brands, setBrands] = useState<Brand[]>(initialBrands);
  const [isCustomerReviewsOpen, setIsCustomerReviewsOpen] = useState(false);

  useEffect(() => {
    setIsDepartmentOpen(false);
  }, [subcatogries]);

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="flex justify-between pr-2 pb-2 border-b-2 border-b-[#7d7d7d8c]"
        onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
      >
        <span className="font-bold">Department</span>
        <span
          className={
            "transition-transform duration-300 ease-in-out " +
            (isDepartmentOpen ? "rotate-180" : "rotate-0")
          }
        >
          {isDepartmentOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 ease-in-out ${
            isDepartmentOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`,
          className
        )}
      >
        {subcatogries.map((s) => (
          <div
            key={s.id}
            className="text-[14px] leading-[15px] hover:underline cursor-pointer pb-2"
          >
            {s.name}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="flex justify-between pr-2 pb-2 border-b-2 border-b-[#7d7d7d8c]"
        onClick={() => setIsPrimeOpen(!isPrimeOpen)}
      >
        <span className="font-bold">Onyx Prime</span>
        <span
          className={
            "transition-transform duration-300 ease-in-out " +
            (isPrimeOpen ? "rotate-180" : "rotate-0")
          }
        >
          {isPrimeOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 ease-in-out ${
            isPrimeOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`,
          className
        )}
      >
        <div className="flex gap-2 items-center pt-1">
          <Checkbox
            checked={isPrimeChecked}
            onClick={() => setIsPrimeChecked(!isPrimeChecked)}
            className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[3px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none shadow-none"
          />
          <span className="text-[14px] leading-[15px]">Prime</span>
        </div>
      </div>
      <button
        type="button"
        className="flex justify-between pr-2 pb-2 border-b-2 border-b-[#7d7d7d8c]"
        onClick={() => setIsShippingOpen(!isShippingOpen)}
      >
        <span className="font-bold">Shipping</span>
        <span
          className={
            "transition-transform duration-300 ease-in-out " +
            (isShippingOpen ? "rotate-180" : "rotate-0")
          }
        >
          {isShippingOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 ease-in-out ${
            isShippingOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`,
          className
        )}
      >
        <div className="flex gap-2 items-center pt-1">
          <Checkbox
            checked={isFreeShipping}
            onClick={() => setIsFreeShipping(!isFreeShipping)}
            className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[3px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none shadow-none"
          />
          <span className="text-[14px] leading-[15px]">FREE Shipping</span>
        </div>
      </div>
      <button
        type="button"
        className="flex justify-between pr-2 pb-2 border-b-2 border-b-[#7d7d7d8c]"
        onClick={() => setIsIn3DaysOpen(!isIn3DaysOpen)}
      >
        <span className="font-bold">Delivery Day</span>
        <span
          className={
            "transition-transform duration-300 ease-in-out " +
            (isIn3DaysOpen ? "rotate-180" : "rotate-0")
          }
        >
          {isIn3DaysOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 ease-in-out ${
            isIn3DaysOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`,
          className
        )}
      >
        <div className="flex gap-2 items-center pt-1">
          <Checkbox
            checked={isIn3DaysShipping}
            onClick={() => setIsIn3DaysShipping(!isIn3DaysShipping)}
            className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[3px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none shadow-none"
          />
          <span className="text-[14px] leading-[15px]">Get It in 3 days</span>
        </div>
      </div>
      <button
        type="button"
        className="flex justify-between pr-2 pb-2 border-b-2 border-b-[#7d7d7d8c]"
        onClick={() => setIsBrandOpen(!isBrandOpen)}
      >
        <span className="font-bold">Brand</span>
        <span
          className={
            "transition-transform duration-300 ease-in-out " +
            (isBrandOpen ? "rotate-180" : "rotate-0")
          }
        >
          {isBrandOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 ease-in-out ${
            isBrandOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`,
          className
        )}
      >
        {brands.map((b) => (
          <div key={b.id} className="flex gap-3 items-center py-1">
            <Checkbox
              checked={b.checked}
              onClick={() => {
                setBrands(
                  brands.map((brand) =>
                    brand.id === b.id ? { ...brand, checked: !brand.checked } : brand
                  )
                );
              }}
              className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[3px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none shadow-none"
            />
            <span className="text-[14px] leading-[15px]">{b.name}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="flex justify-between pr-2 pb-2 border-b-2 border-b-[#7d7d7d8c]"
        onClick={() => setIsCustomerReviewsOpen(!isCustomerReviewsOpen)}
      >
        <span className="font-bold">Customer Reviews</span>
        <span
          className={
            "transition-transform duration-300 ease-in-out " +
            (isCustomerReviewsOpen ? "rotate-180" : "rotate-0")
          }
        >
          {isCustomerReviewsOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 ease-in-out ${
            isCustomerReviewsOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`,
          className
        )}
      >
        <div className="flex gap-2 items-center">
          <StarRatingFilter initialRate={0} className="w-[fit-content]" />
          <span className="text-[14px] leading-[15px]">& Up</span>
        </div>
      </div>
      <button
        type="button"
        className="flex justify-between pr-2 pb-2 border-b-2 border-b-[#7d7d7d8c]"
        onClick={() => setIsCustomerReviewsOpen(!isCustomerReviewsOpen)}
      >
        <span className="font-bold">Price</span>
        <span
          className={
            "transition-transform duration-300 ease-in-out " +
            (isCustomerReviewsOpen ? "rotate-180" : "rotate-0")
          }
        >
          {isCustomerReviewsOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 ease-in-out ${
            isCustomerReviewsOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`,
          className
        )}
      >
        <div className="flex gap-2 items-center">
          <div className="flex gap-2">
            <div className="w-full flex gap-2">
              <input type="number" className="w-full bg-[#ececec] text-center" />
              <input type="number" className="w-full bg-[#ececec] text-center" />
            </div>
            <button
              type="button"
              className="w-[fit-content] text-white text-[16px] px-3 py-1 bg-[#353b46]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
