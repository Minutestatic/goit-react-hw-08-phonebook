import { addContact, deleteContact, requestContacts } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(requestContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //addcontact
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //deleteContact
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts = false;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
