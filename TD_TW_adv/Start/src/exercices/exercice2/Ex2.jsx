// import { cn } from "../../libs/utils";
import {twMerge } from "tailwind-merge";

function Button({ children, className, ...restProps }) {
  let active = true;
  return (
    <button
      className={twMerge(
        "rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700",
        className,
        active && "bg-gray-600"
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default function Ex2() {
  return (
    <div className="grid h-screen place-content-center">
      <Button className="bg-blue-500">Click</Button>
    </div>
  );
}
