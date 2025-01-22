import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const ProfileUpdate = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("first  Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("email is required"),

    address: Yup.string().required("Address is required"),
    providerPhone: Yup.string().required("Provider Phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);

      console.log("Form submitted with values:", values);
    },
  });
  return (
    <div className="container px-10 ">
      <h2 className="text-xl mb-4 mt-6">Personal Information</h2>
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <div className="flex space-x-4 w-full">
          <div className="w-1/2">
            <label className="bg-white px-1 text-sm">First Name</label>
            <input
              name="firstName"
              placeholder="First Name"
              className={`w-full p-3 border rounded-md ${
                formik.touched.firstName && formik.errors.firstName
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.firstName}
              </p>
            )}
          </div>

          <div className="w-1/2">
            <label className="bg-white px-1 text-sm">Last Name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              className={`w-full p-3 border rounded-md ${
                formik.touched.lastName && formik.errors.lastName
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="w-1/2">
          <label className="bg-white px-1 text-sm">Phone Number</label>
          <PhoneInput
            international
            country="us"
            value={`${formik.values.countryCode} ${formik.values.providerPhone}`}
            onChange={(value, country) => {
              formik.setFieldValue("countryCode", country.dialCode);
              formik.setFieldValue("providerPhone", value);
            }}
            inputStyle={{
              width: "100%",
              height: "50px",
              borderRadius: "8px",
              border:
                formik.touched.providerPhone && formik.errors.providerPhone
                  ? "1px solid red"
                  : "1px solid #ced4da",
            }}
            buttonStyle={{
              border:
                formik.touched.providerPhone && formik.errors.providerPhone
                  ? "1px solid red"
                  : "1px solid #ced4da",
            }}
          />
          {formik.touched.providerPhone && formik.errors.providerPhone && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.providerPhone}
            </p>
          )}
        </div>

        <div className="flex space-x-4 w-full">
          <div className="w-1/2">
            <label className="bg-white px-1 text-sm">Email</label>
            <input
              name="email"
              placeholder="Email"
              className={`w-full p-3 border rounded-md ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div className="w-1/2">
            <label className="bg-white px-1 text-sm">Full Address</label>
            <input
              name="address"
              placeholder="Your Address"
              className={`w-full p-3 border rounded-md ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.address}
              </p>
            )}
          </div>
        </div>
        <div className="absolute bottom-10 right-10 flex space-x-10 w-1/2 ">
          <button className="w-full bg-red-500 text-white rounded-md">
            Delete Account
          </button>

          <button className=" border rounded-md w-full py-3 rounded-md">
            Cancel
          </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
