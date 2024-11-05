import { useRef, useState } from "react";
import { option } from "./Select";
import { useKeyDownMenu, useOptionFocusPosition } from "./Select.hooks";
import { cn } from "../../utils/cn";

interface SelectMenuProps {
  options: option[];
  onOptionClick: (option: option) => void;
}

export default function SelectMenu({ options, onOptionClick }: SelectMenuProps) {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indexSelected, setIndexSelected] = useState<number>(0);
  useOptionFocusPosition(indexSelected, itemRefs);

  const handleKeyDownInput = (e: KeyboardEvent) => {
    e.key === "Enter" && onOptionClick(options[indexSelected]);
    e.key === "ArrowDown" && setIndexSelected((prev) => Math.min(prev + 1, options.length - 1));
    e.key === "ArrowUp" && setIndexSelected((prev) => Math.max(prev - 1, 0));
  };

  useKeyDownMenu(indexSelected, handleKeyDownInput);

  return (
    <ul
      className={cn(
        "absolute flex mt-1 flex-col w-full border",
        "bg-white rounded-md shadow-md max-h-60 overflow-y-auto"
      )}
      role="listbox"
    >
      {options.map((option, i) => (
        <a
          key={i}
          ref={(el) => (itemRefs.current[i] = el)}
          onMouseEnter={() => setIndexSelected(i)}
          onMouseDown={(event) => (event.preventDefault(), onOptionClick(option))}
          aria-selected={indexSelected === i}
          className={cn(
            "cursor-pointer px-3 text-small py-1.5",
            indexSelected === i && "bg-gray-50 ring-offset-white outline-none"
          )}
          role="option"
        >
          {option.label}
        </a>
      ))}
      {options.length == 0 && (
        <a className="px-3 text-small py-1.5">
          <span>Nenhum item</span>
        </a>
      )}
    </ul>
  );
}
