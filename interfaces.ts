export interface Contact {
  name: string;
  phone: string;
  email: string;
}

export interface Appointment {
  title: string;
  contact: string;
  dateTime: Date;
}