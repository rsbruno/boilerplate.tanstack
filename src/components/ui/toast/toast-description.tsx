import type { ReactNode } from "react";

import { Typography } from "@/components/ui/typography";

import { useToastContext } from "./context";

interface ToastDescriptionProps {
  children: ReactNode;
}

function ToastDescription({ children }: ToastDescriptionProps) {
  const { slots } = useToastContext("ToastDescription");
  return (
    <Typography className={slots.description()} color="300" as="small" size="sm">
      {children}
    </Typography>
  );
}

export { ToastDescription };
export type { ToastDescriptionProps };
