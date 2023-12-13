import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user/user.slice';

export const reducers = combineReducers({
  user: userReducer,
});
