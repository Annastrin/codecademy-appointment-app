import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";
import type { RootState } from "../../store";

export default function AppointmentsPage() {
  const appointments = useSelector((state: RootState) => state.appointments);

  return (
    <>
      <Box component="section" mb={3}>
        <Typography variant="h2" marginBottom={2} align="center">
          Add Appointment
        </Typography>
        <AppointmentForm />
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
