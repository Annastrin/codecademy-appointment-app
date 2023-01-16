import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { InputProps } from "../inputPropsType";

export default function EmailInput(props: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      defaultValue=""
      control={control}
      rules={{
        required: props.required,
        pattern:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
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
              ? "Provide a correct email"
              : undefined
          }
          id={
            fieldState.error
              ? "outlined-error-helper-text"
              : "outlined-required"
          }
          size="small"
        />
      )}
    />
  );
}
