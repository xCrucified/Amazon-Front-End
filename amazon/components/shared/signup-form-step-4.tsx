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

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const getFromLocalStorage = async () => {
    const username = localStorage.getItem("username") || "";
    const email = localStorage.getItem("email") || "";
    const password = localStorage.getItem("password") || "";
    const reenterPassword = localStorage.getItem("reenterPassword") || "";
    const birthDateString = localStorage.getItem("birthDate") || "";
    const birthDate = birthDateString ? new Date(birthDateString) : new Date();
    const countryCode = localStorage.getItem("countryCode") || "";
    const countryCodeLabel = localStorage.getItem("countryCodeLabel") || "";
    const phoneNumber = localStorage.getItem("phoneNumber") || "";
    const imagePath = localStorage.getItem("imagePath") || "";
    const avatarPicture = localStorage.getItem("avatarPicture") || "";
    return {
      username,
      email,
      password,
      reenterPassword,
      birthDate,
      countryCode,
      countryCodeLabel,
      phoneNumber,
      imagePath,
      avatarPicture,
    };
  };

  const [selectedImage, setSelectedImage] = React.useState<{
    base64: string;
    name: string | null;
  }>({ base64: "", name: null });

  const form = useForm();

  const { reset } = form;

  React.useEffect(() => {
    (async () => {
      const storedValues = await getFromLocalStorage();
      reset(storedValues);
      setSelectedImage({
        base64: storedValues.imagePath,
        name: storedValues.avatarPicture,
      });
    })();
  }, [reset]);

  async function onSubmit() {
    console.log(selectedImage.name);

    const storedValues = await getFromLocalStorage();

    const user = {
      username: storedValues.username,
      email: storedValues.email,
      password: storedValues.password,
      reenterPassword: storedValues.reenterPassword,
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
        toast.success("User created successfully");
        localStorage.clear();
        router.push("/");
      } else {
        toast.error("User creation failed");
      }
    } catch (error) {
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
                            className="w-[400px] h-[400px] flex items-center justify-center ml-3 border-2 border-dashed border-gray-300 rounded-full"
                            {...field}
                            onImageSelect={(imageData: {
                              base64: string | null;
                              name: string | null;
                            }) => {
                              const { base64, name } = imageData;

                              const payload = {
                                fileName: name, // Pass file name for upload
                                fileContent: base64, // Pass Base64 for preview/upload
                              };

                              setSelectedImage({ base64: base64 || "", name: name || "" }); // Update the preview
                              field.onChange(name); // Update the field with the file name
                            }}
                          />
                          <Button
                            variant="outline"
                            className="w-full flex-grow"
                            disabled={!selectedImage}
                            onClick={() => {
                              setSelectedImage({ base64: "", name: "" });
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
                      localStorage.setItem(
                        "imagePath",
                        selectedImage.base64 || ""
                      );
                      localStorage.setItem(
                        "avatarPicture",
                        selectedImage.name || ""
                      );
                      router.push("/signup/step-3");
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
