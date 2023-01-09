import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";
import { Contact } from "../../../interfaces";

interface ContactsPageProps {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
}

export default function ContactsPage({
  contacts,
  addContact,
}: ContactsPageProps) {
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm contacts={contacts} addContact={addContact} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts.length > 0 && <TileList list={contacts} />}
      </section>
    </div>
  );
}
