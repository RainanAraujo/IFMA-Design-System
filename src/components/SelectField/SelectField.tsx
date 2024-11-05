import { cn } from "../../utils/cn";
import { Label } from "../Label";
import { Select, SelectProps } from "../Select/Select";

interface SelectFieldProps extends SelectProps {
  label: string;
  required?: boolean;
  error?: string;
}

export function SelectField({ className, ...props }: SelectFieldProps) {
  return (
    <div className={cn(className)}>
      <Label required={props.required} htmlFor={props.label} className="mb-1">
        {props.label}
      </Label>
      <Select {...props} />
      <span className="text-red-500 text-xSmall">{props.error}</span>
    </div>
  );
}
