import type { ComponentProps } from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";
import { memo } from "react";

import { RadioGroupIndicator } from "./radio-group-indicator";

interface RadioGroupItemProps extends ComponentProps<typeof RadioGroupPrimitive.Item> {}

const RadioGroupItem = memo(({ className, children, ref, ...props }: RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      className={twMerge(
        "group/radio-item flex w-full cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 text-left transition-colors outline-none",
        "hover:border-primary-300 hover:bg-gray-50",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary-50/60",
        "focus-visible:ring-primary-500/35 focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-gray-200 disabled:hover:bg-white",
        className
      )}
      data-slot="radio-group-item"
      ref={ref}
      {...props}
    >
      <RadioGroupIndicator />
      {children}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroupItem };
export type { RadioGroupItemProps };
