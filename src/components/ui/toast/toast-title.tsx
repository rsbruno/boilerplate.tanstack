import type { ReactNode } from "react";

import { Typography } from "@/components/ui/typography";

import { useToastContext } from "./context";

interface ToastTitleProps {
  children: ReactNode;
}

function ToastTitle({ children }: ToastTitleProps) {
  const { slots } = useToastContext("ToastTitle");
  return (
    <Typography className={slots.title()} variant="medium" color="custom" as="strong" size="md">
      {children}
    </Typography>
  );
}

export { ToastTitle };
export type { ToastTitleProps };
