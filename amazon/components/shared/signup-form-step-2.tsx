"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "@/lib/definitions";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setPassword, setRPassword } from "@/store/slices/signupSlice";

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

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const password = useSelector((state: RootState) => state.example.password);
  const rPassword = useSelector((state: RootState) => state.example.rPassword);
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: password,
      rPassword: rPassword,
    },
  });

  async function onSubmit(values: z.infer<typeof passwordSchema>) {
    dispatch(setPassword(values.password));
    dispatch(setRPassword(values.rPassword));
    router.push("/signup/account-info");
  }

  return (
    <div className={cn("flex flex-col w-[400px]", className)} {...props}>
      <Card className="w-[100%]">
        <CardHeader className="text-center">
          <CardTitle className="text-left text-xl">Sign Up</CardTitle>
          <CardDescription className="text-left">Password</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <div className="flex-grow grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                            required
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
                    name="rPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Re-enter password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
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
                      dispatch(setPassword(form.getValues().password));
                      dispatch(setRPassword(form.getValues().rPassword));
                      router.push("/signup");
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
