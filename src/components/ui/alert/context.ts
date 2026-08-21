import { createContext, useContext } from "react";

import type { alertVariants } from "./styles";

interface AlertContextValue {
  slots: ReturnType<typeof alertVariants>;
}

const AlertContext = createContext<AlertContextValue | null>(null);

function useAlertContext(consumerName: string): AlertContextValue {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error(`\`${consumerName}\` must be used within \`AlertRoot\``);
  }
  return context;
}

export { AlertContext, useAlertContext };
export type { AlertContextValue };
