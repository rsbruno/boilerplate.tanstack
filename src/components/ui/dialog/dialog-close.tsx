import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { PiX } from "react-icons/pi";

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
        {children ?? <PiX className="size-5" />}
      </DialogPrimitive.Close>
    );
  }
);
DialogClose.displayName = "DialogClose";

export { DialogClose };
export type { DialogCloseProps };
