import { cn } from "../../utils/cn";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <a className={cn(" text-blue-500 underline flex gap-2 items-center duration-100", className)} {...props}>
      {props.children}
    </a>
  );
};
