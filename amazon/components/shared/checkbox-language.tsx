import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  className?: string;
}

interface Language {
    id: number,
    name: string
}

const items: Language[] = [
    { id: 1, name: "English" },
    { id: 2, name: "Spanish" },
    { id: 3, name: "French" },
    { id: 4, name: "German" },
    { id: 5, name: "Chinese" },
    { id: 6, name: "Japanese" },
    { id: 7, name: "Korean" },
    { id: 8, name: "Italian" },
    { id: 9, name: "Portuguese" },
];


export const ComboboxLanguage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Select>
        <SelectTrigger className="max-w-[135px] text-lg border-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.id} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ComboboxLanguage;
