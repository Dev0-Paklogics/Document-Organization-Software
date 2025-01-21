import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "helper/api";
import {
  // forgotPasswordApi,
  loginApi,
  registerApi,
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
        if (responseData.user.role !== "user") {
         
          if (onSuccess) {
            onSuccess(responseData.user.email);
            toast.success("Login Successfull");

          }
          return;
        } else {
          toast.error("You are not authorized to access dashboard");
          throw new Error("You are not authorized to access dashboard");
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
        console.log("77",responseData?.user?._id)       
          if (onSuccess) {

            onSuccess()
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