import { createSlice } from "@reduxjs/toolkit";
import {
  // forgetPasswordFunApi,
  loginFunApi,
  registerFunApi,
  // logoutFunApi,
  // resetPasswordFunApi,
  // changePasswordFunApi,
  // verifyOtpFunApi,
  // updateProfileFunApi,
  // checkTokenIsValidFunApi,
  // autoLoginFunApi,
  // updateUserFunApi,
  // dashboardAutoLoginFunApi
} from "./services";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    isVerified: false,
    otpVerified: false,
    token: null,
    role: null,
    dataFatched:false,
    validToken: {
      valid: false,
      isLoading: false,
      dataFetched: false,
    },
    allUsers: {
      data: [],
      isLoading: false,
      error: null,
    },
    editUser: {
      data: null,
      isLoading: false,
      error: null,
      dataFatched: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginFunApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginFunApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.otpVerified = false;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
        state.role = action.payload?.user.role;
        state.isVerified = action.payload?.user.verified;
      })
      .addCase(loginFunApi.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.isVerified = false;
        state.role = null;
        state.token = null;
        state.otpVerified = false;
      });

      builder
      .addCase(registerFunApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerFunApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.otpVerified = false;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
        state.role = action.payload?.user.role;
        state.isVerified = action.payload?.user.verified;
      })
      .addCase(registerFunApi.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.isVerified = false;
        state.role = null;
        state.token = null;
        state.otpVerified = false;
      });

    // builder
    //   .addCase(verifyOtpFunApi.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(verifyOtpFunApi.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     if (action.payload !== undefined) {
    //       state.isAuthenticated = true;
    //       state.user = action.payload.user;
    //       state.isVerified = action.payload.user.verified;
    //       state.token = action.payload.token;
    //       state.role = action.payload.user.role;
    //       state.otpVerified = true;
    //       localStorage.setItem("otpVerified", true);
    //     }
    //   })
    //   .addCase(verifyOtpFunApi.rejected, (state) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   });

    // builder
    //   .addCase(logoutFunApi.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(logoutFunApi.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   })
    //   .addCase(logoutFunApi.rejected, (state) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   });

    // builder
    //   .addCase(forgetPasswordFunApi.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(forgetPasswordFunApi.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   })
    //   .addCase(forgetPasswordFunApi.rejected, (state) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   });

    // builder
    //   .addCase(resetPasswordFunApi.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(resetPasswordFunApi.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   })
    //   .addCase(resetPasswordFunApi.rejected, (state) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   });

    // builder
    //   .addCase(changePasswordFunApi.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(changePasswordFunApi.fulfilled, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(changePasswordFunApi.rejected, (state) => {
    //     state.isLoading = false;
    //   });

    // builder
    //   .addCase(updateProfileFunApi.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateProfileFunApi.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.user = action.payload;
    //     state.isVerified = action.payload.verified;
    //     state.role = action.payload.role;
    //   })
    //   .addCase(updateProfileFunApi.rejected, (state) => {
    //     state.isLoading = false;
    //     state.user = null;
    //   });

    //   builder
    //   .addCase(updateUserFunApi.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateUserFunApi.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.user = action.payload;
    //   })
    //   .addCase(updateUserFunApi.rejected, (state) => {
    //     state.isLoading = false;
    //     state.error = "Failed to update user";
    //   });

    // builder
    //   .addCase(checkTokenIsValidFunApi.pending, (state) => {
    //     state.validToken.isLoading = true;
    //   })
    //   .addCase(checkTokenIsValidFunApi.fulfilled, (state, action) => {
    //     localStorage.setItem("token", action.payload.token);
    //     state.validToken.isLoading = false;
    //     state.validToken.valid = true;
    //     state.validToken.dataFetched = true;
    //     state.isAuthenticated = true;
    //     state.user = action.payload.user;
    //     state.isVerified = action.payload.user.verified;
    //     state.token = action.payload.token;
    //     state.role = action.payload.user.role;
    //     state.otpVerified = localStorage.getItem("otpVerified")?.toString() === "true";
    //   })
    //   .addCase(checkTokenIsValidFunApi.rejected, (state) => {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("otpVerified");
    //     state.validToken.isLoading = false;
    //     state.validToken.valid = false;
    //     state.validToken.dataFetched = true;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   });
    //   builder
    //   .addCase(dashboardAutoLoginFunApi.pending, (state) => {
    //     state.validToken.isLoading = true;
    //   })
    //   .addCase(dashboardAutoLoginFunApi.fulfilled, (state, action) => {
    //     localStorage.setItem("token", action.payload.token);
    //   state.validToken.isLoading = false;
    //   state.validToken.valid = true;
    //   state.validToken.dataFetched = true;
    //   state.isAuthenticated = true;
    //   state.user = action.payload.user;
    //   state.isVerified = action.payload.user.verified;
    //   state.token = action.payload.token;
    //   state.role = action.payload.user.role;
    //   state.otpVerified = localStorage.getItem("otpVerified")?.toString() === "true";
    //   })
    //   .addCase(dashboardAutoLoginFunApi.rejected, (state) => {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("otpVerified");
    //     state.validToken.isLoading = false;
    //     state.validToken.valid = false;
    //     state.validToken.dataFetched = true;
    //     state.isAuthenticated = false;
    //     state.user = null;
    //     state.isVerified = false;
    //     state.role = null;
    //     state.token = null;
    //     state.otpVerified = false;
    //   });
    // builder.addCase(autoLoginFunApi.fulfilled, (state, action) => {
    //   localStorage.setItem("token", action.payload.token);
    //   state.validToken.isLoading = false;
    //   state.validToken.valid = true;
    //   state.validToken.dataFetched = true;
    //   state.isAuthenticated = true;
    //   state.user = action.payload.user;
    //   state.isVerified = action.payload.user.verified;
    //   state.token = action.payload.token;
    //   state.role = action.payload.user.role;
    //   state.otpVerified = localStorage.getItem("otpVerified")?.toString() === "true";
    // });
    // // builder
    // // .addCase(dashboardAutoLoginFunApi.fulfilled, (state, action) => {
    // //   localStorage.setItem("token", action.payload.token);
    // //   state.validToken.isLoading = false;
    // //   state.validToken.valid = true;
    // //   state.validToken.dataFetched = true;
    // //   state.isAuthenticated = true;
    // //   state.user = action.payload.user;
    // //   // state.isVerified = action.payload.user.verified;
    // //   state.token = action.payload.token;
    // //   // state.role = action.payload.user.role;
    // //   state.otpVerified = localStorage.getItem("otpVerified")?.toString() === "true";
    // // });
   
  },
});

export const authReducer = authSlice.reducer;
