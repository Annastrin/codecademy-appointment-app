import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";
import { Contact } from "../../types";

type ContactsPageProps = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
};

export default function ContactsPage({
  contacts,
  addContact,
}: ContactsPageProps) {
  return (
    <>
      <Box component="section" mb={3}>
        <Typography variant="h2" marginBottom={2} align="center">
          Add Contact
        </Typography>
        <ContactForm contacts={contacts} addContact={addContact} />
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
