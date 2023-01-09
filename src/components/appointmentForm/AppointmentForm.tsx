import { SubmitHandler, useForm } from "react-hook-form";
import { Appointment, Contact } from "../../../interfaces";
import ContactPicker from "../contactPicker/ContactPicker";

interface AppointmentFormProps {
  addAppointment: (appointment: Appointment) => void;
  contacts: Contact[];
}

export type Inputs = {
  title: string;
  dateTime: Date;
  contact: string;
};

export default function AppointmentForm({
  addAppointment,
  contacts,
}: AppointmentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const newAppointment = {
      title: data.title,
      dateTime: data.dateTime,
      contact: data.contact,
    };
    addAppointment(newAppointment);
  };

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <input type="text" {...register("title", { required: true })} />
        {errors.title && (
          <span className="error-message">This field is required</span>
        )}
      </div>
      <div className="form-field">
        <input type="datetime-local" {...register("dateTime")} />
      </div>
      <ContactPicker contacts={contacts} register={register} />
      <input type="submit" value="Add" />
    </form>
  );
}
