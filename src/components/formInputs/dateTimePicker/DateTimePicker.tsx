import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { InputProps } from "../inputPropsType";

export default function AppointmentDateTimePicker({
  name,
  label,
  id,
}: InputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (val) => {
          if (!dayjs(val).isValid()) {
            return "Invalid date";
          }
          return dayjs(val).isAfter(new Date()) || "Enter a future date";
        },
      }}
      render={({ field, fieldState }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            {...field}
            label={label}
            disablePast
            minDateTime={dayjs(new Date())}
            renderInput={(inputProps) => (
              <TextField
                {...inputProps}
                id={id || "appt-date-time"}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
}
