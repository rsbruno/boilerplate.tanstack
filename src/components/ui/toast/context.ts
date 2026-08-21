import { createContext, useContext } from "react";

import type { toastVariants } from "./styles";

interface ToastContextValue {
  slots: ReturnType<typeof toastVariants>;
}

const ToastContext = createContext<ToastContextValue | null>(null);

function useToastContext(consumerName: string): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(`\`${consumerName}\` must be used within \`ToastRoot\``);
  }
  return context;
}

export { ToastContext, useToastContext };
export type { ToastContextValue };
