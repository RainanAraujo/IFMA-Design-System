import React from "react";
import { Loading } from "../Loading/Loading";
import { cn } from "../../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  noPadding?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  noPadding = false,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed flex gap-2",
        "items-center justify-center font-medium",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "primary" && "bg-green-500 text-black focus-visible:ring-green-400 ",
        variant === "secondary" && "bg-blue-500 text-white focus-visible:ring-blue-500",
        variant === "outline" && "border border-green-500 text-green-600 focus-visible:ring-green-400 ",
        variant === "ghost" && "text-green-600 focus-visible:ring-green-400 ",
        size === "small" && "text-small h-9",
        size === "medium" && "text-medium h-10",
        size === "large" && "text-large h-11",
        noPadding && "p-0",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loading /> : props.children}
    </button>
  );
};
