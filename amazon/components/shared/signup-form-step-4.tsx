"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { hashPassword } from "@/lib/auth";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { clearData, clearImage } from "@/store/slices/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ImagePicker from "@/components/ui/image-picker";

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const dispatch = useDispatch();

  const username = useSelector((state: RootState) => state.example.username);
  const email = useSelector((state: RootState) => state.example.email);
  const password = useSelector((state: RootState) => state.example.password);
  const birthDate = useSelector((state: RootState) => state.example.birthDate);
  const countryCode = useSelector(
    (state: RootState) => state.example.countryCode
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.example.phoneNumber
  );
  const selectedImage = useSelector(
    (state: RootState) => state.example.avatarPicture
  );

  const form = useForm();

  async function onSubmit() {
    const user = {
      username: username,
      email: email,
      passwordHash: await hashPassword(password),
      birthDate: birthDate,
      countryCode: countryCode,
      phoneNumber: phoneNumber,
      avatarPicture: selectedImage,
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        dispatch(clearData());
        toast.success("User created successfully");
        router.push("/");
      } else {
        console.error(response.statusText);
        toast.error(response.statusText);
        // router.push("/signup");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  }

  return (
    <div className={cn("flex flex-col w-[400px]", className)} {...props}>
      <Card className="w-[100%]">
        <CardHeader className="text-center">
          <CardTitle className="text-left text-xl">Sign Up</CardTitle>
          <CardDescription className="text-left">
            Avatar picture
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="avatarPicture"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3">
                      <FormControl>
                        <div className="flex flex-col gap-3">
                          <ImagePicker
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                            }}
                          />
                          <Button
                            variant="outline"
                            className="w-full flex-grow"
                            disabled={selectedImage === ""}
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(clearImage());
                              field.onChange("");
                            }}
                          >
                            <Trash /> Delete image
                          </Button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-2 pt-3">
                  <Button
                    variant="outline"
                    className="w-[80px]"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/signup/account-info");
                    }}
                  >
                    Prev
                  </Button>
                  <Button type="submit" className="w-[80px]">
                    Finish
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
