"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { birthDatePhoneNumberSchema } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setPhoneNumber } from "@/store/slices/signupSlice";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import DatePicker from "@/components/ui/date-picker";
import CountryPicker from "@/components/ui/country-picker";
import Link from "next/link";

export default function SignupFormUserInfo({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const { push } = useRouter();

  const date = useSelector((state: RootState) => state.signup.birthDate);
  const countryCodeValue = useSelector(
    (state: RootState) => state.signup.countryCode
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.signup.phoneNumber
  );
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof birthDatePhoneNumberSchema>>({
    resolver: zodResolver(birthDatePhoneNumberSchema),
    defaultValues: {
      birthDate: new Date(date),
      countryCode: countryCodeValue,
      phoneNumber: phoneNumber,
    },
  });

  async function onSubmit(values: z.infer<typeof birthDatePhoneNumberSchema>) {
    dispatch(setPhoneNumber(values.phoneNumber));
    push("/signup/avatar-picture");
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">User info</CardTitle>
        </CardHeader>
        <CardContent className="p-[32px] pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">Birth Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          {...field}
                          value={date}
                          className={cn(
                            "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                            form.formState.errors.birthDate
                              ? "border-[3px] border-red-500"
                              : "focus:border-[3px] focus:border-[#5a6c8d]"
                          )}
                          onChange={(e) => field.onChange(e)}
                        />
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">
                        Country code
                      </FormLabel>
                      <FormControl>
                        <CountryPicker
                          className={cn(
                            "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                            form.formState.errors.countryCode
                              ? "border-[3px] border-red-500"
                              : "focus:border-[3px] focus:border-[#5a6c8d]"
                          )}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">
                        Phone number
                      </FormLabel>
                      <FormControl>
                        <div className="flex items-center relative">
                          <Input
                            type="text"
                            className={cn(
                              "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                              form.formState.errors.phoneNumber
                                ? "border-[3px] border-red-500"
                                : "focus:border-[3px] focus:border-[#5a6c8d]"
                            )}
                            {...field}
                          />
                          {form.formState.errors.phoneNumber && (
                            <Image
                              src="/assets/images/CloseFill.svg"
                              width={16}
                              height={16}
                              className="absolute right-3 hover:cursor-pointer"
                              alt="Close"
                              onClick={() => {
                                form.clearErrors("phoneNumber");
                                form.setValue("phoneNumber", "");
                              }}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-3" variant="figmaPrimary">
                  Next
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
                <div className="flex justify-start items-center bg-[#f1f4f7] rounded-lg">
                  <div className="p-[20px]">
                    <Image
                      src="/assets/images/CustomerCheck.svg"
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
                      replace
                    >
                      Sign in instead
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
