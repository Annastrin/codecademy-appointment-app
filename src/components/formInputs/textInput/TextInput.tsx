import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { InputProps } from "../inputPropsType";

export default function TextInput({ name, label, id, required }: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ fieldState, field }) => (
        <TextField
          {...field}
          label={label}
          id={id}
          required={required}
          error={fieldState.error ? true : false}
          helperText={
            required && fieldState.error ? "This field is required" : undefined
          }
          fullWidth
        />
      )}
    />
  );
}
