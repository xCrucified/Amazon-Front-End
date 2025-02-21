"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { clearData } from "@/store/slices/signupSlice";
import { cn, sendOTP } from "@/lib/utils";
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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function VerifyOTPPage({ className }: React.ComponentPropsWithoutRef<"div">) {
  const { replace } = useRouter();
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.signup.email);
  const phoneNumber = useSelector((state: RootState) => state.signup.phoneNumber);
  const username = useSelector((state: RootState) => state.signup.username);
  const password = useSelector((state: RootState) => state.signup.password);

  const otpSentRef = useRef(false);
  const form = useForm<{ otp: string }>({
    defaultValues: { otp: "" },
  });

  useEffect(() => {
    async function initOTP() {
      if (otpSentRef.current) return;
      otpSentRef.current = true;
      await sendOTP();
      if (!email && !phoneNumber) {
        replace("/signup");
      }
    }
    initOTP();
  }, [email, phoneNumber, replace]);

  async function onSubmit() {
    const enteredOTP = form.getValues("otp");

    try {
      const verifyResponse = await fetch("/api/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: enteredOTP }),
      });
      const verifyData = await verifyResponse.json();

      if (!verifyData.confirmed) return;

      const user = {
        email,
        username,
        password,
        phoneNumber: "+380987536324",
        birthDate: new Date(2000, 2).toISOString(),
      };
      const signupResponse = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const signupData = await signupResponse.json();
      if (signupData.status === 200) {
        replace("/login");
        dispatch(clearData());
      }
    } catch (error) {
      console.error("Error during OTP verification or sign up:", error);
    }
  }

  return (
    <div className={cn("flex flex-col w-[405px] h-[480px]", className)}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">
            Verify {email ? "email address" : "mobile number"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-[32px] pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div>
                  <label className="text-black font-medium">
                    To verify your {email ? "email" : "mobile"}, we&apos;ve sent a One Time Password
                    (OTP) to{" "}
                  </label>
                  <span className="font-bold underline decoration-dotted decoration-1">
                    {email || phoneNumber}
                  </span>
                </div>
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-black text-[14px] leading-[24px] select-none">
                        Enter OTP
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className={cn(
                            "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                            form.formState.errors.otp
                              ? "border-[3px] border-red-500"
                              : "focus:border-[3px] focus:border-[#5a6c8d]"
                          )}
                          {...field}
                          value={field.value ?? ""}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <Button variant="figmaPrimary" type="submit">
                  Create your Onyx account
                </Button>
                <div className="text-[13px]">
                  By continuing, you agree to Onyx&apos;s{" "}
                  <Link
                    href="/terms-of-service"
                    className="underline text-[#37569E] hover:text-[#222935]"
                  >
                    Conditions of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline text-[#37569E] hover:text-[#222935]"
                  >
                    Privacy Notice
                  </Link>
                </div>
                <Button
                  variant="ghost"
                  type="button"
                  className="text-[#37569E] hover:text-[#222935] text-[16px] w-[fit-content] mx-auto select-none"
                >
                  Resend OTP
                </Button>
                <Image
                  src="/assets/images/arrow-left.svg"
                  width={26}
                  height={22}
                  alt="Back"
                  className="mx-auto cursor-pointer"
                  onClick={() => replace("/signup")}
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
