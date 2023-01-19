import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { InputProps } from "../inputPropsType";

export default function PhoneInput(props: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      defaultValue=""
      control={control}
      rules={{
        required: props.required,
        pattern:
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/gim,
      }}
      render={({ fieldState, field }) => (
        <TextField
          {...field}
          label={props.label}
          required={props.required}
          error={fieldState.error ? true : false}
          helperText={
            props.required && fieldState.error?.type === "required"
              ? "This field is required"
              : fieldState.error?.type === "pattern"
              ? "Provide a correct phone number"
              : undefined
          }
          id={
            fieldState.error
              ? "outlined-error-helper-text"
              : "outlined-required"
          }
        />
      )}
    />
  );
}
