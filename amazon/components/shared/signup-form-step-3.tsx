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
import DatePicker from "../ui/date-picker";
import CountryPicker from "../ui/country-picker";
import { useRouter } from "next/navigation";

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const getFromLocalStorage = async () => {
    const birthDateString = localStorage.getItem("birthDate") || "";
    const birthDate = birthDateString ? new Date(birthDateString) : new Date();
    const countryCode = localStorage.getItem("countryCode") || "";
    const countryCodeLabel = localStorage.getItem("countryCodeLabel") || "";
    const phoneNumber = localStorage.getItem("phoneNumber") || "";
    return { birthDate, countryCode, countryCodeLabel, phoneNumber };
  };

  const form = useForm<z.infer<typeof birthDatePhoneNumberSchema>>({
    resolver: zodResolver(birthDatePhoneNumberSchema),
    defaultValues: {
      birthDate: new Date(),
      countryCode: "",
      phoneNumber: "",
    },
  });

  const [date, setDate] = React.useState<Date>(new Date());
  const [countryCodeValue, setCountryCodeValue] = React.useState(""); // +1
  const [countryCodeLabel, setCountryCodeLabel] = React.useState(""); // United States +1

  const { reset } = form;

  React.useEffect(() => {
    (async () => {
      const storedValues = await getFromLocalStorage();
      reset(storedValues);
      setDate(storedValues.birthDate);
      setCountryCodeValue(storedValues.countryCode);
      setCountryCodeLabel(storedValues.countryCodeLabel);
    })();
  }, [reset]);

  async function onSubmit(values: z.infer<typeof birthDatePhoneNumberSchema>) {
    localStorage.setItem("birthDate", values.birthDate.toISOString());
    localStorage.setItem("countryCode", values.countryCode);
    localStorage.setItem("countryCodeLabel", countryCodeLabel);
    localStorage.setItem("phoneNumber", values.phoneNumber);
    router.push("/signup/avatar-picture", );
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
                            date={date}
                            {...field}
                            setDate={(date) => {
                              setDate(date);
                              field.onChange(date);
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
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country code</FormLabel>
                        <FormControl>
                          <CountryPicker
                            label={countryCodeLabel}
                            setLabel={setCountryCodeLabel}
                            setValue={(value) => {
                              setCountryCodeValue(value);
                              field.onChange(value);
                            }}
                            {...field}
                            value={countryCodeValue}
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
                      const currentValues = form.getValues();
                      localStorage.setItem(
                        "birthDate",
                        currentValues.birthDate.toISOString()
                      );
                      localStorage.setItem(
                        "countryCode",
                        currentValues.countryCode
                      );
                      localStorage.setItem(
                        "countryCodeLabel",
                        countryCodeLabel
                      );
                      localStorage.setItem(
                        "phoneNumber",
                        currentValues.phoneNumber
                      );
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
