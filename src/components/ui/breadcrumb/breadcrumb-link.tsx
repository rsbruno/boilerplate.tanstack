import type { ComponentPropsWithoutRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

import { Typography } from "@/components/ui/typography";

/** `color` sai do tipo: é um atributo legado de `<a>` que colide com a prop `color` do Typography. */
interface BreadcrumbLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "color"> {
  /** Repassa os estilos para o filho — use com o `Link` do router em vez de um `<a>` cru. */
  asChild?: boolean;
}

function BreadcrumbLink({ className, asChild, ...props }: BreadcrumbLinkProps) {
  /** Com `asChild` o `Slot` recebe o tipo do Typography e repassa classe e props para o elemento filho. */
  const Component = asChild ? Slot : "a";

  return (
    <Typography
      className={twMerge("hover:text-typography-900 transition-colors", className)}
      data-slot="breadcrumb-link"
      as={Component}
      color="500"
      size="md"
      {...props}
    />
  );
}

export { BreadcrumbLink };
export type { BreadcrumbLinkProps };
