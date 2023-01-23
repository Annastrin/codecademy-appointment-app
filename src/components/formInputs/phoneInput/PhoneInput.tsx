import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { InputProps } from "../inputPropsType";

export default function PhoneInput({ name, label, id, required }: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
        pattern:
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/gim,
      }}
      render={({ fieldState, field }) => (
        <TextField
          {...field}
          label={label}
          id={id || "phone-input"}
          required={required}
          error={fieldState.error ? true : false}
          helperText={
            required && fieldState.error?.type === "required"
              ? "This field is required"
              : fieldState.error?.type === "pattern"
              ? "Provide a correct phone number"
              : undefined
          }
          fullWidth
        />
      )}
    />
  );
}
