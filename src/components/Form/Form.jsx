import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/slice';
import { FormElement, Title, FormInput, FormButton } from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const createContact = data => {
    dispatch(addContacts(data));
  };

  const formSubmit = e => {
    e.preventDefault();

    if (contacts && inNameNew(contacts, name) !== undefined) {
      return alert(`${name} is already in contacts.`);
    }

    createContact({ name, number });
    setName('');
    setNumber('');
  };

  const inNameNew = (phoneBook, newContact) => {
    return phoneBook.find(({ name }) => name === newContact);
  };

  const inputName = ({ target: { value } }) => {
    setName(value);
  };
  const inputNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  return (
    <div>
      <FormElement onSubmit={formSubmit}>
        <div>
          <Title>Name</Title>
          <FormInput
            type="text"
            onChange={inputName}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
          />
        </div>
        <div>
          <Title>Number</Title>
          <FormInput
            type="tel"
            onChange={inputNumber}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
        </div>
        <FormButton type="submit">Add contact</FormButton>
      </FormElement>
    </div>
  );
};

export default Form;
