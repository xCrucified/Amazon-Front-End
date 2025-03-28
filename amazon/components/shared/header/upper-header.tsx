"use client";

import { cn } from "@/lib/utilities/utils";
import React from "react";
import { Container } from "../container";
import Link from "next/link";
import { CountryDialog } from "../country-dialog";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

export const UpperHeader: React.FC<Props> = ({ className }) => {
  const session = useSession();
  const isAuth = useSelector((state: RootState) => state.header.isAuth);  

  return (
    <div className={cn("w-[100%] h-[60px] bg-[rgb(52,58,69)]", className)}>
      <Container className="w-[1175px] h-[100%] flex justify-between p-2 items-center">
        <div className="w-[115px]">
          <CountryDialog />
        </div>
        {session.status === "authenticated" && (
          <>
            <Label className="text-white text-[16px]">Hello, {session?.data.user.email}</Label>
            <Button
              variant="figmaPrimary"
              className="w-[200px]"
              onClick={async () => {
                await signOut();
              }}
            >
              Log out
            </Button>
          </>
        )}
        {!isAuth && session.status !== "authenticated" ? (
          <div className="w-[220px] text-white flex gap-1">
            <label>New customer?</label>
            <Link href="/login" className="border-b-[1.5px] border-dotted">
              Start here.
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div className="w-[120px] flex justify-center gap-2 hover:cursor-no-drop">
          <Image src="/assets/images/Language.svg" alt="coord" width={20} height={20} />
          {/* <ComboboxLanguage className="text-white" /> */}
          <p className="text-white text-[18px]">English</p>
        </div>
      </Container>
    </div>
  );
};

export default UpperHeader;