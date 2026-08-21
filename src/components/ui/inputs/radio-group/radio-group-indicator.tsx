import type { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";
import { memo } from "react";

interface RadioGroupIndicatorProps extends ComponentProps<"span"> {}

const RadioGroupIndicator = memo(({ className, ref, ...props }: RadioGroupIndicatorProps) => {
  return (
    <span
      className={twMerge(
        "flex-center size-4.5 shrink-0 rounded-full border border-gray-300 bg-white transition-colors",
        "group-data-[state=checked]/radio-item:border-primary group-data-[state=checked]/radio-item:bg-primary",
        "group-disabled/radio-item:border-gray-300 group-disabled/radio-item:bg-gray-100",
        className
      )}
      data-slot="radio-group-indicator"
      ref={ref}
      {...props}
    >
      <span className="size-1.5 rounded-full bg-white opacity-0 transition-opacity group-data-[state=checked]/radio-item:opacity-100" />
    </span>
  );
});
RadioGroupIndicator.displayName = "RadioGroupIndicator";

export { RadioGroupIndicator };
export type { RadioGroupIndicatorProps };
