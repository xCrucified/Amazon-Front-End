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
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Countries from "@/lib/countries";
import { useDispatch } from "react-redux";
import { addAddress } from "@/store/slices/addressesSlice";
import { v4 as uuid } from "uuid";

interface Props {
  className?: string;
  onSuccess?: (newAddressId: string) => void;
}

export const AddressForm: React.FC<Props> = ({ className, onSuccess }) => {
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      name: "",
      fullname: "",
      phoneNumber: "",
      country: "select",
      city: "",
      street: "",
      building: "",
      postalCode: "",
      makeDefault: false,
    },
  });

  const dispatch = useDispatch();

  async function onSubmit(values: z.infer<typeof addressSchema>) {
    const newId = uuid();
    dispatch(
      addAddress({
        id: newId,
        name: values.name,
        fullname: values.fullname,
        phoneNumber: values.phoneNumber,
        country: values.country,
        city: values.city,
        street: values.street,
        building: values.building,
        postalCode: values.postalCode,
        isDefault: values.makeDefault || false,
      })
    );
    onSuccess?.(newId);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-4", className)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Address name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Home, office, etc."
                  autoComplete="off"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.name
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
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Full name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="First and last name"
                  autoComplete="name"
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
                  placeholder="e.g., +1234567890"
                  autoComplete="tel"
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
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Country / Region</FormLabel>
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
                    {Countries.map((item) => (
                      <SelectItem key={item.value} value={item.value} className="hover:bg-muted">
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  placeholder="City"
                  autoComplete="address-level2"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.city
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
          name="postalCode"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Postal code</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="postal-code"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.postalCode
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
          name="street"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Address</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Street address or P.O. Box"
                  autoComplete="address-line1"
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
                  autoComplete="address-line2"
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
          name="makeDefault"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="w-[13px] h-[13px] border-[2px] border-[#636366] rounded-[2px] data-[state=checked]:bg-[#5A6C8D] data-[state=checked]:border-none shadow-none"
                  />
                  <FormLabel className="text-[11px]">Make this my default address</FormLabel>
                </div>
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
        <Button type="submit" variant="figmaPrimary" className="w-full">
          Use this address
        </Button>
      </form>
    </Form>
  );
};

export default AddressForm;
