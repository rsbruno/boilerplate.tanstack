import type { ComponentProps } from "react";

import type { FieldContainerVariantProps } from "@/components/ui/inputs/field-container";

import { fieldContainerVariants, FieldContainer } from "@/components/ui/inputs/field-container";

interface TextFieldProps extends Omit<ComponentProps<"input">, "size">, Omit<FieldContainerVariantProps, "error"> {
  error?: string;
  label?: string;
}

function TextField({ className, label, error, size, name, ref, ...props }: TextFieldProps) {
  return (
    <FieldContainer className={className} error={error} label={label} name={name}>
      <input
        className={fieldContainerVariants({ error: Boolean(error), size })}
        name={name}
        id={name}
        ref={ref}
        {...props}
      />
    </FieldContainer>
  );
}
TextField.displayName = "TextField";

export { TextField };
export type { TextFieldProps };
