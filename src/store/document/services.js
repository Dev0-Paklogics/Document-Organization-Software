import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "helper/api";
import { documentUpload, getalldocs } from "./contraints";
import toast from "react-hot-toast";
import axiosImage from "helper/api-image"

export const UploadDocumentApi = createAsyncThunk(
  "document/upload",
  async ({ data, onSuccess }) => {
    try {
      const response = await axiosImage.post(documentUpload, data);
      console.log("response in document upload Fun Api => ", response.data);
      if (response.data.status === "success") {
        if (onSuccess) {
          toast.success("Document Uploaded Successfully");
          onSuccess();
        }
        return;
      } else {
        console.log("Error response in document Api => ", response.data);
        const err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        console.log("err: ", err);
        toast.error(err);
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error in Document Api ", error);
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

export const getallDocsFunApi = createAsyncThunk(
  "docs/getallDocs",
  async ({ onSuccess }) => {
    try {
      const response = await axios.get(getalldocs);
      console.log("response in get all docs => ", response.data);
      if (response.data.status === "success") {
        if (onSuccess) {
          onSuccess(response.data.data);
          toast.success(response.data.message);
        }
        return response.data.data;
      } else {
        console.log(
          "Error response all docs Api => ",
          response.data.data
        );
        const err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        console.log("err: ", err);
        if (err !== "Docs not found") {
          toast.error(err);
        }
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error in all Docs", error);
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (err === "Network Error") {
        err = "Please check your internet connection";
      }
      if (err !== "Docs not found") {
        toast.error(err);
      }

      throw new Error(err);
    }
  }
);