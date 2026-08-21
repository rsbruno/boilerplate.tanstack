import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Typography } from "@/components/ui/typography";

interface DialogDescriptionProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

const DialogDescription = forwardRef<ComponentRef<typeof DialogPrimitive.Description>, DialogDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <DialogPrimitive.Description data-slot="dialog-description" ref={ref} asChild {...props}>
        <Typography className={className} color="600" size="sm" as="p">
          {children}
        </Typography>
      </DialogPrimitive.Description>
    );
  }
);
DialogDescription.displayName = "DialogDescription";

export { DialogDescription };
export type { DialogDescriptionProps };
