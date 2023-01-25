import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Navigation from "../navigation/Navigation";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#091225",
      light: "#3A4150",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00e5ff",
    },
  },
  typography: {
    h2: {
      fontWeight: 400,
      fontSize: "1.5rem",
    },
  },
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </Container>
    </ThemeProvider>
  );
}
