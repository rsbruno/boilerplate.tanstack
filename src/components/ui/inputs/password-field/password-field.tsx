import type { ComponentProps } from "react";

import { PiEyeSlashBold, PiEyeBold } from "react-icons/pi";
import { useState } from "react";

import type { FieldContainerVariantProps } from "@/components/ui/inputs/field-container";

import { fieldContainerVariants, FieldContainer } from "@/components/ui/inputs/field-container";

interface PasswordFieldProps
  extends Omit<ComponentProps<"input">, "size" | "type">,
    Omit<FieldContainerVariantProps, "error"> {
  error?: string;
  label?: string;
}

function PasswordField({ className, label, error, size, name, ref, ...props }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <FieldContainer className={className} error={error} label={label} name={name}>
      <div className="relative">
        <input
          className={fieldContainerVariants({ error: Boolean(error), className: "pr-11", size })}
          type={visible ? "text" : "password"}
          name={name}
          id={name}
          ref={ref}
          {...props}
        />
        <button
          className="text-typography-400 hover:text-primary absolute inset-y-0 right-0 flex w-10 items-center justify-center"
          onClick={() => setVisible((current) => !current)}
          tabIndex={-1}
          type="button"
        >
          {visible ? <PiEyeSlashBold size={18} /> : <PiEyeBold size={18} />}
        </button>
      </div>
    </FieldContainer>
  );
}
PasswordField.displayName = "PasswordField";

export { PasswordField };
export type { PasswordFieldProps };
