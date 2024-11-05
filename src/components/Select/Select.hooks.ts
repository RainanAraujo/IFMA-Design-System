import { useEffect, useMemo } from "react";
import { option } from "./Select";

export const useFilteredOptions = (inputValue: string, options: option[]) => {
  return useMemo(() => {
    return options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  }, [inputValue, options]);
};

export const useOptionFocusPosition = (
  indexSelected: number,
  itemRefs: React.MutableRefObject<(HTMLAnchorElement | null)[]>
) => {
  return useMemo(() => {
    itemRefs.current[indexSelected]?.scrollIntoView({
      block: "nearest",
    });
  }, [indexSelected]);
};

export const useMouseDownOutside = (inputValue: string, onMouseDown: (event: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [inputValue]);
};

export const useKeyDownMenu = (indexSelected: number, onKeydown: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, [indexSelected]);
};

export const useInputFocusOut = (ref: React.RefObject<HTMLInputElement>, onFocusOut: () => void) => {
  useEffect(() => {
    ref.current?.addEventListener("blur", onFocusOut);
    return () => {
      ref.current?.removeEventListener("blur", onFocusOut);
    };
  }, []);
};

export const useInputFocusIn = (ref: React.RefObject<HTMLInputElement>, onFocusIn: () => void) => {
  useEffect(() => {
    ref.current?.addEventListener("focus", onFocusIn);
    return () => {
      ref.current?.removeEventListener("focus", onFocusIn);
    };
  }, []);
};
