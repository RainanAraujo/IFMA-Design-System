import { CircleNotch } from "@phosphor-icons/react";
import { cn } from "../../utils/cn";

export interface LoadingProps {
  size?: string | number;
  className?: string;
}

export const Loading = ({ size = 16, className }: LoadingProps) => {
  return <CircleNotch size={size} className={cn("animate-spin", className)} weight="bold" />;
};
