"use client";

import { cn } from "@/lib/utilities/utils";
import React, { useEffect } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";
import { setIsAuth } from "@/store/slices/headerSlice";
import { Container } from "../container";
import { Button } from "@/components/ui/button";
import { SearchInput } from "../search-input";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    const hideHeaderRoutes = ["/registration", "/login"];
    const shouldHideHeader = hideHeaderRoutes.some((route) => pathname.startsWith(route));
    dispatch(setIsAuth(shouldHideHeader));
  }, [pathname, dispatch]);

  const cart = useSelector((state: RootState) => state.cart.products);
  const isAuth = useSelector((state: RootState) => state.header.isAuth);
  
  if (isAuth) return null;

  return (
    <Container className={cn("flex justify-between items-center p-6", className)}>
      {/* left side */}
      <div className="bg-[#FFF] radius-[8px] bg-inherit">
        <Link href="/">
          <Button
            className="flex items-center h-[56px] p-4 border-none hover:bg-gray-300"
            variant={"outline"}
          >
            <Image
              className="h-[32.001px] w-[38.651px] bg-inherit"
              src={"/assets/images/Logo.svg"}
              width={100}
              height={100}
              alt="logo"
            />
            <p className="text-xl bg-inherit text-[#343a45] font-thin">Onyx</p>
          </Button>
        </Link>
      </div>

      {/* search bar */}
      <div className="relative right-16">
        <SearchInput />
      </div>

      {/* right side */}

      <div className="flex items-center h-[100%] gap-[16px]">
        <Link href="/saves">
          <Button className="bg-[#FFF] text-[#343a45] hover:bg-gray-300 h-[56px] w-[68px] p-4">
            <Image
              src={"/assets/images/Favorite.svg"}
              alt={""}
              width={128}
              height={128}
              className="w-[30px]"
            />
          </Button>
        </Link>
        <Link href="/userpage">
          <Button className="bg-[#FFF] text-[#343a45] hover:bg-gray-300 h-[56px] w-[68px] p-4">
            <Image
<<<<<<< HEAD:amazon/components/shared/header/header.tsx
              src="./assets/images/User.svg"
=======
              src={"/assets/images/User.svg"}
>>>>>>> card-develop:amazon/components/shared/header/header.tsx
              alt={""}
              width={128}
              height={128}
              className="w-[30px]"
            />
          </Button>
        </Link>

        <div>
          <Link href="/cart">
            <Button className="group relative bg-[#FFF] hover:bg-gray-300 h-[56px] w-[68px] p-4">
              <div className="flex items-center gap-1 duration-300 group-hover:opacity-0 text-[#343a45]">
                <ShoppingBag size={16} className="relative" strokeWidth={2} />
                <p>|</p>
                <b>{Object.values(cart).length}</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute transition duration-300 -translate-x-3 opacity-0 group-hover:text-black group-hover:opacity-100 group-hover:translate-x-0 top-5"
              />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
