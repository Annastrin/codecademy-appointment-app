import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import { Contact, Appointment } from "../../types";

type TileProps = {
  item: Contact | Appointment;
};

export default function Tile({ item }: TileProps) {
  return (
    <ListItem>
      {"name" in item ? (
        <ContactItem name={item.name} phone={item.phone} email={item.email} />
      ) : (
        <AppointmentItem
          title={item.title}
          contact={item.contact}
          dateTime={item.dateTime}
        />
      )}
    </ListItem>
  );
}

function ContactItem({ name, phone, email }: Contact) {
  return (
    <Stack>
      <Typography variant="subtitle1" mb={1}>
        {name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <PhoneIcon fontSize="small" />
        <Link href={"tel:" + phone} variant="subtitle1">
          {phone}
        </Link>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <EmailIcon fontSize="small" />
        <Link href={"mailto:" + email} variant="subtitle1">
          {email}
        </Link>
      </Stack>
    </Stack>
  );
}

function AppointmentItem({ title, contact, dateTime }: Appointment) {
  return (
    <Stack>
      <Typography variant="subtitle1" mb={1}>
        {title}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <PersonIcon fontSize="small" />
        <Typography variant="subtitle1">{contact}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <EventIcon fontSize="small" />
        <Typography variant="subtitle1">{dateTime}</Typography>
      </Stack>
    </Stack>
  );
}
