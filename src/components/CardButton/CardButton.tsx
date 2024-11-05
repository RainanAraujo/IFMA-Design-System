import React from "react";
import { cn } from "../../utils/cn";

export interface CardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  avatar?: React.ReactNode;
  description: string;
}

export const CardButton = ({ title, description, avatar, className, ...props }: CardButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "p-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed flex gap-4",
        "items-center justify-center",
        " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "bg-gray-50  focus-visible:ring-green-400 border border-gray-200",
        className
      )}
      disabled={props.disabled}
      {...props}
    >
      {avatar}
      <div className="flex flex-col  items-start">
        <h1 className="text-medium font-semibold">{title}</h1>
        <p className="text-small">{description}</p>
      </div>
    </button>
  );
};
