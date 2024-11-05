import React from "react";
import { cn } from "../../utils/cn";
import { CaretRight } from "@phosphor-icons/react";

export interface NavigationCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

export const NavigationCard = ({ title, description, icon, className, ...props }: NavigationCardProps) => {
  return (
    <button
      type="button"
      className={cn(
        "p-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed flex gap-4",
        "items-center justify-between",
        " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "bg-gray-50  focus-visible:ring-green-400 border border-gray-200 ",
        className
      )}
      disabled={props.disabled}
      {...props}
    >
      <div className="flex items-center gap-4">
        {icon}
        <div className="flex flex-col items-start ">
          <h1 className="text-medium font-semibold text-gray-600">{title}</h1>
          {description && <p className="text-small">{description}</p>}
        </div>
      </div>

      <CaretRight className="text-gray-500" size={24} />
    </button>
  );
};
