import { isAuthenticated } from "@/utils/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateType } from "./user.types";
import { signInThunk, signOutThunk } from "./user.thunks";

const initialState: UserStateType = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated(state, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setIsAuthenticated } = userSlice.actions;
export default userSlice.reducer;
