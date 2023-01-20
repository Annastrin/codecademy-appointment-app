import { NavLink, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { routes } from "../../routes";

export default function HomePage() {
  return (
    <Container maxWidth="xs">
      <nav>
        <NavLink
          to={routes.contacts}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contacts
        </NavLink>
        <NavLink
          to={routes.appointments}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Appointments
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
