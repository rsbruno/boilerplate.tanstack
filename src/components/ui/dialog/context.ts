import { createContext, useContext } from "react";

import type { dialogVariants } from "./styles";

interface DialogContextValue {
  slots: ReturnType<typeof dialogVariants>;
}

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext(consumerName: string): DialogContextValue {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(`\`${consumerName}\` must be used within \`DialogRoot\``);
  }

  return context;
}

export { useDialogContext, DialogContext };
export type { DialogContextValue };
