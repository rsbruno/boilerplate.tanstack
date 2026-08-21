import type { ComponentPropsWithoutRef } from "react";

import { twMerge } from "tailwind-merge";

interface BreadcrumbListProps extends ComponentPropsWithoutRef<"ol"> {}

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={twMerge("flex flex-wrap items-center gap-1.5 wrap-break-word sm:gap-2", className)}
      data-slot="breadcrumb-list"
      {...props}
    />
  );
}

export { BreadcrumbList };
export type { BreadcrumbListProps };
