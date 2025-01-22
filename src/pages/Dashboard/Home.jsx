import React, { useState } from "react";
import UploadIcon from "../../assets/icons/upload-icon.png";
import { AiFillDelete } from "react-icons/ai";

export const DashboardHomePage = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFiles((prevFiles) => [...prevFiles, selectedFile]);
    }
  };

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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Drag and Drop Upload Section */}
      <div
        className="w-[700px] h-[350px] border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center rounded-md"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <img src={UploadIcon} alt="Upload Icon" />
        <p className="text-black font-medium mt-2">Select a file or drag and drop here</p>
        <p className="text-gray-400 text-sm">JPG, PNG or PDF, file size no more than 10MB</p>
        <label className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Select File
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>

      {/* Uploaded Files List Section */}
      <div className="mt-6 w-[700px] bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Uploaded Files</h2>
        {files.length === 0 ? (
          <p className="text-gray-500 text-center">No files uploaded yet.</p>
        ) : (
          files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-blue-400 rounded-md p-3 mb-3"
            >
              <span className="text-gray-700">{file.name}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                <AiFillDelete size={20} />
              </button>
            </div>
          ))
        )}
        {/* Action Buttons */}
        {files.length > 0 && (
          <div className="flex justify-end gap-3 mt-4">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
