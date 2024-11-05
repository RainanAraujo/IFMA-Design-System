import React from "react";
import { cn } from "../../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  cover?: {
    src: string;
    alt: string;
  };
  description: string;
}

export const Card = ({ title, description, cover, className, ...props }: CardProps) => {
  return (
    <div className={cn("flex flex-col gap-4 items-center w-56 ", className)} {...props}>
      <img className="h-40 w-full bg-gray-100 cursor-pointer" src={cover?.src} alt={cover?.alt} />
      <div className="flex flex-col items-start w-full ">
        <a className="text-medium font-semibold" href="">
          {title}
        </a>
        <p className="text-small">{description}</p>
      </div>
    </div>
  );
};
