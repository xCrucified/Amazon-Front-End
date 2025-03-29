"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Container } from "../container";
import { Button } from "@/components/ui/button";
import { SearchInput } from "../search-input";
import { usePathname } from "next/navigation";
import { setIsAuth } from "@/store/slices/headerSlice";
import { useSession } from "next-auth/react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const session = useSession();
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    const hideHeaderRoutes = ["/registration", "/login", "/cart/secure-checkout"];
    const shouldHideHeader = hideHeaderRoutes.some((route) => pathname.startsWith(route));
    dispatch(setIsAuth(shouldHideHeader));
  }, [pathname, dispatch]);

  const [isCart, setCart] = React.useState(true);
  const [isWishlist, setWishlist] = React.useState(true);
  const [isUserpage, setUsepage] = React.useState(true);

  useEffect(() => {
    const shouldHoverHideCart = pathname.startsWith("/cart");
    setCart(!shouldHoverHideCart);
    const shouldFillHeart = pathname.startsWith("/wishlist");
    setWishlist(!shouldFillHeart);
    const shouldHoverHideUserpage = pathname.startsWith("/userpage");
    setUsepage(!shouldHoverHideUserpage);
  }, [isWishlist, pathname]);

  const isAuth = useSelector((state: RootState) => state.header.isAuth);

  if (isAuth) return null;

  return (
    <Container className={cn("flex justify-between items-center p-6", className)}>
      {/* left side */}
      <div className="flex gap-4">
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
        <SearchInput />
      </div>
      {/* right side */}
      <div className="flex items-center h-[100%] gap-[16px]">
        <Link href="/cart">
          <Button className="bg-[#FFF] group relative text-[#343a45] hover:bg-gray-300 h-[56px] w-[68px] p-4">
            <div
              className={cn(
                isCart && "group-hover:opacity-0",
                "flex items-center gap-1 duration-300 text-[#343a45]"
              )}
            >
              <Image
                src={"/assets/images/cart-icon.svg"}
                alt={""}
                width={0}
                height={0}
                className="w-7 h-7"
              />
            </div>
            {isCart && (
              <ArrowRight
                size={20}
                className="absolute transition duration-300 -translate-x-3 opacity-0 group-hover:text-black group-hover:opacity-100 group-hover:translate-x-0 top-5"
              />
            )}
          </Button>
        </Link>
        {session.data && (
          <>
            <Link href="/wishlist">
              <Button className="group relative bg-[#FFF] hover:bg-gray-300 h-[56px] w-[68px] p-4">
                <div
                  className={cn(
                    isWishlist && "group-hover:opacity-0",
                    "flex items-center gap-1 duration-300 text-[#343a45]"
                  )}
                >
                  <Image
                    src={
                      isWishlist
                        ? "/assets/images/heart-icon-outline.svg"
                        : "/assets/images/heart-icon-filled.svg"
                    }
                    alt="wishlist icon"
                    width={0}
                    height={0}
                    className="w-7 h-7"
                  />
                </div>
                {isWishlist && (
                  <ArrowRight
                    size={20}
                    className="absolute transition duration-300 -translate-x-3 opacity-0 group-hover:text-black group-hover:opacity-100 group-hover:translate-x-0 top-5"
                  />
                )}
              </Button>
            </Link>
            <Link href="/userpage">
              <Button className="group relative bg-[#FFF] text-[#343a45] hover:bg-gray-300 h-[56px] w-[fit-content] p-4">
                <div
                  className={cn(
                    isUserpage && "group-hover:opacity-0",
                    "flex items-center gap-3 duration-300 text-[#343a45]"
                  )}
                >
                  <Image
                    src="/assets/images/User.svg"
                    alt={""}
                    width={128}
                    height={128}
                    className="w-[30px]"
                  />
                  <div className="text-[16px]">
                    {session.data.user.username || session.data.user.email}
                  </div>
                </div>
                {isUserpage && (
                  <ArrowRight
                    size={20}
                    className="absolute transition duration-300 -translate-x-3 opacity-0 group-hover:text-black group-hover:opacity-100 group-hover:translate-x-0 top-5"
                  />
                )}
              </Button>
            </Link>
          </>
        )}
      </div>
    </Container>
  );
};

export default Header;
