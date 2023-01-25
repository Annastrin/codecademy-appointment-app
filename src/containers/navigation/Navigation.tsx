import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { routes } from "../../routes";

export default function Navigation() {
  let location = useLocation();
  const routeMatch = matchRoutes(
    [{ path: routes.contacts }, { path: routes.appointments }, { path: "/" }],
    location
  );
  const currentTab = routeMatch?.[0]?.route.path;
  let contactsValue = currentTab === "/" ? routes.default : routes.contacts;

  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Tabs
        value={currentTab || false}
        centered
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab
          label="Contacts"
          value={contactsValue}
          to={routes.contacts}
          component={Link}
        />
        <Tab
          label="Appointments"
          value={routes.appointments}
          to={routes.appointments}
          component={Link}
        />
      </Tabs>
    </AppBar>
  );
}
