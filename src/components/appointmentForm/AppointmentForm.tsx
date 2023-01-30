import { useSelector, useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import ContactPicker from "../contactPicker/ContactPicker";
import AppointmentDateTimePicker from "../formInputs/dateTimePicker/DateTimePicker";
import TextInput from "../formInputs/textInput/TextInput";
import { addAppointment } from "../../slices/appointmentsSlice";
import type { RootState } from "../../store";

export type Inputs = {
  title: string;
  dateTime: Date;
  contact: string;
};

export default function AppointmentForm() {
  const methods = useForm<Inputs>({
    defaultValues: {
      title: "",
      dateTime: new Date(),
      contact: "",
    },
    mode: "all",
  });

  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  function onSubmit(data: Inputs) {
    const appointmentId = uuidv4();
    const formattedDateTime = dayjs(data.dateTime)
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
      id: appointmentId,
      title: data.title,
      dateTime: formattedDateTime,
      contact: data.contact,
    };
    dispatch(addAppointment(newAppointment));
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
