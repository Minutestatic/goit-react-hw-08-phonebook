import { createSlice } from '@reduxjs/toolkit';
// Імпортуємо операцію
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tasksReducer = contactsSlice.reducer;

// addContact(state, action) {
//   state.push(action.payload);
// },
// deleteContact(state, action) {
//   const index = state.findIndex(contact => contact.id === action.payload);
//   state.splice(index, 1);
// },
