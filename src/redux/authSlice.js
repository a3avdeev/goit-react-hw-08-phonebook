import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './authOperations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: null, email: null },
  token: '',
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
      toast.error(
        `Oops! ${
          payload.status === 400 ? 'User creation error' : 'Server error'
        }. Please try again`,
        {
          theme: 'colored',
        }
      );
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
      console.log(payload);
      toast.error(
        `Oops! ${
          payload.status === 400 ? 'Login error' : 'Server error'
        }. Please try again`,
        {
          theme: 'colored',
        }
      );
    },
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLoggedIn = false;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      toast.error(
        `Oops! ${
          payload.status === 401
            ? 'Missing header with authorization token'
            : 'Server error'
        }. Please try again`,
        {
          theme: 'colored',
        }
      );
    },
    [current.pending]: store => {
      store.isLoadingUser = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.user = payload;
      store.isLoggedIn = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
