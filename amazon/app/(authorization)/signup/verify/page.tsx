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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { clearData, setOTP } from "@/store/slices/signupSlice";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function VerifyOTPPage({ className }: React.ComponentPropsWithoutRef<"div">) {
  const { replace } = useRouter();
  const email = useSelector((state: RootState) => state.signup.email);
  const phoneNumber = useSelector((state: RootState) => state.signup.phoneNumber);
  const username = useSelector((state: RootState) => state.signup.username);
  const password = useSelector((state: RootState) => state.signup.password);
  const otp = useSelector((state: RootState) => state.signup.otp);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email === "" && phoneNumber === "") {
      replace("/signup");
    }
    sendOTP();
  }, [replace, sendOTP]);

  async function sendOTP() {
    try {
      const generatedOTP = Math.floor(10000 + Math.random() * 90000).toString();
      const response = await fetch("api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: generatedOTP }),
      });
      const data = await response.json();
      console.log(data);      
      if (data.success) {
        dispatch(setOTP(data.otp));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const form = useForm();

  async function onSubmit() {
    if (form.getValues("otp") === otp) {
      try {
        const user = {
          email: email,
          username: username,
          password: password,
          phoneNumber: "321321123",
        };
        const response = await fetch("api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data.status === 200) {
          replace("/login");
          dispatch(clearData());
        }
      } catch (error) {
        console.error("Error: " + error);
      }
    }
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">
            Verify {email !== "" && "email address"}
            {phoneNumber !== "" && "mobile number"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-[32px] pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <label className="text-[14px]">
                  To verify your {email !== "" && "email address"}
                  {phoneNumber !== "" && "mobile number"}, we&apos;ve sent a One Time Password (OTP)
                  to <span className="font-bold underline">{email || phoneNumber}</span>
                </label>
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">Enter OTP</FormLabel>
                      <FormControl>
                        {/* <InputOTP
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
                        </InputOTP> */}
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <Button variant="figmaPrimary" type="submit">
                  Create your Onyx account
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
                    <span className="text-[16px] leading-[18px]">Already a customer?</span>
                    <Link href="/login" className="text-[#37569E] text-[16px] leading-[18px]">
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
