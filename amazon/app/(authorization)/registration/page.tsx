"use client";

import * as React from "react";
import { cn } from "@/lib/utilities/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/schemas/authSchema";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  setUsername,
  setEmail,
  setPassword,
  setRPassword,
  setPhoneNumber,
} from "@/store/slices/signupSlice";

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
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/dist/client/components/navigation";

export default function Page({ className }: React.ComponentPropsWithoutRef<"div">) {
  const { push } = useRouter();

  const username = useSelector((state: RootState) => state.signup.username);
  const email = useSelector((state: RootState) => state.signup.email);
  const phoneNumber = useSelector((state: RootState) => state.signup.phoneNumber);
  const password = useSelector((state: RootState) => state.signup.password);
  const rPassword = useSelector((state: RootState) => state.signup.rPassword);
  const dispatch = useDispatch();

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isRPasswordVisible, setIsRPasswordVisible] = React.useState(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      credential: email || phoneNumber,
      username: username,
      password: password,
      rPassword: rPassword,
    },
    mode: "onBlur",
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.credential);
    if (isEmail) {
      dispatch(setEmail(values.credential));
      dispatch(setPhoneNumber(""));
    } else {
      dispatch(setEmail(""));
      dispatch(setPhoneNumber(values.credential));
    }
    dispatch(setUsername(values.username));
    dispatch(setPassword(values.password));
    dispatch(setRPassword(values.rPassword));
    push("/registration/verify");
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">Create account</CardTitle>
        </CardHeader>
        <CardContent className="p-[32px] pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="credential"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">Enter mobile number or email</FormLabel>
                      <FormControl>
                        <div className="flex items-center relative">
                          <Input
                            type="text"
                            className={cn(
                              "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                              form.formState.errors.credential
                                ? "border-[3px] border-red-500"
                                : "focus:border-[3px] focus:border-[#5a6c8d]"
                            )}
                            {...field}
                            onChange={(e) => {
                              form.setValue("credential", e.target.value);
                            }}
                          />
                          {form.formState.errors.credential && (
                            <Image
                              src="/assets/images/CloseFill.svg"
                              width={16}
                              height={16}
                              className="absolute right-3 hover:cursor-pointer"
                              alt="Close"
                              onClick={() => {
                                form.clearErrors("credential");
                                form.setValue("credential", "");
                              }}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">Username</FormLabel>
                      <FormControl>
                        <div className="flex items-center relative">
                          <Input
                            type="text"
                            className={cn(
                              "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                              form.formState.errors.username
                                ? "border-[3px] border-red-500"
                                : "focus:border-[3px] focus:border-[#5a6c8d]"
                            )}
                            {...field}
                            value={form.getValues("username")}
                            onChange={(e) => {
                              field.onChange(e.target.value);
                            }}
                          />
                          {form.formState.errors.username && (
                            <Image
                              src="/assets/images/CloseFill.svg"
                              width={16}
                              height={16}
                              className="absolute right-3 hover:cursor-pointer"
                              alt="Close"
                              onClick={() => {
                                form.clearErrors("username");
                                form.setValue("username", "");
                              }}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">
                        Password (at least 8 characters)
                      </FormLabel>
                      <FormControl>
                        <div className="flex items-center relative">
                          <Input
                            type={isPasswordVisible ? "text" : "password"}
                            className={cn(
                              "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                              form.formState.errors.password
                                ? "border-[3px] border-red-500"
                                : "focus:border-[3px] focus:border-[#5a6c8d]"
                            )}
                            {...field}
                          />
                          {isPasswordVisible ? (
                            <Image
                              src="/assets/images/EyeHidenFill.svg"
                              width={16}
                              height={16}
                              className="absolute right-3 hover:cursor-pointer"
                              alt="Hide Password"
                              onClick={() => setIsPasswordVisible(false)}
                            />
                          ) : (
                            <Image
                              src="/assets/images/EyeFill.svg"
                              width={16}
                              height={16}
                              className="absolute right-3 hover:cursor-pointer"
                              alt="Show Password"
                              onClick={() => setIsPasswordVisible(true)}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                {!form.formState.errors.password && (
                  <div className="flex gap-1 items-center leading-[10px] pt-[2x] pb-[6px]">
                    <Image
                      src="/assets/images/InfoFullBlue.svg"
                      width={12}
                      height={12}
                      alt="Info"
                    />
                    <span className="text-[0.8rem] font-medium text-[#272727]">
                      Passwords must consist of at least 8 characters
                    </span>
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="rPassword"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#000]">Password again</FormLabel>
                      <FormControl>
                        <div className="flex items-center relative">
                          <Input
                            type={isRPasswordVisible ? "text" : "password"}
                            className={cn(
                              "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                              form.formState.errors.rPassword
                                ? "border-[3px] border-red-500"
                                : "focus:border-[3px] focus:border-[#5a6c8d]"
                            )}
                            {...field}
                          />
                          {isRPasswordVisible ? (
                            <Image
                              src="/assets/images/EyeHidenFill.svg"
                              width={16}
                              height={16}
                              className="absolute right-3 hover:cursor-pointer"
                              alt="Hide Password"
                              onClick={() => setIsRPasswordVisible(false)}
                            />
                          ) : (
                            <Image
                              src="/assets/images/EyeFill.svg"
                              width={16}
                              height={16}
                              className="absolute right-3 hover:cursor-pointer"
                              alt="Show Password"
                              onClick={() => setIsRPasswordVisible(true)}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage className="flex gap-1 items-center leading-[10px]" />
                    </FormItem>
                  )}
                />
                <Button variant="figmaPrimary" type="submit">
                  Verify
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
                      src="/assets/images/InfoOutline.svg"
                      width={26}
                      height={26}
                      alt="info-outline"
                    />
                  </div>
                  <div className="flex flex-col pt-[16px] pb-[16px]">
                    <span className="text-[16px] leading-[18px]">Buying for work?</span>
                    <Link href="#" className="text-[#37569E] text-[16px] leading-[18px]">
                      Create a free business account
                    </Link>
                  </div>
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
                    <span className="text-[16px] leading-[18px]">Already a customer?</span>
                    <Link href="/login" className="text-[#37569E] text-[16px] leading-[18px]">
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
