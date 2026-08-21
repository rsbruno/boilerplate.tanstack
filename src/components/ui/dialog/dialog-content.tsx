import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { DialogOverlay } from "./dialog-overlay";
import { useDialogContext } from "./context";
import { DialogClose } from "./dialog-close";

interface DialogContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  showCloseButton?: boolean;
}

const DialogContent = forwardRef<ComponentRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ showCloseButton = true, className, children, ...props }, ref) => {
    const { slots } = useDialogContext("DialogContent");

    return (
      <DialogPrimitive.Portal data-slot="dialog-portal">
        <DialogOverlay />
        <DialogPrimitive.Content className={slots.content({ className })} data-slot="dialog-content" ref={ref} {...props}>
          {children}
          {showCloseButton ? <DialogClose /> : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);
DialogContent.displayName = "DialogContent";

export { DialogContent };
export type { DialogContentProps };
