import { useState } from "react";
import { useForm } from "react-hook-form";
import { Contact } from "../../../interfaces";

interface ContactFormProps {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
}

type Inputs = {
  name: string;
  phone: string;
  email: string;
};

export default function ContactForm({
  contacts,
  addContact,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [contactExistsError, setContactExistsError] = useState(false);

  function onSubmit(data: Inputs) {
    setContactExistsError(false);
    const newContact = {
      name: data.name,
      phone: data.phone,
      email: data.email,
    };
    if (!contactInContacts(newContact, contacts)) {
      addContact(newContact);
      reset();
    } else {
      setContactExistsError(true);
    }
  }

  function closeContactExistsError() {
    setContactExistsError(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Full Name"
        />
        {errors.name && (
          <span className="error-message">This field is required</span>
        )}
      </div>

      <div className="form-field">
        <input
          type="tel"
          {...register("phone", {
            required: true,
            pattern:
              /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/gim,
          })}
          placeholder="Phone number"
        />
        {errors.phone?.type === "required" && (
          <span className="error-message">This field is required</span>
        )}
        {errors.phone?.type === "pattern" && (
          <span className="error-message">Provide a correct phone number</span>
        )}
      </div>

      <div className="form-field">
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
          })}
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <span className="error-message">This field is required</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="error-message">Provide a correct email</span>
        )}
      </div>

      <input type="submit" value="Add" />
      {contactExistsError && (
        <div>
          <span className="error-message">This contact already exists</span>
          <button onClick={closeContactExistsError}>X</button>
        </div>
      )}
    </form>
  );
}

function contactInContacts(contact: Contact, contacts: Contact[]) {
  for (let i = 0; i < contacts.length; i++) {
    if (contact.name === contacts[i].name) {
      if (
        contact.phone === contacts[i].phone &&
        contact.email === contacts[i].email
      ) {
        return true;
      }
    }
  }
  return false;
}
