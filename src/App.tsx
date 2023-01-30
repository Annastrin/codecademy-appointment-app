import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";
import HomePage from "./containers/homePage/HomePage";
import { routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<ContactsPage />} />
          <Route path={routes.contacts} element={<ContactsPage />} />
          <Route path={routes.appointments} element={<AppointmentsPage />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
