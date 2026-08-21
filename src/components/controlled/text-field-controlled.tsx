import { type FieldValues, useController, type Control, type Path } from "react-hook-form";

import { type TextFieldProps, TextField } from "@/components/ui/inputs/text-field";

interface TextFieldControlledProps<TFieldValues extends FieldValues, Name extends Path<TFieldValues>>
  extends Omit<TextFieldProps, "name"> {
  control: Control<TFieldValues>;
  name: Name;
}

function TextFieldControlled<TFieldValues extends FieldValues, Name extends Path<TFieldValues>>({
  control,
  name,
  ...props
}: TextFieldControlledProps<TFieldValues, Name>) {
  const {
    field: { name: fieldName, onChange, value },
    fieldState: { error }
  } = useController<TFieldValues, Name>({ control, name });

  return <TextField {...props} error={error?.message || props.error} onChange={onChange} value={value ?? ""} name={fieldName} />;
}
TextFieldControlled.displayName = "TextFieldControlled";

export { TextFieldControlled };
export type { TextFieldControlledProps };
