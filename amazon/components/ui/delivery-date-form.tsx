import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utilities/utils";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addCard } from "@/store/slices/paymentCardsSlice";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import Image from "next/image";

interface Props {
  className?: string;
  onSuccess?: (newCardId: string) => void;
}

const threeDaysFromNow = new Date();
threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

export const dateSchema = z.object({
  date: z.date().min(threeDaysFromNow, "Delivery date should be at least 3 days from now"),
});

export const DeliveryDateForm: React.FC<Props> = ({ className, onSuccess }) => {
  const form = useForm<z.infer<typeof dateSchema>>({
    resolver: zodResolver(dateSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  const dispatch = useDispatch();

  async function onSubmit(values: z.infer<typeof dateSchema>) {
    const newId = uuid();
    onSuccess?.(newId);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-4", className)}>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormControl></FormControl>
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

export default DeliveryDateForm;
