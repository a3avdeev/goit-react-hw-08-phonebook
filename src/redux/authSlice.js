import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  isLoadingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLoggedIn = true;
    },
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLoggedIn = true;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.isLoggedIn = false;
    },
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: store => {
      store.loading = false;
      store.user = { name: null, email: null };
      store.token = null;
      store.isLoggedIn = false;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [current.pending]: store => {
      store.isLoadingUser = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.user = payload.user;
      store.isLoggedIn = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const getAuth = state => state.auth;
