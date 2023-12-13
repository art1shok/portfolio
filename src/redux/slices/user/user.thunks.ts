import { createAsyncThunk } from '@reduxjs/toolkit';

export const signInThunk = createAsyncThunk('user/signIn', (payload) => {
  return payload;
});

export const signOutThunk = createAsyncThunk('user/signOut', (payload) => {
  return payload;
});