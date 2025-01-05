import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  {
    id: 9,
    title: "Music",
    href: "/music",
  },
  {
    id: 10,
    title: "Movies",
    href: "/movies",
  },
  {
    id: 11,
    title: "Books",
    href: "/books",
  }
  
];

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {items.map((item, index) => (
        <Link key={index} href={item.href}>
          <Button className="w-20 h-10 text-white">{item.title}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
