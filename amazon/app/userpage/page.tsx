import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const UserPage: React.FC<Props> = ({ className }) => {
  return (
    <Container
      className={cn(
        "flex justify-between items-center p-6 outline w-[100%] h-[100%]",
        className
      )}
    >
      <div className="flex flex-col gap-6 outline">
        <div className="outline">
          <Link
            className="text-black w-[220px] h-[56px] flex justify-center items-center"
            href={`/login-secure`}
          >
            <img src="/assets/images/login-secure-img.svg" alt="logo" className="w-[24px]"></img>
            Login & Security
          </Link>
        </div>
        <Link
          href={`/your-orders`}
          className="bg-inherit hover:bg-inherit shadow-none text-black justify-center flex gap-3"
        >
          <img src="/assets/images/login-secure-img.svg" alt=""></img>
          Your Orders
        </Link>
        <Link
          className="bg-inherit hover:bg-inherit shadow-none justify-center flex gap-3 text-black"
          href={`/login-secure`}
        >
          <img src="/assets/images/login-secure-img.svg" alt=""></img>
          Login & Security
        </Link>
        <Link
          href={`/your-orders`}
          className="bg-inherit hover:bg-inherit shadow-none text-black justify-center flex gap-3"
        >
          <img src="/assets/images/login-secure-img.svg" alt=""></img>
          Your Orders
        </Link>
        <Link
          className="bg-inherit hover:bg-inherit shadow-none justify-center flex gap-3 text-black"
          href={`/login-secure`}
        >
          <img src="/assets/images/login-secure-img.svg" alt=""></img>
          Login & Security
        </Link>
        <Link
          href={`/your-orders`}
          className="bg-inherit hover:bg-inherit shadow-none text-black justify-center flex gap-3"
        >
          <img src="/assets/images/login-secure-img.svg" alt=""></img>
          Your Orders
        </Link>
        <Link
          className="bg-inherit hover:bg-inherit shadow-none justify-center flex gap-3 text-black"
          href={`/login-secure`}
        >
          <img src="/assets/images/login-secure-img.svg" alt=""></img>
          Login & Security
        </Link>
        <Link
          href={`/your-orders`}
          className="bg-inherit hover:bg-inherit shadow-none text-black justify-center flex gap-3"
        >
          <img src="/assets/images/login-secure-img.svg" alt=""></img>
          Your Orders
        </Link>
      </div>
    </Container>
  );
};

export default UserPage;
