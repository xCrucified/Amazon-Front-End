"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { CountryPicker } from "@/components/ui/country-picker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { signIn } from "next-auth/react";

const optionalLabel = "(optional)";

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [avatarPicture, setAvatarPicture] = React.useState("");
  const [date, setDate] = React.useState<Date>(new Date());
  const [phoneNumber, setPhoneNumber] = React.useState(""); // TODO: Add country code

  const showAll = () => {
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    console.log(email);
    console.log(avatarPicture);
    console.log(date);
    console.log(phoneNumber);
  };

  return (
    <div className={cn("flex flex-col gap-6 w-[1000px]", className)} {...props}>
      <Card className="w-[100%]">
        <CardHeader className="text-center">
          <CardTitle className="text-left text-xl">Sign Up</CardTitle>
          <CardDescription className="text-left">
            Enter your credentials to register a new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-grow gap-2">
                <div className="grid flex-grow gap-2">
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Username"
                      onChange={(event) => setUsername(event.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="avatarPicture">
                      Avatar Picture{" "}
                      <span className="text-muted-foreground">
                        {optionalLabel}
                      </span>
                    </Label>
                    <Input
                      id="avatarPicture"
                      type="file"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setAvatarPicture(URL.createObjectURL(file));
                        }
                      }}
                    />
                  </div>
                </div>
                <Avatar className="flex self-center items-center justify-center w-[400px] h-[400px] ml-3">
                  <AvatarImage
                    src={avatarPicture}
                    className="object-cover w-full h-full rounded-full antialiased "
                  />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex gap-1">
                <div className="grid gap-2">
                  <Label htmlFor="birthDate">
                    Birth Date{" "}
                    <span className="text-muted-foreground">
                      {optionalLabel}
                    </span>
                  </Label>
                  <DatePicker date={date} setDate={setDate} />
                </div>
                <div className="flex-grow grid gap-2">
                  <Label htmlFor="phoneNumber">
                    Phone Number{" "}
                    <span className="text-muted-foreground">
                      {optionalLabel}
                    </span>
                  </Label>
                  <div className="flex gap-1">
                    <CountryPicker className="flex-grow" />
                    <Input
                      id="phoneNumber"
                      type="text"
                      placeholder="77 745 24 85"
                      className="flex-grow"
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  showAll();
                }}
              >
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
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
