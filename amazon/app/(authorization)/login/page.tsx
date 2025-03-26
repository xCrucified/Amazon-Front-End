// "use client";

// // import { cn } from "@/lib/utils";
// // import { getLoginSchema } from "@/lib/schemas/authSchema";
// // import { useRouter } from "next/navigation";
// // import { z } from "zod";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // import { useEffect, useMemo, useState } from "react";
// // import { useSession } from "next-auth/react";
// // // import { useDispatch, useSelector } from "react-redux";
// // import { RootState } from "@/store/store";
// // // import { setEmail, setPhoneNumber } from "@/store/slices/signupSlice";
// // import { useForm } from "react-hook-form";

// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "@/components/ui/form";
// // import { Label } from "@/components/ui/label";

// function LoginPage({ }: React.ComponentPropsWithoutRef<"div">) {
//   // const { replace } = useRouter();
//   // const session = useSession();
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   if (session.status === "authenticated") {
//   //     replace("/");
//   //   }
//   // }, [replace, session]);

//   // const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);
//   // // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   // const email = useSelector((state: RootState) => state.signup.email);
//   // const phoneNumber = useSelector((state: RootState) => state.signup.phoneNumber);

//   // const loginSchema = useMemo(
//   //   () => getLoginSchema(isPasswordInputVisible),
//   //   [isPasswordInputVisible]
//   // );

//   // const form = useForm<z.infer<typeof loginSchema>>({
//   //   resolver: zodResolver(loginSchema),
//   //   defaultValues: {
//   //     credential: email || phoneNumber,
//   //     password: "",
//   //   },
//   // });

//   // async function onSubmit({ credential, password }: z.infer<typeof loginSchema>) {
//   //   const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credential);
//   //   const apiUrl = isEmail ? "api/check/email" : "api/check/phoneNumber";

//   //   try {
//   //     const response = await fetch(apiUrl, {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(!isPasswordInputVisible ? credential : { credential, password }),
//   //     });
//   //     const data = await response.json();

//   //     if (!isPasswordInputVisible) {
//   //       if (data.exists === true) {
//   //         form.clearErrors("password");
//   //         isEmail ? dispatch(setEmail(credential)) : dispatch(setPhoneNumber(credential));
//   //         setIsPasswordInputVisible(true);
//   //       } else {
//   //         isEmail
//   //           ? (dispatch(setEmail(credential)), dispatch(setPhoneNumber("")))
//   //           : (dispatch(setEmail("")), dispatch(setPhoneNumber(credential)));
//   //         replace("/login/redirect");
//   //       }
//   //     } else {
//   //       const result = await signIn("credentials", {
//   //         redirect: false,
//   //         credential: credential,
//   //         password: password,
//   //       });
//   //       if (result?.error) {
//   //         console.error(result.error);
//   //         form.setError("password", {
//   //           type: "manual",
//   //           message: "Email or password is incorrect",
//   //         });
//   //         return;
//   //       }
//   //       replace("/");
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }

