import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import TextInput from "../formInputs/textInput/TextInput";
import PhoneInput from "../formInputs/phoneInput/PhoneInput";
import EmailInput from "../formInputs/emailInput/EmailInput";
import { Contact } from "../../types";
import { addContact } from "../../slices/contactsSlice";
import type { RootState } from "../../store";

type Inputs = {
  name: string;
  phone: string;
  email: string;
};

export default function ContactForm() {
  const methods = useForm<Inputs>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
    mode: "all",
  });
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();
  const [contactExistsError, setContactExistsError] = useState(false);

  function onSubmit(data: Inputs) {
    setContactExistsError(false);
    const contactId = uuidv4();
    const newContact = {
      id: contactId,
      name: data.name,
      phone: data.phone,
      email: data.email,
    };
    if (!contactAlreadyExists(newContact, contacts)) {
      dispatch(addContact(newContact));
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
        <Stack>
          <Box mb={2}>
            <TextInput name="name" required label="Full Name" id="full-name" />
          </Box>
          <Box mb={2}>
            <PhoneInput name="phone" required label="Phone Number" id="" />
          </Box>
          <Box mb={2}>
            <EmailInput name="email" required label="Email" id="" />
          </Box>

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
        </Stack>
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
