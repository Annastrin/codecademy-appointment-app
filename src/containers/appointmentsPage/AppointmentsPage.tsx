import { Appointment, Contact } from "../../../interfaces";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

interface AppointmentsPageProps {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  contacts: Contact[];
}

export default function AppointmentsPage({
  appointments,
  addAppointment,
  contacts,
}: AppointmentsPageProps) {
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm addAppointment={addAppointment} contacts={contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {appointments.length > 0 && <TileList list={appointments} />}
      </section>
    </div>
  );
}
