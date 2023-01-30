import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";
import type { RootState } from "../../store";

export default function ContactsPage() {
  const contacts = useSelector((state: RootState) => state.contacts);
  return (
    <>
      <Box component="section" mb={3}>
        <Typography variant="h2" marginBottom={2} align="center">
          Add Contact
        </Typography>
        <ContactForm />
      </Box>
      <Box component="section">
        <Typography variant="h2" align="center">
          Contacts
        </Typography>
        {contacts.length > 0 && <TileList list={contacts} />}
      </Box>
    </>
  );
}
