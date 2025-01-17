import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingBag, User } from "lucide-react";
import { SearchInput } from "./search-input";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <Container
      className={cn("flex justify-between items-center p-1", className)}
    >
      {/* left side */}
      <div className="bg-[#FFF] radius-[8px] bg-inherit">
        <Button
          className="flex items-center h-[56px] p-4 border-none hover:bg-gray-300"
          variant={"outline"}
        >
          <Image
            className="h-[32.001px] w-[38.651px] bg-inherit"
            src={"/assets/images/Vector.png"}
            width={100}
            height={100}
            alt="logo"
          />
          <p className="text-lg bg-inherit">Onyx</p>
        </Button>
      </div>

      {/* search bar */}
      <div className="">
        <SearchInput />
      </div>

      {/* right side */}
      <div className="flex items-center gap-3">
        <Button variant={"outline"} className="flex items-center gap-2">
          <User size={16} />
          Log in
        </Button>

        <div>
          <Button className="group relative">
            <div className="flex items-center gap-1 duration-300 group-hover:opacity-0">
              <ShoppingBag size={16} className="relative" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight
              size={20}
              className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
