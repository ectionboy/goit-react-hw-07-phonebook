import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContact, delContact, getContacts } from 'api/contacts';
import axios from 'axios';

axios.defaults.baseURL = 'https://652ec9c10b8d8ddac0b1e3ab.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts', () => getContacts()
);
export const addContact = createAsyncThunk(
  'contacts/addContact', async (newContact) => {
		return await addNewContact(newContact)
	}
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',async (contactId) => {
		return await delContact(contactId)}
);
