import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function InputBar({ children }: Props) {
  return (
    <div
      children={children}
      className="w-full bg-gray-1000 h-11 rounded-xl border-gray-800 border-[0.5px] flex items-center"
    />
  );
}

export default InputBar;
