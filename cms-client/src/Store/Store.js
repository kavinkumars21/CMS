import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./Slice/LoginSlice";

const rootReducer = combineReducers({
  LoginData: LoginReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
