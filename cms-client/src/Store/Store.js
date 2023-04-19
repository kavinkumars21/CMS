import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./Slice/LoginSlice";
import ComplaintReducer from "./Slice/ComplaintDetails";
import historyReducers from "./Slice/HistorySlice";
import NotViewedCompReducers from "./Slice/NotViewedSlice";
import InprogressCompReducers from "./Slice/InprogressSlice";
import UpdateViewReducer from "./Slice/UpdateView";

const rootReducer = combineReducers({
  LoginData: LoginReducer,
  Complaints: ComplaintReducer,
  history: historyReducers,
  notviewed: NotViewedCompReducers,
  inprogress: InprogressCompReducers,
  updateview: UpdateViewReducer
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
