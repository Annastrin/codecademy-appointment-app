import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { InputProps } from "../inputPropsType";

export default function EmailInput({ name, label, id, required }: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
        pattern:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
      }}
      render={({ fieldState, field }) => (
        <TextField
          {...field}
          label={label}
          id={id || "email-input"}
          required={required}
          error={fieldState.error ? true : false}
          helperText={
            required && fieldState.error?.type === "required"
              ? "This field is required"
              : fieldState.error?.type === "pattern"
              ? "Provide a correct email"
              : undefined
          }
          fullWidth
        />
      )}
    />
  );
}
