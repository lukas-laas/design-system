import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";

type InputProps = {
  placeholder: string;
  label: string;
  name: string;
};

function InputWrapper({
  name,
  label,
  children,
  row,
}: {
  name: string;
  label: string;
  children: ReactNode;
  row?: boolean;
}) {
  return (
    <div
      className={`flex ${row ? "flex-row items-center" : "flex-col"}  gap-2 `}
    >
      <Label htmlFor={name} className="capitalize text-lg">
        {label}
      </Label>
      {children}
    </div>
  );
}

export function TextInput({ placeholder, label, name }: InputProps) {
  return (
    <InputWrapper label={label} name={name}>
      <Input placeholder={placeholder} name={name} className="capitalize" />
    </InputWrapper>
  );
}

export function CheckboxCustom({ label, name }: InputProps) {
  return (
    <InputWrapper label={label} name={name} row={true}>
      <Checkbox />
    </InputWrapper>
  );
}

export function RadioCustom({ name, items }: { name: string; items: any[] }) {
  return (
    <RadioGroup name={name}>
      {items.map((item) => {
        return (
          <InputWrapper name={item.label} label={item.label} row={true}>
            <RadioGroupItem value={item.value} />
          </InputWrapper>
        );
      })}
    </RadioGroup>
  );
}

export function SelectCustom({
  name,
  options,
  placeholder,
}: {
  placeholder: string;
  name: string;
  options: any[];
}) {
  return (
    <InputWrapper name={name} label={name}>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder ? placeholder : options[0]} />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            return <SelectItem value={item.value}>{item.label}</SelectItem>;
          })}
        </SelectContent>
      </Select>
    </InputWrapper>
  );
}
