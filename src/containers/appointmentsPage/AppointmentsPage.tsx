import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";
import { Appointment, Contact } from "../../types";

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
      <Box component="section" mb={3}>
        <Typography variant="h2" marginBottom={2} align="center">
          Add Appointment
        </Typography>
        <AppointmentForm addAppointment={addAppointment} contacts={contacts} />
      </Box>
      <Box component="section">
        <Typography variant="h2" align="center">
          Appointments
        </Typography>
        {appointments.length > 0 && <TileList list={appointments} />}
      </Box>
    </>
  );
}
