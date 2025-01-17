"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";

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
import { getFromLocalStorage } from "@/lib/definitions";
import { hashPassword } from "@/lib/auth";

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = React.useState<{
    url: string;
    name: string | null;
  }>({ url: "", name: null });

  const form = useForm();

  async function onSubmit() {
    const storedValues = await getFromLocalStorage();

    const user = {
      username: storedValues.username,
      email: storedValues.email,
      passwordHash: await hashPassword(storedValues.password),
      birthDate: storedValues.birthDate,
      countryCode: storedValues.countryCode,
      phoneNumber: storedValues.phoneNumber,
      avatarPicture: selectedImage.name,
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
        localStorage.clear();
        toast.success("User created successfully");
        router.push("/");
      } else {
        router.push("/signup")
        localStorage.clear();
        toast.error("505: Internal server error");
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
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
                            selectedImage={selectedImage}
                            {...field}
                            onImageSelect={(imageData: {
                              url: string | null;
                              name: string | null;
                            }) => {
                              const { url, name } = imageData;
                              setSelectedImage({
                                url: url || "",
                                name: name || null,
                              });
                              field.onChange(name);
                            }}
                          />
                          <Button
                            variant="outline"
                            className="w-full flex-grow"
                            disabled={!selectedImage.url}
                            onClick={(e) => {
                              e.preventDefault();
                              localStorage.removeItem("imagePath");
                              localStorage.removeItem("avatarPicture");
                              setSelectedImage({ url: "", name: null });
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
                      localStorage.removeItem("imagePath");
                      localStorage.removeItem("avatarPicture");
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
