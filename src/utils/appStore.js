import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UserSlice.js';
const appStore=configureStore({
  reducer:{
    user:userReducer,
  }
})
export default appStore;