import { extendTailwindMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-large",
        "text-medium",
        "text-small",
        "text-xSmall",
        "text-dLarge",
        "text-dMedium",
        "text-dSmall",
        "text-dXSmall",
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-h5",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
