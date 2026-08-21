import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Typography } from "@/components/ui/typography";

interface DialogTitleProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

const DialogTitle = forwardRef<ComponentRef<typeof DialogPrimitive.Title>, DialogTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <DialogPrimitive.Title data-slot="dialog-title" ref={ref} asChild {...props}>
        <Typography className={className} variant="semibold" color="900" size="md" as="h2">
          {children}
        </Typography>
      </DialogPrimitive.Title>
    );
  }
);
DialogTitle.displayName = "DialogTitle";

export { DialogTitle };
export type { DialogTitleProps };
