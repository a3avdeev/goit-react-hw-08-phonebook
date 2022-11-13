export const getContacts = ({ contacts }) => contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getAdding = state => state.contacts.contactAdding;

export const getAuth = state => state.auth;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUser = state => state.auth.user;
export const getIsLoadingUser = state => state.auth.isLoadingUser;
