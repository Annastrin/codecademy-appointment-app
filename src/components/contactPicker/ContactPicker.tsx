import { UseFormRegister } from "react-hook-form";
import { Contact } from "../../types";
import { Inputs } from "../appointmentForm/AppointmentForm";

type ContactPickerProps = {
  contacts: Contact[];
  register: UseFormRegister<Inputs>;
};

export default function ContactPicker({
  contacts,
  register,
}: ContactPickerProps) {
  return (
    <select {...register("contact")}>
      {contacts?.map((contact) => (
        <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
}
