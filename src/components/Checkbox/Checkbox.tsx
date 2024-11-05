import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { Check } from "@phosphor-icons/react";

export interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const Checkbox = ({ className, checked, disabled, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  return (
    <button
      onClick={() => setIsChecked(!isChecked)}
      aria-pressed={isChecked}
      disabled={disabled}
      aria-label="Checkbox"
      className={cn(
        "w-6 h-6 border  rounded-md",
        "flex items-center justify-center",
        "cursor-pointer",
        "transition-colors",
        "hover:border-gray-400",
        "active:border-gray-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "ring-offset-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2",
        isChecked && "bg-green-500",
        isChecked && "text-white",
        className
      )}
      {...props}
    >
      {isChecked && <Check weight="bold" />}
    </button>
  );
};
