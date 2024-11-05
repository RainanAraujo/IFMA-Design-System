import { useRef, useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { cn } from "../../utils/cn";
import { useInputFocusIn, useInputFocusOut } from "./Select.hooks";
import { Input } from "../Input";

interface SelectTriggerProps {
  placeholder: string;
  disabled?: boolean;
  onFocusIn: () => void;
  menuOpen: boolean;
  onOpenChange: (menuOpen: boolean) => void;
  inputValue: string;
  onInputValueChange: (inputValue: string) => void;
}

function SelectTrigger({
  placeholder,
  disabled = false,
  inputValue,
  menuOpen,
  onInputValueChange,
  onFocusIn,
  onOpenChange,
}: SelectTriggerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

  const handleButtonClick = () =>
    menuOpen ? (onOpenChange(false), inputRef.current?.blur()) : (onOpenChange(true), inputRef.current?.focus());

  useInputFocusIn(inputRef, () => setInputIsFocused(true));
  useInputFocusOut(inputRef, () => (setInputIsFocused(false), onOpenChange(false)));

  return (
    <div
      className={cn(
        "flex rounded-md border bg-transparent items-stretch justify-between",
        "ring-offset-white file:border-0",
        inputIsFocused && "outline-none ring-2 ring-green-400 ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50"
      )}
    >
      <Input
        ref={inputRef}
        disabled={disabled}
        placeholder={placeholder}
        className="border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        value={inputValue}
        onFocus={onFocusIn}
        onChange={(e) => onInputValueChange(e.target.value)}
      />
      <button
        className="pr-2"
        tabIndex={-1}
        disabled={disabled}
        onClick={() => handleButtonClick()}
        type="button"
        aria-label="open-select"
      >
        {menuOpen ? (
          <CaretUp className="text-gray-400 pointer-events-none" />
        ) : (
          <CaretDown className="text-gray-400 pointer-events-none" />
        )}
      </button>
    </div>
  );
}

export default SelectTrigger;
