import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
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
  });

  function onSubmit(data: Inputs) {
    console.log(data);
    const newAppointment = {
      title: data.title,
      dateTime: data.dateTime.toString(),
      contact: data.contact,
    };
    addAppointment(newAppointment);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <div className="form-field">
          <TextInput name="title" label="Title" required />
        </div>
        <div className="form-field">
          <AppointmentDateTimePicker name="dateTime" label="Date and Time" />
        </div>
        <div className="form-field">
          <ContactPicker contacts={contacts} required />
        </div>

        <Button variant="contained" type="submit" size="large">
          Add
        </Button>
      </form>
    </FormProvider>
  );
}
