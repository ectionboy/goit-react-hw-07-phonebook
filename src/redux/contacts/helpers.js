export const getContacts = (state, {payload}) => {
    state.items = payload;
  }
  export const newContact = (state, {payload}) => {
    state.items.push(payload);
  }
  export const delContact = (state, {payload}) => {
    state.items = state.items.filter(
      item => item.id !== payload.id
    );}