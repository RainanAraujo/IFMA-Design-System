import { cn } from "../../utils/cn";
import { Input, InputProps } from "../Input";
import { Label } from "../Label";

interface InputFieldProps extends InputProps {
  label: string;
  required?: boolean;
  error?: string;
}

export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <div className={cn(className)}>
      <Label required={props.required} htmlFor={props.label} className="mb-1">
        {props.label}
      </Label>
      <Input id={props.label} name={props.label} {...props} />
      <span className="text-red-500 text-xSmall">{props.error}</span>
    </div>
  );
}
