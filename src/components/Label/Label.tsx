import { cn } from "../../utils/cn";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label className={cn("text-small font-medium leading-none gap-1 flex text-gray-800", className)} {...props}>
      {props.children}
      {props.required && <span className="text-red-500">*</span>}
    </label>
  );
};
