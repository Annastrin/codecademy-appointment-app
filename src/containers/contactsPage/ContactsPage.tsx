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
      <section>
        <Typography variant="h2" marginBottom={2} align="center">
          Add Contact
        </Typography>
        <ContactForm contacts={contacts} addContact={addContact} />
      </section>
      <hr />
      <section>
        <Typography variant="h2" marginBottom={2} align="center">
          Contacts
        </Typography>
        {contacts.length > 0 && <TileList list={contacts} />}
      </section>
    </>
  );
}
