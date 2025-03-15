import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utilities/utils";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "@/store/slices/headerSlice";
import { RootState } from "@/store/store";

interface Props {
  className?: string;
}

interface Categs {
  id: number;
  title: string;
  href: string;
}

const items: Categs[] = [
  {
    id: 1,
    title: "boba",
    href: "/bobA",
  },
  {
    id: 2,
    title: "Tech",
    href: "/tech",
  },
  {
    id: 3,
    title: "Design",
    href: "/design",
  },
  {
    id: 4,
    title: "Health",
    href: "/health",
  },
  {
    id: 5,
    title: "Science",
    href: "/science",
  },
  {
    id: 6,
    title: "Sports",
    href: "/sports",
  },
  {
    id: 7,
    title: "Travel",
    href: "/travel",
  },
  {
    id: 8,
    title: "Food",
    href: "/food",
  },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    const hideHeaderRoutes = ["/registration", "/login"];
    const shouldHideHeader = hideHeaderRoutes.some((route) => pathname.startsWith(route));
    dispatch(setIsAuth(shouldHideHeader));
  }, [pathname, dispatch]);

  const isAuth = useSelector((state: RootState) => state.header.isAuth);

  if (isAuth) return null;

  return (
    <div className={cn("flex gap-[12px]", className)}>
      {items.map((item, index) => (
        <Link key={index} href={item.href}>
          <Button className="w-[150px] h-[56px] bg-white text-black hover:bg-gray-100 transition-all duration-124 transform hover:translate-y-1 text-[16px]">
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
