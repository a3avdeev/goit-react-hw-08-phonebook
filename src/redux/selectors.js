export const getContacts = ({ contacts }) => contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getAdding = state => state.contacts.contactAdding;

export const getAuth = state => state.auth;
export const getUser = ({ auth }) => auth.user;
