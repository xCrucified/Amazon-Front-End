"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { CountryPicker } from "@/components/ui/country-picker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImagePicker from "@/components/ui/image-picker";

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be 3 letters min")
      .max(20, "Username must be 20 letters max"),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    reenterPassword: z.string(),
    avatarPicture: z.string().optional(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    birthDate: z
      .date()
      .refine(
        (date) => {
          const age = new Date().getFullYear() - date.getFullYear();
          return age >= 14;
        },
        { message: "You must be at least 14 years old." }
      )
      .optional(),
    phoneNumber: z
      .string()
      .regex(/^\d{9}$/, {
        message: "Please enter a valid phone number. (9 digits)",
      })
      .optional(),
  })
  .refine((data) => data.password === data.reenterPassword, {
    message: "Passwords do not match.",
    path: ["reenterPassword"],
  });

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [reenterPassword, setReenterPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState<string | null>("");
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [date, setDate] = React.useState<Date>(new Date());
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryCodeValue, setCountryCodeValue] = React.useState("");
  const [countryCodeLabel, setCountryCodeLabel] = React.useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      reenterPassword: "",
      email: "",
      avatarPicture: "",
      birthDate: new Date(),
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.info("Creted account successfully: ");
  }

  const removeImage = () => {
    setSelectedImage("");
  };

  const handleImageSelect = (image: string | null) => {
    setSelectedImage(image);
  };

  const showAll = () => {
    console.log(username);
    console.log(password);
    console.log(reenterPassword);
    console.log(email);
    console.log(selectedImage);
    console.log(date.toLocaleDateString());
    console.log("+" + countryCodeValue + phoneNumber);
  };

  return (
    <div className={cn("flex flex-col gap-6 w-[1100px]", className)} {...props}>
      <Card className="w-[100%]">
        <CardHeader className="text-center">
          <CardTitle className="text-left text-xl">Sign Up</CardTitle>
          <CardDescription className="text-left">
            Enter your credentials to register a new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="flex flex-grow gap-2">
                  <div className="grid grid-cols-2 flex-grow gap-2">
                    <div className="flex-grow grid gap-1">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                onChange={(event) =>
                                  setUsername(event.target.value)
                                }
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
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                onChange={(event) =>
                                  setPassword(event.target.value)
                                }
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
                        name="reenterPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Re-enter Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                onChange={(event) =>
                                  setReenterPassword(event.target.value)
                                }
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                onChange={(event) =>
                                  setEmail(event.target.value)
                                }
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Birth Date</FormLabel>
                            <FormControl>
                              <DatePicker date={date} setDate={setDate} />
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
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="flex gap-1">
                                <CountryPicker
                                  value={countryCodeValue}
                                  label={countryCodeLabel}
                                  setLabel={setCountryCodeLabel}
                                  setValue={setCountryCodeValue}
                                  className="flex-grow"
                                />
                                <Input
                                  id="phoneNumber"
                                  type="text"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <ImagePicker
                      selectedImage={selectedImage}
                      className="w-[360px] h-[360px] flex items-center justify-center ml-3 border-2 border-dashed border-gray-300 rounded-full"
                      onImageSelect={handleImageSelect}
                    />
                    <Button
                      variant="outline"
                      className="w-full"
                      disabled={!selectedImage}
                      onClick={() => removeImage()}
                    >
                      <Trash /> Delete image
                    </Button>
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Sign Up
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <a href="/login" className="underline underline-offset-4">
                    Login
                  </a>
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => signIn("google")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Google
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking Sign Up, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}