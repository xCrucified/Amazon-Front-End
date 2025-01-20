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
import { RootState } from "@/app/store/store";
import { setCountryCodeLabel } from "@/app/store/slices/signupSlice";

interface Props {
  className?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CountryPicker: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  const label = useSelector(
    (state: RootState) => state.example.countryCodeLabel
  );
  const dispatch = useDispatch();

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
            {isSelected ? label : "Select country code..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
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
                    onSelect={() => {
                      if (countryCode.label === label) {
                        dispatch(setCountryCodeLabel(""));
                        setIsSelected(false);
                      } else {
                        setIsSelected(true);
                        dispatch(
                          setCountryCodeLabel(
                            countryCodes.find(
                              (countryCodeS) =>
                                countryCodeS.id === countryCode.id
                            )!.label
                          )
                        );
                      }
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
