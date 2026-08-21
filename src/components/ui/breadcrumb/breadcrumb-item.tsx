import type { ComponentPropsWithoutRef } from "react";

import { twMerge } from "tailwind-merge";

interface BreadcrumbItemProps extends ComponentPropsWithoutRef<"li"> {}

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return <li className={twMerge("inline-flex items-center gap-1.5", className)} data-slot="breadcrumb-item" {...props} />;
}

export { BreadcrumbItem };
export type { BreadcrumbItemProps };
