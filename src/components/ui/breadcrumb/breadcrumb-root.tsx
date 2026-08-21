import type { ComponentPropsWithoutRef } from "react";

interface BreadcrumbProps extends ComponentPropsWithoutRef<"nav"> {}

function Breadcrumb(props: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

export { Breadcrumb };
export type { BreadcrumbProps };
