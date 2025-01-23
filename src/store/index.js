import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { documentReducer } from "./document/documentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    document: documentReducer,
  },
});

export default store;
