"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { birthDatePhoneNumberSchema } from "@/lib/definitions";

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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import DatePicker from "@/components/ui/date-picker";
import CountryPicker from "@/components/ui/country-picker";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setCountryCode, setPhoneNumber } from "@/app/store/slices/signupSlice";

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const date = useSelector((state: RootState) => state.example.birthDate);
  const countryCodeValue = useSelector(
    (state: RootState) => state.example.countryCode
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.example.phoneNumber
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
    router.push("/signup/avatar-picture");
  }

  return (
    <div className={cn("flex flex-col w-[400px]", className)} {...props}>
      <Card className="w-[100%]">
        <CardHeader className="text-center">
          <CardTitle className="text-left text-xl">Sign Up</CardTitle>
          <CardDescription className="text-left">Account info</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <div className="flex-grow grid gap-2">
                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Birth Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            {...field}
                            value={date}
                            onChange={(e) => field.onChange(e)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-grow grid gap-2">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country code</FormLabel>
                        <FormControl>
                          <CountryPicker
                            {...field}
                            value={countryCodeValue}
                            onChange={(e) => {
                              field.onChange(e);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-grow grid gap-2">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            className="flex-grow"
                            {...field}
                            onChange={(e) => {
                              dispatch(setPhoneNumber(e.target.value));
                              field.onChange(e.target.value);
                            }}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end gap-2 pt-3">
                  <Button
                    variant="outline"
                    className="w-[80px]"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/signup/password");
                    }}
                  >
                    Prev
                  </Button>
                  <Button type="submit" className="w-[80px]">
                    Next
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
