import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, { type, payload }) => {
      if (state.contacts) {
        return {
          ...state,
          contacts: [
            ...state.contacts,
            {
              ...payload,
              id: nanoid(),
            },
          ],
        };
      } else {
        return {
            ...state,
            contacts: [
              {
                ...payload,
                id: nanoid(),
              },
            ],
          };
      }
    },

    deleteContacts: (state, { type, payload }) => {
      return {
        ...state,
        contacts: [...state.contacts.filter(el => el.id !== payload)],
      };
    },

    filterChange: (state, { type, payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts, filterChange } =
  contactsSlice.actions;