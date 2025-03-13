import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { cardSchema } from "@/lib/schemas/cardSchema";
import { addCard } from "@/store/slices/paymentCardsSlice";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import Image from "next/image";

interface Props {
  className?: string;
  onSuccess?: (newCardId: string) => void;
}

export const PaymentCardForm: React.FC<Props> = ({ className, onSuccess }) => {
  const form = useForm<z.infer<typeof cardSchema>>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      name: "",
      cardNumber: "",
      cardHolder: "",
      expiry: "",
      cardType: "visa",
      cvv: "",
    },
  });

  const dispatch = useDispatch();

  async function onSubmit(values: z.infer<typeof cardSchema>) {
    const newId = uuid();
    dispatch(
      addCard({
        id: newId,
        name: values.name,
        cardNumber: values.cardNumber,
        cardHolder: values.cardHolder,
        expiry: values.expiry,
        cardType: values.cardType,
        cvv: values.cvv,
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
              <FormLabel className="text-black">Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="off"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.name
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
          name="cardNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Card Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="cc-number"
                  pattern="^[0-9]{13,19}$"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.cardNumber
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
          name="cardHolder"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Card Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="First and last name"
                  autoComplete="cc-name"
                  className={cn(
                    "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                    form.formState.errors.cardHolder
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
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="expiry"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-black">DD/Year</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="03/27"
                    autoComplete="cc-exp"
                    pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                    className={cn(
                      "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                      form.formState.errors.expiry
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
            name="cvv"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-black">CVV</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="cc-csc"
                    className={cn(
                      "bg-[#e8e8e8] focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                      form.formState.errors.cvv
                        ? "border-[2px] border-red-500"
                        : "focus:border-[2px] focus:border-[#5a6c8d]"
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="flex gap-1 items-center leading-[11px]" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="cardType"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black">Card Type</FormLabel>
              <FormControl>
                <Tabs value={field.value} onValueChange={field.onChange} className="w-full">
                  <TabsList className="w-full h-12 flex gap-2 bg-[#e8e8e8]">
                    <TabsTrigger
                      value="visa"
                      className="w-full h-full hover:bg-white data-[state=active]:shadow-none"
                    >
                      <Image
                        src={"/assets/images/visa-logo.svg"}
                        width={48}
                        height={48}
                        alt="visa"
                      />
                    </TabsTrigger>
                    <TabsTrigger
                      value="mastercard"
                      className="w-full h-full hover:bg-white data-[state=active]:shadow-none"
                    >
                      <Image
                        src={"/assets/images/mastercard.svg"}
                        width={48}
                        height={48}
                        alt="mastercard"
                      />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <Button type="submit" variant="figmaPrimary" className="w-full">
          Add card
        </Button>
      </form>
    </Form>
  );
};

export default PaymentCardForm;
