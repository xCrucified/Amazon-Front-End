'use client';

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import React, {useState} from "react";
import { Button } from "../../ui/button";
import Categories from "../categories";
import Image from "next/image";
import { ModalAll } from "@/components/shared/modal/modalAllBtn";
import { cn } from "@/lib/utilities/utils";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    const hideHeaderRoutes = ["/registration", "/login", "/cart/secure-checkout"];
    const shouldHideHeader = hideHeaderRoutes.some((route) => pathname.startsWith(route));
    dispatch(setIsAuth(shouldHideHeader));
  }, [pathname, dispatch]);

  const isAuth = useSelector((state: RootState) => state.header.isAuth);

  if (isAuth) return null;

  return (
    <div className={cn("h-[56px] w-[1492px] p-6", className)}>
      <div className="flex justify-between items-center h-[100%] w-[100%]">
        <Button onClick={() => setIsModalOpen(true)} className="h-[56px] w-[68px] transition-all duration-124 transform hover:translate-y-1 hover:bg-gray-100 bg-white">
          <Image
            src={"/assets/images/AllBtn.svg"}
            alt={"All"}
            width={22}
            height={22}
          />
        </Button>
          <ModalAll isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Categories />
      </div>
    </div>
  );
};
