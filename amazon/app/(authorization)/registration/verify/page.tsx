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
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import InputOTP from "@/components/ui/input-otp";
import { decrementCooldown, setCooldown } from "@/store/slices/otpSlice";

export default function Page({ className }: React.ComponentPropsWithoutRef<"div">) {
  const { replace } = useRouter();
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.signup.email);
  const phoneNumber = useSelector((state: RootState) => state.signup.phoneNumber);
  const username = useSelector((state: RootState) => state.signup.username);
  const password = useSelector((state: RootState) => state.signup.password);
  const cooldown = useSelector((state: RootState) => state.otp.cooldown);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      dispatch(decrementCooldown());
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown, dispatch]);

  const form = useForm({
    defaultValues: { otp: "" },
  });

  async function handleResendOTP() {
    if (cooldown > 0) return;
    await sendOTP();
    dispatch(setCooldown(60));
  }

  const hasSentRef = useRef(false);

  useEffect(() => {
    if (!email && !phoneNumber) {
      replace("/registration");
    }

    if (!hasSentRef.current) {
      handleResendOTP();
      hasSentRef.current = true;
    }
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
                  <Label className="text-black font-medium">
                    To verify your {email ? "email" : "mobile"}, we&apos;ve sent a One Time Password
                    (OTP) to{" "}
                  </Label>
                  <span className="font-bold underline decoration-dotted decoration-1 cursor-pointer">
                    {email || phoneNumber}
                  </span>
                </div>
                <FormField
                  control={form.control}
                  name="otp"
                  render={() => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-black text-[14px] leading-[24px] select-none">
                        Enter OTP
                      </FormLabel>
                      <FormControl>
                        <InputOTP
                          length={5}
                          onChange={(otp) => form.setValue("otp", otp)}
                          className="focus:bg-white outline-none focus:border-[3px] focus:border-[#5a6c8d] duration-500 ease-in-out transition-all"
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
                  disabled={cooldown > 0}
                  onClick={handleResendOTP}
                  className="text-[#37569E] hover:text-[#222935] text-[16px] w-[fit-content] mx-auto select-none"
                >
                  {cooldown > 0 ? `Resend OTP (${cooldown}s)` : "Resend OTP"}
                </Button>
                <Image
                  src="/assets/images/arrow-left.svg"
                  width={26}
                  height={22}
                  alt="Back"
                  className="mx-auto cursor-pointer"
                  onClick={() => replace("/registration")}
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
