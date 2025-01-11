import * as React from "react";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";

import { CountryCodes as countryCodes } from "@/lib/definitions";

interface Props {
  className?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
}

const CountryPicker: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  setLabel,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {label
              ? countryCodes.find((countryCode) => countryCode.label === label)
                  ?.label
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
              <CommandEmpty>No country code found.</CommandEmpty>
              <CommandGroup>
                {countryCodes.map((countryCode) => (
                  <CommandItem
                    key={countryCode.id}
                    value={countryCode.label}
                    onSelect={(currentValue) => {
                      setLabel(currentValue === label ? "" : currentValue);
                      setValue(
                        countryCodes
                          .find(
                            (countryCode) => countryCode.label === currentValue
                          )
                          ?.value.toString() || ""
                      );
                      setOpen(false);
                    }}
                  >
                    {countryCode.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        label === countryCode.id.toString()
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
  );
};

export default CountryPicker;
