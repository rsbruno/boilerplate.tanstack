import { type FieldValues, useController, type Control, type Path } from "react-hook-form";

import { type PasswordFieldProps, PasswordField } from "@/components/ui/inputs/password-field";

interface PasswordFieldControlledProps<TFieldValues extends FieldValues, Name extends Path<TFieldValues>>
  extends Omit<PasswordFieldProps, "name"> {
  control: Control<TFieldValues>;
  name: Name;
}

function PasswordFieldControlled<TFieldValues extends FieldValues, Name extends Path<TFieldValues>>({
  control,
  name,
  ...props
}: PasswordFieldControlledProps<TFieldValues, Name>) {
  const {
    field: { name: fieldName, onChange, value },
    fieldState: { error }
  } = useController<TFieldValues, Name>({ control, name });

  return (
    <PasswordField {...props} error={error?.message || props.error} onChange={onChange} value={value ?? ""} name={fieldName} />
  );
}
PasswordFieldControlled.displayName = "PasswordFieldControlled";

export { PasswordFieldControlled };
export type { PasswordFieldControlledProps };
