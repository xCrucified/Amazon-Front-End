"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "@/lib/definitions";

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
import { useRouter } from "next/navigation";

interface Values {
  name: "password" | "reenterPassword";
  label: "Password" | "Re-enter password";
}

const values: Values[] = [
  { name: "password", label: "Password" },
  { name: "reenterPassword", label: "Re-enter password" },
];

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const getFromLocalStorage = async () => {
    const password = localStorage.getItem("password") || "";
    const reenterPassword = localStorage.getItem("reenterPassword") || "";
    return { password, reenterPassword };
  };

  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      reenterPassword: "",
    },
  });

  const { reset } = form;

  React.useEffect(() => {
    (async () => {
      const storedValues = await getFromLocalStorage();
      reset(storedValues);
    })();
  }, [reset]);

  async function onSubmit(values: z.infer<typeof passwordSchema>) {
    localStorage.setItem("password", values.password);
    localStorage.setItem("reenterPassword", values.reenterPassword);
    router.push("/signup/step-3");
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
                {values.map(({ name, label }) => (
                  <div key={name} className="flex-grow grid gap-2">
                    <FormField
                      control={form.control}
                      name={name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{label}</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              {...field}
                              value={form.getValues(name)}
                              onChange={(e) => field.onChange(e.target.value)}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
                <div className="flex justify-end gap-2 pt-3">
                  <Button
                    variant="outline"
                    className="w-[80px]"
                    onClick={(e) => {
                      e.preventDefault();
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
