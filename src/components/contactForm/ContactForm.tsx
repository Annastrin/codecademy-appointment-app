import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Alert, Button } from "@mui/material";
import TextInput from "../formInputs/textInput/TextInput";
import PhoneInput from "../formInputs/phoneInput/PhoneInput";
import EmailInput from "../formInputs/emailInput/EmailInput";
import { Contact } from "../../types";

type ContactFormProps = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
};

type Inputs = {
  name: string;
  phone: string;
  email: string;
};

export default function ContactForm({
  contacts,
  addContact,
}: ContactFormProps) {
  const methods = useForm<Inputs>();
  const [contactExistsError, setContactExistsError] = useState(false);

  function onSubmit(data: Inputs) {
    console.log(data);
    setContactExistsError(false);
    const newContact = {
      name: data.name,
      phone: data.phone,
      email: data.email,
    };
    if (!contactAlreadyExists(newContact, contacts)) {
      addContact(newContact);
      methods.reset();
    } else {
      setContactExistsError(true);
    }
  }

  function closeContactExistsError() {
    setContactExistsError(false);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <div className="form-field">
          <TextInput name="name" required label="Full Name" />
        </div>
        <div className="form-field">
          <PhoneInput name="phone" required label="Phone Number" />
        </div>
        <div className="form-field">
          <EmailInput name="email" required label="Email" />
        </div>

        <Button variant="contained" type="submit" size="large">
          Add
        </Button>
        {contactExistsError && (
          <Alert
            severity="error"
            onClose={closeContactExistsError}
            sx={{ marginTop: 1 }}
          >
            This contact already exists!
          </Alert>
        )}
      </form>
    </FormProvider>
  );
}

function contactAlreadyExists(contact: Contact, contacts: Contact[]) {
  for (let i = 0; i < contacts.length; i++) {
    if (contact.name === contacts[i].name) {
      return true;
    }
  }
  return false;
}
