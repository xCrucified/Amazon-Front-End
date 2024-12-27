"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { format } from "date-fns"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronsUpDown, Check, CalendarIcon } from "lucide-react";

import { CountryCodes as countryCodes } from "@/lib/definitions";
import { Calendar } from "../ui/calendar";
import { DatePicker } from "../ui/date-picker";

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [date, setDate] = React.useState<Date>();

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
              <div className="grid gap-6">
                <div className="flex gap-3">
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-[300px] grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" placeholder="username" />
                  </div>
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <div className="flex gap-1">
                      <div>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-full justify-between"
                            >
                              {value
                                ? countryCodes.find(
                                    (countryCode) => countryCode.label === value
                                  )?.label
                                : "Select country code..."}
                              <ChevronsUpDown className="opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput
                                placeholder="Search country code..."
                                className="h-9"
                              />
                              <CommandList>
                                <CommandEmpty>
                                  No country code found.
                                </CommandEmpty>
                                <CommandGroup>
                                  {countryCodes.map((countryCode) => (
                                    <CommandItem
                                      key={countryCode.id}
                                      value={countryCode.label}
                                      onSelect={(currentValue) => {
                                        setValue(
                                          currentValue === value
                                            ? ""
                                            : currentValue
                                        );
                                        setOpen(false);
                                      }}
                                    >
                                      {countryCode.label}
                                      <Check
                                        className={cn(
                                          "ml-auto",
                                          value === countryCode.id.toString()
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Input
                        id="phoneNumber"
                        type="text"
                        placeholder="98 753 63 24"
                        className="flex-grow"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="birthDate">Birth Date</Label>
                    <DatePicker />
                  </div>
                  <div className="flex-grow grid gap-2">
                    <Label htmlFor="avatarPicture">Avatar Picture</Label>
                    <Input id="avatarPicture" type="file" />
                  </div>
                </div>
                <Button className="w-full">Sign Up</Button>
              </div>
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
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Continue with Google
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
