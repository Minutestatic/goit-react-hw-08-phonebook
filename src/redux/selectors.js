export const selectContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectAuthentication = state => state.auth.authenticated;
export const selectUserData = state => state.auth.userData;
export const selectIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;
