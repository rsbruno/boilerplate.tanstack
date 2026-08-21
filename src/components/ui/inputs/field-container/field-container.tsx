import type { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

import { Typography } from "@/components/ui/typography";
import { ShowIf } from "@/components/utils/show";

interface FieldContainerProps extends ComponentProps<"div"> {
  error?: string;
  label?: string;
  name?: string;
}

function FieldContainer({ className, children, label, error, name, ...props }: FieldContainerProps) {
  return (
    <div className={twMerge("flex flex-col gap-1.5", className)} {...props}>
      <ShowIf if={Boolean(label)}>
        <Typography variant="medium" htmlFor={name} color="600" as="label" size="sm">
          {label}
        </Typography>
      </ShowIf>
      {children}
      <ShowIf if={Boolean(error)}>
        <Typography className="text-danger-600" color="custom" size="xs" as="span">
          {error}
        </Typography>
      </ShowIf>
    </div>
  );
}
FieldContainer.displayName = "FieldContainer";

export { FieldContainer };
export type { FieldContainerProps };
