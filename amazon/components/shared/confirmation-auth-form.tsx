"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function ConfirmationAuthForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const { data: session } = useSession();
  //   if (session) {
  //     router.push("/login");
  //   }

  const email = useSelector((state: RootState) => state.signup.email);
  if (!email || email === "") {
    router.push("/login");
  }

  const form = useForm();

  async function onSubmit() {
    router.push("/signup");
  }

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">
            Looks like you&apos;re new to Onyx
          </CardTitle>
        </CardHeader>
        <CardContent className="p-[32px] pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <label>{email}</label>
                  <button
                    className="text-[#37569E] hover:text-[#222935] focus:cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/login");
                    }}
                  >
                    Change
                  </button>
                </div>
                <label>Let&apos;s create an account using your email</label>
                <Button variant="figmaPrimary" type="submit">
                  Proceed to create an account
                </Button>
                <div className="flex justify-start items-center bg-[#f1f4f7] rounded-lg mt-3">
                  <div className="p-[20px]">
                    <Image
                      src="/assets/images/InfoOutline.svg"
                      width={26}
                      height={26}
                      alt="info-outline"
                    />
                  </div>
                  <div className="flex flex-col pt-[16px] pb-[16px]">
                    <span className="text-[16px] leading-[18px]">
                      Already a customer?
                    </span>
                    <Link
                      href="/login"
                      className="text-[#37569E] text-[16px] leading-[18px]"
                    >
                      Sign in with another credentials
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ConfirmationAuthForm;