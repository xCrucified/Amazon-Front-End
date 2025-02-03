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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  setCountryCode,
  setCountryCodeLabel,
} from "@/store/slices/signupSlice";

interface Props {
  className?: string;
  onChange: (value: string) => void;
}

const CountryPicker: React.FC<Props> = ({ className, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const label = useSelector(
    (state: RootState) => state.signup.countryCodeLabel
  );
  const dispatch = useDispatch();

  const handleSelect = (countryCode: {
    id: number;
    label: string;
    value: string;
  }) => {
    if (countryCode.label === label) {
      dispatch(setCountryCode(""));
      dispatch(setCountryCodeLabel("Select country code..."));
      onChange("");
    } else {
      dispatch(setCountryCode(countryCode.value));
      dispatch(setCountryCodeLabel(countryCode.label));
      onChange(countryCode.value);
    }
    setOpen(false);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between border-0 shadow-none", className)}
          >
            {label}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full bg-muted p-0 rounded-lg border-[3px] border-[#5a6c8d]">
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
                    onSelect={() => handleSelect(countryCode)}
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
