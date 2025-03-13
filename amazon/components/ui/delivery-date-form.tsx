import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { setDate as sDate } from "@/store/slices/deliveryDateSlice";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { getMonth, getYear, setMonth, setYear } from "date-fns";
import { Calendar } from "./calendar";
import { Months } from "@/lib/months";


interface Props {
  className?: string;
  onSuccess?: () => void;
  startYear?: number;
  endYear?: number;
}

const initDate = new Date(new Date().setDate(new Date().getDate() + 3))!;

export const dateSchema = z.object({
  date: z.date().min(initDate, "Delivery date should be at least 3 days from now"),
});

export const DeliveryDateForm: React.FC<Props> = ({
  className,
  onSuccess,
  startYear = getYear(new Date()) - 100,
  endYear = getYear(new Date()) + 100,
}) => {
  const form = useForm<z.infer<typeof dateSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(dateSchema),
    defaultValues: {
      date: initDate,
    },
  });

  const dispatch = useDispatch();

  const [date, setDate] = React.useState<Date>(initDate);
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  const handleMonthChange = (month: string) => {
    const newDate = setMonth(date, Months.indexOf(month));
    setDate(newDate);
  };

  const handleYearChange = (year: string) => {
    const newDate = setYear(date, parseInt(year));
    setDate(newDate);
  };

  const handleSelect = (selectedData: Date | undefined) => {
    if (selectedData) {
      setDate(selectedData);
    }
    form.setValue("date", selectedData!);
  };

  const setInputLabel = (date: Date) => {
    return (
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "/" +
      (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
      "/" +
      date.getFullYear()
    );
  };

  async function onSubmit(values: z.infer<typeof dateSchema>) {
    dispatch(sDate(values.date.toISOString()));
    onSuccess?.();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-4", className)}>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <FormControl>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="MM/DD/YYYY"
                      className={cn(
                        "bg-[#e8e8e8] w-full focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px]",
                        form.formState.errors.date
                          ? "border-[2px] border-red-500"
                          : "focus:border-[2px] focus:border-[#5a6c8d]"
                      )}
                      {...field}
                      value={setInputLabel(date)}
                    />
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <Select onValueChange={handleMonthChange} value={Months[getMonth(date)]}>
                        <SelectTrigger className="w-full bg-[#e8e8e8] justify-center rounded-lg">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent className="min-w-[full] max-h-[240px] bg-[#e8e8e8] rounded-lg">
                          {Months.map((month) => (
                            <SelectItem
                              key={month}
                              value={month}
                              className="p-2 justify-center cursor-pointer hover:bg-muted text-center"
                            >
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select onValueChange={handleYearChange} value={getYear(date).toString()}>
                        <SelectTrigger className="w-full bg-[#e8e8e8] justify-center rounded-lg">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent className="min-w-full max-h-[240px] bg-[#e8e8e8] rounded-lg">
                          {years.map((year) => (
                            <SelectItem
                              key={year}
                              value={year.toString()}
                              className="p-2 justify-center cursor-pointer hover:bg-muted text-center"
                            >
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleSelect}
                      initialFocus
                      month={date}
                      onMonthChange={setDate}
                    />
                  </div>
                </div>
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
        <Button type="submit" variant="figmaPrimary" className="w-full">
          Apply
        </Button>
      </form>
    </Form>
  );
};

export default DeliveryDateForm;
