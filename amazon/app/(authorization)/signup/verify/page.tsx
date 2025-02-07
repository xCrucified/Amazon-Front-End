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
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { otpSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function VerifyOTPPage({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const { push } = useRouter();

  const otp = useSelector((state: RootState) => state.signup.otp);
  const email = useSelector((state: RootState) => state.signup.email);
  useEffect(() => {
    if (!email || email === "") {
      push("/signup");
    }
  }, [email, push]);

  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function onSubmit(values: z.infer<typeof otpSchema>) {
    if(values.otp === otp) {
      push("/signup/user-info");
    } else {
      console.error("OTP doesn't exist"); 
    } 
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">
            Verify email address
          </CardTitle>
        </CardHeader>
        <CardContent className="p-[32px] pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <label className="text-[14px]">
                  To verify your email, we&apos;ve sent a One Time Password
                  (OTP) to <span className="font-bold underline">{email}</span>
                </label>
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">Enter OTP</FormLabel>
                      <FormControl>
                        <InputOTP
                          containerClassName="flex justify-between pt-2"
                          maxLength={5}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        >
                          {Array.from({ length: 5 }).map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className={cn(
                                "pointer-events-none absolute inset-0 flex items-center justify-center bg-white rounded-lg",
                                form.formState.errors.otp
                                  ? "border-[3px] border-red-500"
                                  : "border-[3px] border-[#5a6c8d]"
                              )}
                            />
                          ))}
                        </InputOTP>
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <Button variant="figmaPrimary" type="submit">
                  Check OTP
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
