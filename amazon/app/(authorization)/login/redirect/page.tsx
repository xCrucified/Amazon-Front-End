"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";

export default function RedirectAuthPage({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const { replace } = useRouter();

  const email = useSelector((state: RootState) => state.signup.email);
  const phoneNumber = useSelector((state: RootState) => state.signup.phoneNumber);
  useEffect(() => {
    if (email === "" && phoneNumber === "") {
      replace("/login");
    }
  }, [email, phoneNumber, replace]);

  const form = useForm();

  async function onSubmit() {
    replace("/registration");
  }

  return (
    <div className={cn("flex flex-col", className)}>
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
                  <Label className="text-[16px]">{email || phoneNumber}</Label>
                  <Button
                    variant="ghost"
                    className="text-[#37569E] text-[16px] hover:text-[#222935] focus:cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      replace("/login");
                    }}
                  >
                    Change
                  </Button>
                </div>
                <Label>Let&apos;s create an account using your {email !== "" && "email"}{phoneNumber !== "" && "mobile number"}</Label>
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
