import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";

import { useDialogContext } from "./context";

interface DialogCloseProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {}

const DialogClose = forwardRef<ComponentRef<typeof DialogPrimitive.Close>, DialogCloseProps>(
  ({ className, children, ...props }, ref) => {
    const { slots } = useDialogContext("DialogClose");

    return (
      <DialogPrimitive.Close
        className={slots.close({ className })}
        data-slot="dialog-close"
        aria-label="Fechar"
        ref={ref}
        {...props}
      >
        {children ?? <X className="size-5" weight="bold" />}
      </DialogPrimitive.Close>
    );
  }
);
DialogClose.displayName = "DialogClose";

export { DialogClose };
export type { DialogCloseProps };
