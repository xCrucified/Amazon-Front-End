"use client";

import Link from "next/link";
import Image from "next/image";
import FooterAuth from "@/components/shared/footers/footer-auth";
import { useDispatch } from "react-redux";
import { clearData } from "@/store/slices/signupSlice";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center bg-muted">
      <div className="flex w-[405px] flex-col gap-6">
        <Link
          href="/"
          className="items-center self-center mt-12 mb-6"
          onClick={(e) => {
            e.preventDefault();
            dispatch(clearData());
            window.location.href = "/";
          }}
        >
          <Image src={"/assets/images/LogoFull.svg"} alt="logo" width={206} height={64} />
        </Link>
        {children}
        <FooterAuth />
      </div>
    </div>
  );
}
