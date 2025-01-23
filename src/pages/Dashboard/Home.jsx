import React, { useState } from "react";
import UploadIcon from "../../assets/icons/upload-icon.png";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { UploadDocumentApi } from "store/document/services";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonWithLoading from "component/LoadingButton";

export const DashboardHomePage = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const validationSchema = Yup.object({
    folderName: Yup.string().required("Folder Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      folderName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const userId = localStorage.getItem("userId");

      const formData = new FormData();
      files.forEach((file) => {
        formData.append(`file`, file);
      });
      formData.append("id", userId);
      formData.append("folderName", values.folderName);

      dispatch(
        UploadDocumentApi({
          data: formData,
          onSuccess: () => {
            setFiles([]);
            setShowModal(false)
            // navigate("/");
          },
        })
      );
      console.log("Form submitted with values:", values);
    },
  });

  // const handleUpload = (event) => {
  //   const userId = localStorage.getItem("userId");

  //   const formData = new FormData();
  //   files.forEach((file) => {
  //     formData.append(`file`, file);
  //   });
  //   formData.append("id", userId);

  //   dispatch(
  //     UploadDocumentApi({
  //       data: formData,
  //       onSuccess: () => {
  //         setFiles([]);
  //       },
  //       onError: (error) => {
  //         console.error("Upload failed", error);
  //       },
  //     })
  //   );
  // };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFiles((prevFiles) => [...prevFiles, droppedFile]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Drag and Drop Upload Section */}
      <div
        className="w-[700px] h-[350px] border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center rounded-md"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <img src={UploadIcon} alt="Upload Icon" />
        <p className="text-black font-medium mt-2">
          Select a file or drag and drop here
        </p>
        <p className="text-gray-400 text-sm">
          JPG, PNG or PDF, file size no more than 10MB
        </p>
        <label className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Select File
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="mt-6 w-[700px] bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Uploaded File
        </h2>
        {files.length === 0 ? (
          <p className="text-gray-500 text-center">No files uploaded yet.</p>
        ) : (
          files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-blue-400 rounded-md p-3 mb-3"
            >
              <span className="text-gray-900">{file.name}</span>

              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                <AiFillDelete size={20} />
              </button>
            </div>
          ))
        )}

        {showModal && (
          <div className="w-1/3 bg-white h-full shadow-lg p-6 fixed right-0 top-0">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Provide us with little more details
              </h3>
              <input
                type="text"
                name="folderName"
                placeholder="Add label to your file"
                value={formik.values.folderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 
          ${
            formik.touched.folderName && formik.errors.folderName
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
              />
              {formik.touched.folderName && formik.errors.folderName && (
                <div className="text-red-500 text-sm mb-4">
                  {formik.errors.folderName}
                </div>
              )}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <ButtonWithLoading
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Finish
                </ButtonWithLoading>

              </div>
            </form>
          </div>
        )}

        {/* Action Buttons */}
        {files.length > 0 && (
          <div className="flex justify-end gap-3 mt-4">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
              Cancel
            </button>
            <button
              onClick={handleOpenModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
