import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    contactAdding: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [addContact.pending](state) {
      state.isLoading = false;
      state.contactAdding = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contactAdding = false;
      state.error = null;
      state.items.push(action.payload);
      // state.items.unshift(action.payload); adding contact to the start of list
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.contactAdding = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = false;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
