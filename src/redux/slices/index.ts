import { combineReducers } from '@reduxjs/toolkit';

import notificationReducer from './notification/notification.slice';
import userReducer from './user/user.slice';
import vacancyReducer from './vacancy/vacancy.slice';

export const reducers = combineReducers({
  user: userReducer,
  vacancy: vacancyReducer,
  notification: notificationReducer,
});
