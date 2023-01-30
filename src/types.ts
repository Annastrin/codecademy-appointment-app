export type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export type Appointment = {
  id: string;
  title: string;
  contact: string;
  dateTime: string;
}