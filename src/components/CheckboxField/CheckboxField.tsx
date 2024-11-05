import { cn } from "../../utils/cn";
import { Checkbox, CheckboxProps } from "../Checkbox";
import { Label } from "../Label";

interface CheckboxFieldProps extends CheckboxProps {
  label: string;
  required?: boolean;
}

export function CheckboxField({ className, ...props }: CheckboxFieldProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Checkbox id={props.label} name={props.label} {...props} />
      <Label required={props.required} htmlFor={props.label}>
        {props.label}
      </Label>
    </div>
  );
}
