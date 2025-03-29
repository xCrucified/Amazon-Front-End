import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "@/store/slices/headerSlice";
import { RootState } from "@/store/store";
import { setCategory } from "@/store/slices/catalogFiltersSlice";

export interface Category {
  id: number;
  name: string;
}

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    const hideHeaderRoutes = ["/registration", "/login", "/cart/secure-checkout"];
    const shouldHideHeader = hideHeaderRoutes.some((route) => pathname.startsWith(route));
    dispatch(setIsAuth(shouldHideHeader));
  }, [pathname, dispatch]);

  const isAuth = useSelector((state: RootState) => state.header.isAuth);

  if (isAuth) return null;

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/Category/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setCategories(await response.json());
      } catch (e) {
        console.error(e);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={cn("flex gap-[12px]", className)}>
      {categories.map((c, index) => (
        <Link
          key={index}
          href={`/catalog/${c.name}`}
          onClick={() => dispatch(setCategory(c.name))}
          replace
        >
          <Button className="w-[150px] h-[56px] bg-white text-black hover:bg-gray-100 transition-all duration-124 transform hover:translate-y-1 text-[16px]">
            {c.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
