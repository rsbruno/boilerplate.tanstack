import type { ComponentProps } from "react";

import { BiLoaderAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface SpinnerProps extends ComponentProps<"svg"> {}

function Spinner({ className, ...props }: SpinnerProps) {
  return <BiLoaderAlt className={twMerge("size-4 animate-spin", className)} aria-label="Loading" role="status" {...props} />;
}

export { Spinner };
export type { SpinnerProps };
