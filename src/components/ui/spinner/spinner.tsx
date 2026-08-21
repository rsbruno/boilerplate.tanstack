import type { ComponentProps } from "react";

import { CircleNotch } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

interface SpinnerProps extends ComponentProps<"svg"> {}

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <CircleNotch
      className={twMerge("size-4 animate-spin", className)}
      aria-label="Loading"
      role="status"
      weight="bold"
      {...props}
    />
  );
}

export { Spinner };
export type { SpinnerProps };
