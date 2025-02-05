"use client";

import { cn } from "@/lib/utils";
import { loginSchema } from "@/lib/definitions";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import { hashPassword, verifyPassword } from "@/lib/auth";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setEmail } from "@/store/slices/signupSlice";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

export default function LoginPage({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const { push } = useRouter();

  const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const email = useSelector((state: RootState) => state.signup.email);
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: email,
      password: "",
    },
  });

  async function checkEmail() {
    try {
      const response = await fetch("api/check/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.getValues("email")),
      });

      const data = await response.json();

      if (data) {
        form.clearErrors("password");
        setIsPasswordInputVisible(true);
      } else {
        dispatch(setEmail(form.getValues("email")));
        push("/login/redirect");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  }

  // async function checkPhoneNumber() {
  //   try {
  //     const response = await fetch("api/check/phoneNumber", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();

  //     if (data) {
  //       form.clearErrors("password");
  //       setIsPasswordInputVisible(true);
  //     } else {
  //       dispatch(setEmail(form.getValues("email")));
  //       push("/login/redirect");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("An error occurred");
  //   }
  // }

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const user = {
      email: values.email,
      password: values.password,
    };

    // try {
    //   const route = isEmail ? "/api/login/email" : "/api/login/phoneNumber";

    //   const response = await fetch(route, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     if (await verifyPassword(user.password, data.passwordHash)) {
    //       toast.info("You're logged in successfully");
    //       console.log("You're logged in successfully");
    //       push("/");
    //     } else {
    //       console.log("Invalid email or password");
    //       toast.error("Invalid email or password");
    //     }
    //   } else {
    //     toast.error(data.error);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("An error occurred");
    // }
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">
            {isPasswordInputVisible ? "Sign in" : "Sign in or create account"}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-[32px] py-[36px] pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-3">
                  {isPasswordInputVisible ? (
                    <div className="flex items-center justify-between">
                      <Label>{form.getValues("email")}</Label>
                      <Button
                        variant="ghost"
                        className="text-[#37569E] text-[16px] hover:text-[#222935] focus:cursor-pointer"
                        onClick={() => {
                          setIsPasswordInputVisible(false);
                          form.setValue("password", "");
                        }}
                      >
                        Change
                      </Button>
                    </div>
                  ) : (
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-[#000]">
                            Enter mobile number or email
                          </FormLabel>
                          <FormControl>
                            <div className="w-full flex items-center">
                              <Input
                                type="email"
                                className={cn(
                                  "max-w-[341px] bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                                  form.formState.errors.email
                                    ? "border-[3px] border-red-500"
                                    : "focus:border-[3px] focus:border-[#5a6c8d]"
                                )}
                                {...field}
                              />
                              {form.formState.errors.email && (
                                <Image
                                  src="/assets/images/CloseFill.svg"
                                  width={16}
                                  height={16}
                                  className="absolute right-3 hover:cursor-pointer"
                                  alt="Close"
                                  onClick={() => {
                                    form.clearErrors("email");
                                    form.setValue("email", "");
                                  }}
                                />
                              )}
                            </div>
                          </FormControl>
                          <FormMessage className="flex gap-1 items-center leading-[10px]" />
                        </FormItem>
                      )}
                    />
                  )}
                  {isPasswordInputVisible ? (
                    <>
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-[#000]">
                              Password
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
                      <Button variant="figmaPrimary" type="submit">
                        Sign in
                      </Button>
                      <Link
                        href="/reset-password"
                        className="text-[#37569E] text-center hover:text-[#222935]"
                      >
                        Forgot password?
                      </Link>
                    </>
                  ) : (
                    <Button
                      variant="figmaPrimary"
                      onClick={() => {
                        if (
                          !form.formState.errors.email &&
                          form.getValues("email") !== ""
                        ) {
                          checkEmail();
                        }
                      }}
                    >
                      Continue
                    </Button>
                  )}
                  {!isPasswordInputVisible && (
                    <>
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
                          <span className="text-[16px] leading-[18px]">
                            Buying for work?
                          </span>
                          <Link
                            href="#"
                            className="text-[#37569E] text-[16px] leading-[18px]"
                          >
                            Shop on Onyx Business
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {!isPasswordInputVisible && (
                  <>
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                      <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        or continue with...
                      </span>
                    </div>
                    <div className="flex gap-[12px]">
                      <Button
                        onClick={() => signIn("google")}
                        variant="ghost"
                        className="w-full h-11 px-3 py-4 bg-[#f1f4f7] rounded-lg justify-center items-center gap-1"
                      >
                        <Image
                          src="/assets/images/GoogleLogoColored.svg"
                          width={14}
                          height={13}
                          alt="Google Logo"
                        />
                        <div className="text-center text-black text-[13px] leading-[15px]">
                          Sign in with Google
                        </div>
                      </Button>
                      <Button
                        onClick={() => signIn("apple")}
                        variant="ghost"
                        className="w-full h-11 px-3 py-4 bg-black rounded-lg justify-center items-center gap-1"
                      >
                        <Image
                          className="pb-[3px] w-4 px-px flex-col justify-center items-center inline-flex"
                          src="/assets/images/apple-logo-svgrepo-com.svg"
                          height={24}
                          width={24}
                          alt="Apple Logo"
                        />
                        <div className="text-center text-white text-[13px] font-medium leading-[15px]">
                          Sign in with Apple
                        </div>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
