import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./Slice/LoginSlice";
import ComplaintReducer from "./Slice/ComplaintDetails";

const rootReducer = combineReducers({
  LoginData: LoginReducer,
  Complaints: ComplaintReducer
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
