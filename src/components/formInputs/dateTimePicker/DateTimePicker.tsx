import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { InputProps } from "../inputPropsType";

export default function AppointmentDateTimePicker(props: InputProps) {
  const { control, getValues } = useFormContext();
  const defaultDateTime = getValues("dateTime");

  return (
    <Controller
      name={props.name}
      control={control}
      rules={{
        validate: (val) => {
          console.log(val);
          console.log(
            dayjs(val).isValid() ? dayjs(val).isAfter(new Date()) : false
          );
          return dayjs(val).isValid() ? dayjs(val).isAfter(new Date()) : false;
        },
      }}
      render={({ field, fieldState }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            value={defaultDateTime}
            onChange={field.onChange}
            renderInput={(inputProps) => (
              <TextField
                {...inputProps}
                {...field}
                error={!!fieldState.error}
                helperText={
                  fieldState.error && "Provide correct date and time."
                }
                margin="normal"
              />
            )}
            label={props.label}
            disablePast
          />
        </LocalizationProvider>
      )}
    />
  );
}
