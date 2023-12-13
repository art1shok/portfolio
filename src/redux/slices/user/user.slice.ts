import { isAuthenticated } from '@/utils/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserStateType } from './user.types';

const initialState: UserStateType = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
 
});

export default userSlice.reducer;
