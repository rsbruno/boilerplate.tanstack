import { type ComponentPropsWithoutRef, useMemo } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogVariantProps } from "./styles";

import { DialogContext } from "./context";
import { dialogVariants } from "./styles";

interface DialogRootProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, DialogVariantProps {}

function DialogRoot({ children, size, ...props }: DialogRootProps) {
  const slots = useMemo(() => dialogVariants({ size }), [size]);
  const contextValue = useMemo(() => ({ slots }), [slots]);

  return (
    <DialogContext.Provider value={contextValue}>
      <DialogPrimitive.Root data-slot="dialog" {...props}>
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
}

export { DialogRoot };
export type { DialogRootProps };
