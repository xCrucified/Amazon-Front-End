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

interface Props {
  className?: string;
}

export const AddressForm: React.FC<Props> = ({ className }) => {
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      country: "ukraine",
      fullname: "",
      phoneNumber: "",
      street: "",
      building: "",
      city: "",
      territory: "",
      postalCode: "",
      makeDefault: false,
    },
  });

  async function onSubmit(values: z.infer<typeof addressSchema>) {
    console.log("Address: ", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country/Region</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="ukraine">Ukraine</SelectItem>
                    <SelectItem value="poland">Poland</SelectItem>
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
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="First and last name" {...field} />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Street address or P.O. Box" {...field} />
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
                <Input type="text" placeholder="Apt, Suite, Unit, Building" {...field} />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="territory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Province/Territory</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="ukraine">Ukraine</SelectItem>
                    <SelectItem value="poland">Poland</SelectItem>
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
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  <FormLabel className="text-[11px]">Make this my default address</FormLabel>
                </div>
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <div className="flex justify-start items-center bg-[#f1f4f7] rounded-lg">
          <div className="p-[20px]">
            <Image src="/assets/images/InfoOutline.svg" width={32} height={32} alt="info-outline" />
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
