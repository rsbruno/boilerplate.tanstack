import type { ComponentProps } from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";

interface RadioGroupRootProps extends ComponentProps<typeof RadioGroupPrimitive.Root> {}

function RadioGroupRoot({ className, ref, ...props }: RadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      className={twMerge("flex flex-col gap-2", className)}
      data-slot="radio-group"
      ref={ref}
      {...props}
    />
  );
}
RadioGroupRoot.displayName = "RadioGroupRoot";

export { RadioGroupRoot };
export type { RadioGroupRootProps };
