import { useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { useFilteredOptions, useMouseDownOutside } from "./Select.hooks";
import SelectTrigger from "./SelectTrigger";
import SelectMenu from "./SelectMenu";

export interface SelectProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  options: option[];
}

export type option = {
  value: string;
  label: string;
};

export function Select({ placeholder = "Selecione", className, options, ...props }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mainSelectedValue, setMainSelectedValue] = useState<option | undefined>();
  const [inputValue, setInputValue] = useState<string>("");
  const selectRef = useRef<HTMLDivElement>(null);
  const filteredOptions = useFilteredOptions(inputValue, options);

  const validateInputValue = () => (inputValue != mainSelectedValue?.label ? setInputValue("") : null);
  const handleFocusOut = () => (setIsOpen(false), validateInputValue());

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      handleFocusOut();
    }
  };

  const handleInputValueChange = (v: string) => (setInputValue(v), setMainSelectedValue(undefined), setIsOpen(true));

  useMouseDownOutside(inputValue, handleClickOutside);

  const handleOptionClick = (option: option) => {
    setMainSelectedValue(option);
    setInputValue(option.label);
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className={cn("relative", className)}>
      <SelectTrigger
        placeholder={placeholder}
        disabled={props.disabled}
        inputValue={inputValue}
        menuOpen={isOpen}
        onOpenChange={setIsOpen}
        onInputValueChange={handleInputValueChange}
        onFocusIn={() => setIsOpen(true)}
      />
      {isOpen && <SelectMenu options={filteredOptions} onOptionClick={handleOptionClick} />}
    </div>
  );
}
