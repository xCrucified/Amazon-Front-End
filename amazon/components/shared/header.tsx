import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingBag, User } from "lucide-react";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left side */}
        <div className="flex items-center gap-4">
          {/* <Image src={"/shopIcon.png"} alt="Logo" width={35} height={35}/> */}

          <div>
            <h1 className="text-2xl uppercase font-black">onyx</h1>
            <p className="text-xm text-gray-400 leading-3">
              Trendy. Affordable. Yours.
            </p>
          </div>
        </div>

        {/* search bar */}
        <div className="flex w-[35%] relative">
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
    </header>
  );
};

export default Header;
