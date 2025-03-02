import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { addressSchema } from "@/lib/schemas/addressSchema";
import { Input } from "./input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "./select";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "./checkbox";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utilities/utils";
import { ChevronDown } from "lucide-react";
import Countries from "@/lib/countries";
import Cities from "@/lib/cities";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "@/store/slices/addressesSlice";
import { DialogClose } from "@/components/ui/dialog";
import { v4 as uuid } from "uuid";

interface Props {
  className?: string;
}

export const AddressForm: React.FC<Props> = ({ className }) => {
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      country: "select",
      fullname: "",
      phoneNumber: "",
      street: "",
      building: "",
      city: "",
      territory: "select",
      postalCode: "",
      makeDefault: false,
    },
  });

  const selectedCountry = form.watch("country");
  const dispatch = useDispatch();

  async function onSubmit(values: z.infer<typeof addressSchema>) {
    dispatch(
      addAddress({
        id: uuid(),
        label: "",
        country: values.country,
        city: values.city,
        postalCode: values.postalCode,
        street: values.street,
        building: values.building,
      })
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-4", className)}>
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Country/Region</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={cn(
                      form.formState.errors.country
                        ? "border-[2px] border-red-500"
                        : "focus:border-[2px] focus:border-[#5a6c8d] border-2 border-[#e8e8e8]",
                      "w-full shadow-none rounded-lg"
                    )}
                  >
                    <SelectValue />
                    <ChevronDown size={18} />
                  </SelectTrigger>
                  <SelectContent>
                    {Countries.map((item) => {
                      return (
                        <SelectItem key={item.value} value={item.value} className="hover:bg-muted">
                          {item.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Full name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="First and last name"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.fullname
                      ? "border-[2px] border-red-500"
                      : "focus:border-[2px] focus:border-[#5a6c8d] placeholder:pl-1"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Phone number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.phoneNumber
                      ? "border-[2px] border-red-500"
                      : "focus:border-[2px] focus:border-[#5a6c8d]"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Address</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Street address or P.O. Box"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.street
                      ? "border-[2px] border-red-500"
                      : "focus:border-[2px] focus:border-[#5a6c8d] placeholder:pl-1"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="building"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Apt, Suite, Unit, Building"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.building
                      ? "border-[2px] border-red-500"
                      : "focus:border-[2px] focus:border-[#5a6c8d] placeholder:pl-1"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">City</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.fullname
                      ? "border-[2px] border-red-500"
                      : "focus:border-[2px] focus:border-[#5a6c8d]"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="territory"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Province/Territory</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={cn(
                      form.formState.errors.territory
                        ? "border-[2px] border-red-500"
                        : "focus:border-[2px] focus:border-[#5a6c8d] border-2 border-[#e8e8e8]",
                      "w-full shadow-none rounded-lg"
                    )}
                  >
                    <SelectValue />
                    <ChevronDown size={18} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {Cities.filter((city) => city.country === selectedCountry).map((item) => {
                      return (
                        <SelectItem key={item.value} value={item.value} className="hover:bg-muted">
                          {item.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="makeDefault"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[2px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none shadow-none"
                  ></Checkbox>
                  <FormLabel className="text-[11px]">Make this my default address</FormLabel>
                </div>
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Postal code</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.fullname
                      ? "border-[2px] border-red-500"
                      : "focus:border-[2px] focus:border-[#5a6c8d] placeholder:pl-1"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <div className="flex justify-start items-center bg-[#f1f4f7] rounded-lg">
          <div className="p-[20px]">
            <Image src="/assets/images/InfoOutline.svg" width={28} height={28} alt="info-outline" />
          </div>
          <div className="flex flex-col pt-[16px] pb-[16px]">
            <span className="text-[16px] leading-[18px]">Delivery instructions (optional)</span>
            <Link href="#" className="text-[#37569E] text-[16px] leading-[18px] max-w-[250px]">
              Add preferences, notes, access codes and more
            </Link>
          </div>
        </div>
        <DialogClose asChild>
          <Button type="submit" variant="figmaPrimary" className="w-full">
            Use this address
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default AddressForm;
