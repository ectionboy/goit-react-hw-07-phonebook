import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// fetchContacts = fetchTasks

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    // fetchContacts
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // addContact
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // deleteContact
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { initialState } from './initialState';
// import { fetchContacts } from 'api/contacts';

// export const getAllContacts = () => async (dispatch) => {
//   try {
//     dispatch(contactsSlice.actions.pending())
//     const data = await fetchContacts()
//     dispatch(contactsSlice.actions.fulfilled(data))
// console.log(data)
//   } catch (error) {
//     dispatch(contactsSlice.actions.rejected(error))
//   }
// }

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     pending: (state) => {
//       state.contacts.isLoading= true
//     },
//     fulfilled: (state, {payload}) => {
//       state.contacts.isLoading= false
//       state.contacts.items= payload
//     },
//     rejected: (state, {payload}) => {
//       state.contacts.isLoading= false
//       // error
//     },
//     addContacts: (state, { type, payload }) => {
//       if (state.contacts.items) {
//         return {
//           ...state,
//           contacts: {
//             ...state.contacts,
//             items:[
//               ...state.contacts.items,
//               {
//               ...payload,
//               id: nanoid(),
//             }]

//           },
//         };
//       } else {
//         return {
//           ...state,
//           contacts: {
//             ...state.contacts,
//             items:[
//               {
//               ...payload,
//               id: nanoid(),
//             }]

//           },
//           };
//       }
//     },

//     deleteContacts: (state, { type, payload }) => {
//       return {
//         ...state,
//         contacts: {
//           items:[...state.contacts.items.filter(el => el.id !== payload)]
//         }

//       };
//     },

//     filterChange: (state, { type, payload }) => {
//       return {
//         ...state,
//         filter: payload,
//       };
//     },
//   }
// })

// export const contactsReducer = contactsSlice.reducer;
// export const { addContacts, deleteContacts, filterChange } =
//   contactsSlice.actions;
