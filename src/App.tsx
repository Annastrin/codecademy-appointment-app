import { BrowserRouter, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";
import HomePage from "./containers/homePage/HomePage";
import { routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={routes.default} element={<HomePage />}>
          <Route index element={<ContactsPage />} />
          <Route path={routes.contacts} element={<ContactsPage />} />
          <Route path={routes.appointments} element={<AppointmentsPage />} />
          <Route
            path="*"
            element={
              <Typography variant="h2" align="center">
                Page not found
              </Typography>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
