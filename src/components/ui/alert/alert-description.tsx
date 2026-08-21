import { type TypographyProps, Typography } from "@/components/ui/typography";

import { useAlertContext } from "./context";

type AlertDescriptionProps = TypographyProps<"p">;

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  const { slots } = useAlertContext("AlertDescription");

  return <Typography className={slots.description({ className })} data-slot="alert-description" size="sm" as="p" {...props} />;
}

export { AlertDescription };
export type { AlertDescriptionProps };
