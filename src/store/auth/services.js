import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "helper/api";
import {
  // forgotPasswordApi,
  loginApi,
  registerApi,
  healthProviderApi,
  verifyOtpApi,
  checkTokenIsValidApi,
  // logoutApi,
  // resetPasswordApi,
  // verifyOtpApi,
  // changePasswordApi,
  // updateprofileApi,
  // checkTokenIsValidApi,
  // updateUserApi,
  // autoLoginApi,
  // dashboardAutoLoginApi,
} from "./constrants";
import toast from "react-hot-toast";
// import axiosImage from "helper/api-image"

export const loginFunApi = createAsyncThunk(
  "auth/login",
  async ({ data, onSuccess }) => {
    try {
      const response = await axios.post(loginApi, data);
      console.log("response in loginFun => ", response.data);
      if (response.data.status === "success") {

        // localStorage.removeItem('selectedBusinessId')

        const responseData = response.data.data;

         localStorage.setItem("token", responseData.token)
          if (onSuccess) {
            onSuccess(responseData.user.email);
            toast.success("Login Successfull");

          }
          return;

      } else {
        console.log("Error response in login Api => ", response.data);
        const err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        console.log("err: ", err);
        toast.error(err);
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error in login Api ", error);
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (err === "Network Error") {
        err = "Please check your internet connection";
      }
      toast.error(err);
      throw new Error(err);
    }
  }
);

export const registerFunApi = createAsyncThunk(
  "auth/register",
  async ({ data, onSuccess }) => {
    try {
      const response = await axios.post(registerApi, data);
      console.log("response in registerFunApi => ", response.data);
      if (response.data.status === "success") {

        const responseData = response.data.data;  
 
          if (onSuccess) {

            onSuccess(responseData.user)
          }
          toast.success(response.data.message);

          return;
      
      } else {
        console.log("Error response in register Api => ", response.data);
        const err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        console.log("err: ", err);
        toast.error(err);
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error in register Api ", error);
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (err === "Network Error") {
        err = "Please check your internet connection";
      }
      toast.error(err);
      throw new Error(err);
    }
  }
);

export const healthProviderDetailFunApi = createAsyncThunk(
  "auth/healthProvider",
  async ({ data, onSuccess }) => {
    try {
      const response = await axios.post(healthProviderApi, data);
      console.log("response in healthProviderFunApi => ", response.data);
      if (response.data.status === "success") {

        const responseData = response.data.data;  
        console.log("77",responseData.user)       
          if (onSuccess) {

            onSuccess(responseData.user)
          }
          toast.success(response.data.message);

          return;
      
      } else {
        console.log("Error response in health Provider Api => ", response.data);
        const err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        console.log("err: ", err);
        toast.error(err);
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error in health Provider Api ", error);
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (err === "Network Error") {
        err = "Please check your internet connection";
      }
      toast.error(err);
      throw new Error(err);
    }
  }
);

export const verifyOtpFunApi = createAsyncThunk(
  "auth/verifyOtpApi",
  async ({ data, onSuccess }) => {
    console.log("value", data);
    try {
      const response = await axios.post(verifyOtpApi, data);
      console.log("response in verifyOtpApi => ", response.data);
      if (response.data.status === "success") {
        localStorage.removeItem("selectedBusinessId");
        
        const responseData = response.data.data;

        if (responseData.user.role !== "user") {
          if (data.forLogin) {
            localStorage.setItem("token", responseData.token);
            toast.success("Otp Verifed Successfully");
            if (onSuccess) {
              onSuccess();
            }
            return responseData;
          } else {
            toast.success("Otp Verifed Successfully");
            if (onSuccess) {
              onSuccess();
            }
            return;
          }
        } else {
          const errorMsg = data.forLogin
            ? "You are not authorized to access dashboard"
            : "You are not authorized to reset password";
          toast.error(errorMsg);
          throw new Error(errorMsg);
        }
      } else {
        console.log("Error response in login Api => ", response.data);
        const err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        console.log("err: ", err);
        toast.error(err);
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error in verifyOtpApi => ", error);
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (err === "Network Error") {
        err = "Please check your internet connection";
      }
      toast.error(err);
      throw new Error(err);
    }
  }
);

export const checkTokenIsValidFunApi = createAsyncThunk(
  "auth/checkTokenIsValid",
  async () => {
    console.log("checkTokenIsValidFunApi");
    try {
      const response = await axios.get(checkTokenIsValidApi);
      console.log("response in checkTokenIsValidFun => ", response.data);
      if (response.data.status === "success") {

        // localStorage.removeItem('selectedBusinessId')
        return response.data.data;
      } else {
        console.log(
          "Error response in checkTokenIsValidFun Api => ",
          response.data
        );
        const err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error in checkTokenIsValidFun Api ", error);
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (err === "Network Error") {
        err = "Please check your internet connection";
      }

      throw error;
    }
  }
);
