import { FormProvider, useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { Appointment, Contact } from "../../types";
import ContactPicker from "../contactPicker/ContactPicker";
import AppointmentDateTimePicker from "../formInputs/dateTimePicker/DateTimePicker";
import TextInput from "../formInputs/textInput/TextInput";

type AppointmentFormProps = {
  addAppointment: (appointment: Appointment) => void;
  contacts: Contact[];
};

export type Inputs = {
  title: string;
  dateTime: Date;
  contact: string;
};

export default function AppointmentForm({
  addAppointment,
  contacts,
}: AppointmentFormProps) {
  const methods = useForm<Inputs>({
    defaultValues: {
      title: "",
      dateTime: new Date(),
      contact: "",
    },
    mode: "all",
  });

  function onSubmit(data: Inputs) {
    let formattedDateTime = dayjs(data.dateTime)
      .toDate()
      .toLocaleString("default", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      });
    const newAppointment = {
      title: data.title,
      dateTime: formattedDateTime,
      contact: data.contact,
    };
    addAppointment(newAppointment);
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Stack>
          <Box mb={2}>
            <TextInput name="title" label="Title" required id="appt-title" />
          </Box>
          <Box mb={2}>
            <AppointmentDateTimePicker
              name="dateTime"
              label="Date and Time"
              id=""
            />
          </Box>
          <Box mb={2}>
            <ContactPicker contacts={contacts} required />
          </Box>
          <Button variant="contained" type="submit" size="large">
            Add
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}
