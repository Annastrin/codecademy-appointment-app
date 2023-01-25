import Typography from "@mui/material/Typography";
import { Appointment, Contact } from "../../types";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

type AppointmentsPageProps = {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  contacts: Contact[];
};

export default function AppointmentsPage({
  appointments,
  addAppointment,
  contacts,
}: AppointmentsPageProps) {
  return (
    <>
      <section>
        <Typography variant="h2" marginBottom={2} align="center">
          Add Appointment
        </Typography>
        <AppointmentForm addAppointment={addAppointment} contacts={contacts} />
      </section>
      <hr />
      <section>
        <Typography variant="h2" marginBottom={2} align="center">
          Appointments
        </Typography>
        {appointments.length > 0 && <TileList list={appointments} />}
      </section>
    </>
  );
}
