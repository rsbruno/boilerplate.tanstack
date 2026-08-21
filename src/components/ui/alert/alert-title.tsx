import { type TypographyProps, Typography } from "@/components/ui/typography";

import { useAlertContext } from "./context";

type AlertTitleProps = TypographyProps<"strong">;

function AlertTitle({ className, ...props }: AlertTitleProps) {
  const { slots } = useAlertContext("AlertTitle");

  return (
    <Typography
      className={slots.title({ className })}
      data-slot="alert-title"
      variant="medium"
      as="strong"
      size="sm"
      {...props}
    />
  );
}

export { AlertTitle };
export type { AlertTitleProps };
