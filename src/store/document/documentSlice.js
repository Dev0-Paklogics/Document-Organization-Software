import { createSlice } from "@reduxjs/toolkit";
import {
    UploadDocumentApi
} from "./services";

const documentSlice = createSlice({
  name: "auth",
  initialState: {
    document: {
      data: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UploadDocumentApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(UploadDocumentApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.otpVerified = false;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
        state.role = action.payload?.user.role;
        state.isVerified = action.payload?.user.verified;
      })
      .addCase(UploadDocumentApi.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.isVerified = false;
        state.role = null;
        state.token = null;
        state.otpVerified = false;
      });
  },
});

export const documentReducer = documentSlice.reducer;
