"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: "s" | "m" | "l";
}

const sizeClasses = {
  s: {
    root: "h-[16px] w-[28px]",
    thumb: "h-3 w-3 data-[state=checked]:translate-x-[12px] data-[state=unchecked]:translate-x-[2px]",
  },
  m: {
    root: "h-[24px] w-[44px]",
    thumb: "h-5 w-5 data-[state=checked]:translate-x-[20px] data-[state=unchecked]:translate-x-0",
  },
  l: {
    root: "h-[32px] w-[60px]",
    thumb: "h-7 w-7 data-[state=checked]:translate-x-[28px] data-[state=unchecked]:translate-x-[2px]",
  },
};

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size = "m", ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      sizeClasses[size].root,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
        sizeClasses[size].thumb
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
