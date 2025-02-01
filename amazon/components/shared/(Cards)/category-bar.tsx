/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Container } from "../container";
import { Title } from "@/components/ui/title";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
// import { useAppDispatch } from "@/hooks/hooks";
// import { setActiveId } from "@/store/slices/categorySlice";

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  className?: string;
}

export const CategoryBar: React.FC<Props> = ({ className }) => {
  // const dispatch = useAppDispatch();

  return (
    <Container
      className={cn("flex flex-row justify-center h-[596px] gap-3", className)}
    >
      <Link href={"products" + "/" + `${1}`}>
        <div className="w-[435px] h-[100%] bg-white rounded-lg shadow-md p-4">
          <Title text={"Today’s Deals"} size={"xl"} className="font-bold" />

          <img
            src="/assets/images/products/pylesmok.svg"
            alt="pylesmok"
            className="w-[100%] h-[90%]"
          ></img>
        </div>
      </Link>

      <div className="flex flex-col gap-3">
        <div className="w-[284px] h-[50%] bg-white rounded-lg shadow-md p-4">

        </div>
        <div className="w-[284px] h-[50%] bg-white rounded-lg shadow-md p-4">

        </div>
      </div>

      <Link href={"products" + "/" + `${1}`}>
        <div className="w-[435px] h-[100%] bg-white rounded-lg shadow-md p-4">
          <Title text={"Today’s Deals"} size={"xl"} className="font-bold" />

          <img
            src="/assets/images/products/pylesmok.svg"
            alt="pylesmok"
            className="w-[100%] h-[90%]"
          ></img>
        </div>
      </Link>

      <div className="flex flex-col gap-3">
        <div className="w-[284px] h-[50%] bg-white rounded-lg shadow-md p-4">

        </div>
        <div className="w-[284px] h-[50%] bg-white rounded-lg shadow-md p-4">

        </div>
      </div>
    </Container>
  );
};
