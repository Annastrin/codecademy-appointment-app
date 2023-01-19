import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Contact } from "../../types";

type ContactPickerProps = {
  contacts: Contact[];
  required: boolean;
};

export default function ContactPicker({
  contacts,
  required,
}: ContactPickerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name="contact"
      control={control}
      rules={{ required }}
      render={({ field, fieldState }) => (
        <FormControl
          required={required}
          fullWidth
          error={fieldState.error && true}
        >
          <InputLabel id="demo-simple-select-label">Contact Name</InputLabel>
          <Select
            {...field}
            labelId="demo-simple-select-label"
            id={
              fieldState.error
                ? "demo-simple-select-error"
                : "demo-simple-select"
            }
            label="Contact Name"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {contacts?.map((contact) => (
              <MenuItem value={contact.name}>{contact.name}</MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText>Choose or add a contact</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
