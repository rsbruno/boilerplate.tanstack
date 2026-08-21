import type { ComponentPropsWithoutRef } from "react";

import { Typography } from "@/components/ui/typography";

/** `color` sai do tipo: atributo legado de HTML que colide com a prop `color` do Typography. */
interface BreadcrumbPageProps extends Omit<ComponentPropsWithoutRef<"span">, "color"> {}

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <Typography
      data-slot="breadcrumb-page"
      className={className}
      aria-disabled="true"
      aria-current="page"
      variant="medium"
      color="900"
      role="link"
      size="md"
      as="span"
      {...props}
    />
  );
}

export { BreadcrumbPage };
export type { BreadcrumbPageProps };