//   return (
//     <>Main</>
//     // <div className={cn("flex flex-col", className)}>
//     //   <Card className="border-none shadow-none">
//     //     <CardHeader className="text-center">
//     //       <CardTitle className="text-[23px] font-bold">
//     //         {isPasswordInputVisible ? "Sign in" : "Sign in or create account"}
//     //       </CardTitle>
//     //     </CardHeader>
//     //     <CardContent className="px-[32px] py-[36px] pt-0">
//     //       <Form {...form}>
//     //         <form onSubmit={form.handleSubmit(onSubmit)}>
//     //           <div className="flex flex-col gap-[32px]">
//     //             <div className="flex flex-col gap-3">
//     //               {isPasswordInputVisible ? (
//     //                 <div className="flex items-center justify-between">
//     //                   <Label className="text-[16px]">{form.getValues("credential")}</Label>
//     //                   <Button
//     //                     variant="ghost"
//     //                     className="text-[#37569E] text-[16px] hover:text-[#222935] focus:cursor-pointer"
//     //                     onClick={() => {
//     //                       setIsPasswordInputVisible(false);
//     //                       form.setValue("password", "");
//     //                     }}
//     //                   >
//     //                     Change
//     //                   </Button>
//     //                 </div>
//     //               ) : (
//     //                 <FormField
//     //                   control={form.control}
//     //                   name="credential"
//     //                   render={({ field }) => (
//     //                     <FormItem className="flex flex-col">
//     //                       <FormLabel className="text-[#000]">
//     //                         Enter mobile number or email
//     //                       </FormLabel>
//     //                       <FormControl>
//     //                         <div className="w-full flex items-center relative">
//     //                           <Input
//     //                             type="text"
//     //                             className={cn(
//     //                               "max-w-[341px] bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
//     //                               form.formState.errors.credential
//     //                                 ? "border-[3px] border-red-500"
//     //                                 : "focus:border-[3px] focus:border-[#5a6c8d]"
//     //                             )}
//     //                             {...field}
//     //                           />
//     //                           {form.formState.errors.credential && (
//     //                             <Image
//     //                               src="/assets/images/CloseFill.svg"
//     //                               width={16}
//     //                               height={16}
//     //                               className="absolute right-3 hover:cursor-pointer"
//     //                               alt="Close"
//     //                               onClick={() => {
//     //                                 form.clearErrors("credential");
//     //                                 form.setValue("credential", "");
//     //                               }}
//     //                             />
//     //                           )}
//     //                         </div>
//     //                       </FormControl>
//     //                       <FormMessage className="flex gap-1 items-center leading-[10px]" />
//     //                     </FormItem>
//     //                   )}
//     //                 />
//     //               )}
//     //               {isPasswordInputVisible ? (
//     //                 <>
//     //                   <FormField
//     //                     control={form.control}
//     //                     name="password"
//     //                     render={({ field }) => (
//     //                       <FormItem className="flex flex-col">
//     //                         <FormLabel className="text-[#000]">Password</FormLabel>
//     //                         <FormControl>
//     //                           <div className="flex items-center relative">
//     //                             <Input
//     //                               type={isPasswordVisible ? "text" : "password"}
//     //                               className={cn(
//     //                                 "bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
//     //                                 form.formState.errors.password
//     //                                   ? "border-[3px] border-red-500"
//     //                                   : "focus:border-[3px] focus:border-[#5a6c8d]"
//     //                               )}
//     //                               {...field}
//     //                               value={form.getValues("password")}
//     //                             />
//     //                             {isPasswordVisible ? (
//     //                               <Image
//     //                                 src="/assets/images/EyeHidenFill.svg"
//     //                                 width={16}
//     //                                 height={16}
//     //                                 className="absolute right-3 hover:cursor-pointer"
//     //                                 alt="Hide Password"
//     //                                 onClick={() => setIsPasswordVisible(false)}
//     //                               />
//     //                             ) : (
//     //                               <Image
//     //                                 src="/assets/images/EyeFill.svg"
//     //                                 width={16}
//     //                                 height={16}
//     //                                 className="absolute right-3 hover:cursor-pointer"
//     //                                 alt="Show Password"
//     //                                 onClick={() => setIsPasswordVisible(true)}
//     //                               />
//     //                             )}
//     //                           </div>
//     //                         </FormControl>
//     //                         <FormMessage className="flex gap-1 items-center leading-[10px]" />
//     //                       </FormItem>
//     //                     )}
//     //                   />
//     //                   <Button variant="figmaPrimary" type="submit">
//     //                     Sign in
//     //                   </Button>
//     //                   <Link
//     //                     href="/reset-password"
//     //                     className="text-[#37569E] text-center hover:text-[#222935]"
//     //                   >
//     //                     Forgot password?
//     //                   </Link>
//     //                 </>
//     //               ) : (
//     //                 <Button variant="figmaPrimary" type="submit">
//     //                   Continue
//     //                 </Button>
//     //               )}
//     //               {!isPasswordInputVisible && (
//     //                 <>
//     //                   <div className="text-[13px]">
//     //                     By continuing, you agree to Onyx&apos;s{" "}
//     //                     <Link
//     //                       href="/terms-of-service"
//     //                       className="underline text-[#37569E] hover:text-[#222935]"
//     //                     >
//     //                       Conditions of Use
//     //                     </Link>{" "}
//     //                     and{" "}
//     //                     <Link
//     //                       href="/privacy-policy"
//     //                       className="underline text-[#37569E] hover:text-[#222935]"
//     //                     >
//     //                       Privacy Notice
//     //                     </Link>
//     //                   </div>
//     //                   <div className="flex justify-start items-center bg-[#f1f4f7] rounded-lg">
//     //                     <div className="p-[20px]">
//     //                       <Image
//     //                         src="/assets/images/InfoOutline.svg"
//     //                         width={26}
//     //                         height={26}
//     //                         alt="info-outline"
//     //                       />
//     //                     </div>
//     //                     <div className="flex flex-col pt-[16px] pb-[16px]">
//     //                       <span className="text-[16px] leading-[18px]">Buying for work?</span>
//     //                       <Link href="#" className="text-[#37569E] text-[16px] leading-[18px]">
//     //                         Shop on Onyx Business
//     //                       </Link>
//     //                     </div>
//     //                   </div>
//     //                 </>
//     //               )}
//     //             </div>
//     //             {!isPasswordInputVisible && (
//     //               <>
//     //                 <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//     //                   <span className="relative z-10 bg-background px-2 text-muted-foreground">
//     //                     or continue with...
//     //                   </span>
//     //                 </div>
//     //                 <div className="flex gap-[12px]">
//     //                   <Button
//     //                     onClick={async (e) => {
//     //                       e.preventDefault();
//     //                       await signIn("google");
//     //                     }}
//     //                     variant="ghost"
//     //                     className="w-full h-11 px-3 py-4 bg-[#f1f4f7] rounded-lg justify-center items-center gap-1"
//     //                   >
//     //                     <Image
//     //                       src="/assets/images/GoogleLogoColored.svg"
//     //                       width={14}
//     //                       height={13}
//     //                       alt="Google Logo"
//     //                     />
//     //                     <div className="text-center text-black text-[13px] leading-[15px]">
//     //                       Sign in with Google
//     //                     </div>
//     //                   </Button>
//     //                   <Button
//     //                     onClick={async (e) => {
//     //                       e.preventDefault();
//     //                       await signIn("apple");
//     //                     }}
//     //                     variant="ghost"
//     //                     className="w-full h-11 px-3 py-4 bg-black rounded-lg justify-center items-center gap-1 hover:bg-black"
//     //                   >
//     //                     <Image
//     //                       className="pb-[3px] w-4 px-px flex-col justify-center items-center inline-flex"
//     //                       src="/assets/images/apple-logo-svgrepo-com.svg"
//     //                       height={24}
//     //                       width={24}
//     //                       alt="Apple Logo"
//     //                     />
//     //                     <div className="text-center text-white text-[13px] font-medium leading-[15px]">
//     //                       Sign in with Apple
//     //                     </div>
//     //                   </Button>
//     //                 </div>
//     //               </>
//     //             )}
//     //           </div>
//     //         </form>
//     //       </Form>
//     //     </CardContent>
//     //   </Card>
//     // </div>
//   );
// }

// export default LoginPage;

import React from 'react';

interface Props {
  className?: string;
}

const LoginPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      Main
    </div>
  );
};

export default LoginPage;