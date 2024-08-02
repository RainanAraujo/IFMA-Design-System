import React from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
