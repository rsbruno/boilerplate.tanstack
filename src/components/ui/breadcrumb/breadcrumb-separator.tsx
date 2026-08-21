import type { ComponentPropsWithoutRef } from "react";

import { CaretRight } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

interface BreadcrumbSeparatorProps extends ComponentPropsWithoutRef<"li"> {}

function BreadcrumbSeparator({ className, children, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      className={twMerge("text-typography-400 flex-center [&>svg]:size-3.5", className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {children ?? <CaretRight weight="bold" />}
    </li>
  );
}

export { BreadcrumbSeparator };
export type { BreadcrumbSeparatorProps };
