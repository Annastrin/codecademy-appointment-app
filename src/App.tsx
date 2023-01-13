import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";
import HomePage from "./containers/homePage/HomePage";
import { routes } from "./routes";
import { Contact, Appointment } from "./types";

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function addContact(contact: Contact) {
    setContacts((prevContacts) => [...prevContacts, contact]);
  }
  function addAppointment(appointment: Appointment) {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path={routes.contacts}
            element={
              <ContactsPage contacts={contacts} addContact={addContact} />
            }
          />
          <Route
            path={routes.appointments}
            element={
              <AppointmentsPage
                appointments={appointments}
                addAppointment={addAppointment}
                contacts={contacts}
              />
            }
          />
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
