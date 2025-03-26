// "use client";

// import * as React from "react";
// import { format, getMonth, getYear, setMonth, setYear } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/store/store";

// import { cn } from "@/lib/utilities/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./select";

// interface DatePickerProps {
//   className?: string;
//   startYear?: number;
//   endYear?: number;
//   value: string;
//   onChange: (value: Date) => void;
// }

// function DatePicker({
//   className,
//   startYear = getYear(new Date()) - 100,
//   endYear = getYear(new Date()) + 100,
//   onChange,
// }: DatePickerProps) {
//   const [open, setOpen] = React.useState(false);

//   const date = useSelector((state: RootState) => state.signup);
//   const dispatch = useDispatch();

//   const years = Array.from(
//     { length: endYear - startYear + 1 },
//     (_, i) => startYear + i
//   );

//   const handleMonthChange = (newDate: Date) => {
//     const fixedDate = setMonth(new Date(date), getMonth(newDate)); // Міняємо тільки місяць
//     dispatch(setBirthdate(fixedDate.toISOString()));
//   };

//   const handleYearChange = (year: string) => {
//     const newDate = setYear(date, parseInt(year));
//     dispatch(setBirthdate(new Date(newDate).toISOString()));
//   };

//   const handleSelect = (selectedData: Date | undefined) => {
//     if (selectedData) {
//       dispatch(setBirthdate(new Date(selectedData).toISOString()));
//       onChange(selectedData);
//       setOpen(false);
//     }
//   };

//   return (
//     <div>
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild className={className}>
//           <Button
//             variant={"outline"}
//             className={cn(
//               "w-full justify-start text-left font-normal shadow-none",
//               !date && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             {date ? format(date, "PPP") : <span>Pick a date</span>}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0 rounded-lg border-none shadow-none">
//           <div className="flex gap-2 p-2 bg-muted rounded-t-lg border-[3px] border-b-0 border-[#5a6c8d]">
//             {/* <Select
//               onValueChange={handleMonthChange}
//               value={months[getMonth(date)]}
//             >
//               <SelectTrigger className="w-full bg-white hover:bg-muted border-0 shadow-none transition-all">
//                 <SelectValue placeholder="Month" />
//               </SelectTrigger>
//               <SelectContent className="rounded-lg transition-all">
//                 {months.map((month) => (
//                   <SelectItem className="rounded-lg" key={month} value={month}>
//                     {month}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select> */}
//             <Select
//               onValueChange={handleYearChange}
//               value={getYear(date).toString()}
//             >
//               <SelectTrigger className="w-full justify-center bg-white hover:bg-muted border-0 shadow-none transition-all">
//                 <SelectValue placeholder="Year" />
//               </SelectTrigger>
//               <SelectContent className="rounded-lg transition-all">
//                 {years.map((year) => (
//                   <SelectItem
//                     className="rounded-lg justify-center"
//                     key={year}
//                     value={year.toString()}
//                   >
//                     {year}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <Calendar
//             mode="single"
//             month={new Date(date)}
//             selected={new Date(date)}
//             onSelect={handleSelect}
//             onMonthChange={(newDate) => handleMonthChange(newDate)}
//             initialFocus
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// export default DatePicker;
