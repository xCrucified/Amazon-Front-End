"use client";

import * as React from "react";
import { hashPassword } from "@/lib/auth";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  clearData,
  clearImage,
  setAvatarPicture,
  setAvatarPictureUrl,
  setSelected,
} from "@/store/slices/signupSlice";
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
import ImageCropper from "@/components/ui/image-cropper";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function AvatarChoiceForm() {
  const { push, replace } = useRouter();
  const dispatch = useDispatch();

  const username = useSelector((state: RootState) => state.signup.username);
  const email = useSelector((state: RootState) => state.signup.email);
  const password = useSelector((state: RootState) => state.signup.password);
  const birthDate = useSelector((state: RootState) => state.signup.birthDate);
  const countryCode = Number.parseInt(
    useSelector((state: RootState) => state.signup.countryCode)
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.signup.phoneNumber
  );
  const selectedImage = useSelector(
    (state: RootState) => state.signup.avatarPicture
  );
  const selectedImageUrl = useSelector(
    (state: RootState) => state.signup.avatarPictureUrl
  );
  const isSelected = useSelector((state: RootState) => state.signup.isSelected);

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(setAvatarPictureUrl(imageUrl));
      dispatch(setSelected(true));
    }
  };

  const handleCropComplete = (croppedDataUrl: string) => {
    dispatch(setAvatarPictureUrl(croppedDataUrl));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCancel = () => {
    if (selectedImageUrl) URL.revokeObjectURL(selectedImageUrl);
    dispatch(clearImage());
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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

    console.log(user);

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
        replace("/");
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
    <div className="flex flex-col">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-[23px] font-bold">
            Avatar picture
          </CardTitle>
        </CardHeader>
        <CardContent className="p-[32px] pt-0">
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
                          {/* {!isSelected && (
                            <Input
                              type="file"
                              accept="image/*"
                              {...field}
                              ref={fileInputRef}
                              onChange={handleImageUpload}
                            />
                          )}
                          {fileInputRef.current?.value &&
                            fileInputRef.current?.value !== "" && (
                              <ImageCropper
                                imageSrc={selectedImageUrl}
                                onCropComplete={handleCropComplete}
                                onCancel={handleCancel}
                              />
                            )}
                          {isSelected && (
                            <Image
                              src={selectedImageUrl}
                              width={0}
                              height={0}
                              alt="Cropped"
                              className="w-full h-full rounded-xl self-center"
                            />
                          )} */}
                          <ImagePicker
                            className="min-w-[300px] min-h-[300px] flex flex-col relative"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                            }}
                          />
                          <Button
                            variant="outline"
                            className="w-full flex-grow"
                            disabled={!isSelected}
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
                <Button variant="outline" className="w-full" disabled>
                  Skip
                </Button>
                <Button type="submit" variant="figmaPrimary" disabled>
                  Finish
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
