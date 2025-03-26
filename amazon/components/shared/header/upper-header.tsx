"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../container";
import Link from "next/link";
import { CountryDialog } from "../country-dialog";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface Props {
  className?: string;
}

export const UpperHeader: React.FC<Props> = ({ className }) => {
  const session = useSession();
  const isAuth = useSelector((state: RootState) => state.header.isAuth);

  return (
    <div className={cn("w-[100%] h-[60px] bg-[#353b46]", className)}>
      <Container className="w-[1400px] h-[100%] grid grid-cols-3 content-center items-center place-items-center gap-24 p-2 ">
        <div className="w-[115px]">
          <CountryDialog />
        </div>
        {session.status === "authenticated" ? (
          <>
            <div className="text-white">Hello, {session.data.user.email}</div>
            <Button variant="figmaPrimary" className="w-[300px]" onClick={() => signOut()}>
              Log out
            </Button>
          </>
        ) : (
          !isAuth && (
            <div className="w-[fit-content] text-white flex gap-1">
              <label>New customer?</label>
              <Link href="/login" className="border-b-[1.5px] border-dotted">
                Start here.
              </Link>
            </div>
          )
        )}
        {/* <div className="w-[120px] flex justify-center hidden">
          <Image src="/assets/images/Language.svg" alt="coord" width={20} height={20} />
          <ComboboxLanguage className="text-white" />
        </div> */}
      </Container>
    </div>
  );
};

export default UpperHeader;
