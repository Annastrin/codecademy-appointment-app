import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { InputProps } from "../inputPropsType";

export default function TextInput(props: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      defaultValue=""
      control={control}
      rules={{ required: props.required }}
      render={({ fieldState, field }) => (
        <TextField
          {...field}
          label={props.label}
          required={props.required}
          error={fieldState.error ? true : false}
          helperText={
            props.required && fieldState.error
              ? "This field is required"
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
