import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./Slice/LoginSlice";
import ComplaintReducer from "./Slice/ComplaintDetails";
import historyReducers from "./Slice/HistorySlice";
import NotViewedCompReducers from "./Slice/NotViewedSlice";

const rootReducer = combineReducers({
  LoginData: LoginReducer,
  Complaints: ComplaintReducer,
  history: historyReducers,
  notviewed: NotViewedCompReducers
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
