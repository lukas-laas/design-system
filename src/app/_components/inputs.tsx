import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
    <div className={`flex ${row ? "flex-row" : "flex-col"}  gap-2 `}>
      <Label htmlFor={name} className="capitalize">
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
          <InputWrapper name={item.label} label={item.label}>
            <RadioGroupItem value={item.value} />
          </InputWrapper>
        );
      })}
    </RadioGroup>
  );
}
