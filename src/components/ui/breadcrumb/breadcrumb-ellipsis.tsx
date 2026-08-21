import type { ComponentPropsWithoutRef } from "react";

import { PiDotsThreeBold } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

import { Typography } from "@/components/ui/typography";

interface BreadcrumbEllipsisProps extends ComponentPropsWithoutRef<"span"> {}

function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      className={twMerge("flex-center text-typography-400 size-5", className)}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      <PiDotsThreeBold className="size-4" />

      <Typography className="sr-only" size="md" as="span">
        Mais
      </Typography>
    </span>
  );
}

export { BreadcrumbEllipsis };
export type { BreadcrumbEllipsisProps };
