import type { ReactNode } from "react";

interface Props {
  children: JSX.Element;
  className?: string;
}

function InputBar({ children, className }: Props) {
  return (
    <div
      children={children}
      className={`w-full bg-gray-1000 h-11 rounded-xl border-gray-800 border-[0.5px] flex items-center ${className}`}
    />
  );
}

export default InputBar;
