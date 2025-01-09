import React, { useState } from "react";
import { AiOutlineCloudUpload, AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf, FaFileImage, FaFilePowerpoint } from "react-icons/fa";
import { MdError, MdDownload, MdDelete, MdEdit, MdFolder } from "react-icons/md";

export const DocumentOverview = () => {
  const [files, setFiles] = useState([
    { name: "Heart Report.pdf", size: "604KB", time: "2m ago", type: "pdf", status: "uploaded" },
    { name: "Medical lab report", size: "2.20GB", time: "3m ago", type: "folder", status: "uploaded" },
    { name: "Heart Report", size: "1.46MB", time: "3 days ago", type: "folder", status: "uploaded" },
    { name: "Heart Report.pptx", size: "929KB", time: "3 days ago", type: "ppt", status: "error" },
    { name: "Medical lab report", size: "929KB", time: "7 days ago", type: "image", status: "uploaded" },
    { name: "Kidney report.pdf", size: "604KB", time: "2m ago", type: "pdf", status: "uploaded" },
  ]);

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500 text-xl" />;
      case "image":
        return <FaFileImage className="text-blue-500 text-xl" />;
      case "ppt":
        return <FaFilePowerpoint className="text-orange-500 text-xl" />;
      case "folder":
        return <AiOutlineFolder className="text-gray-600 text-xl" />;
      default:
        return <AiOutlineFile className="text-gray-600 text-xl" />;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="mt-3 w-[700px] h-[100px]  border-2 border-dashed border-gray-300 bg-white flex  items-center justify-center gap-20 rounded-md mb-6">
        <AiOutlineCloudUpload className="text-gray-500 text-3xl" />
        <div> <p className="text-black font-medium mt-2">Select a file or drag and drop here</p>
        <p className="text-gray-400 text-sm">JPG, PNG, or PDF, file size no more than 10MB</p></div>
       
        <label className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded cursor-pointer hover:bg-blue-50">
          Select File
          <input type="file" className="hidden" />
        </label>
      </div>

      {/* Uploaded Files List */}
      <div className="w-[700px] bg-white p-4 rounded-md shadow-md">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b py-3"
          >
            {/* File Icon and Name */}
            <div className="flex items-center gap-3">
              {getFileIcon(file.type)}
              <div>
                <p className="text-gray-700 font-medium">{file.name}</p>
                <p className="text-gray-500 text-sm">{file.time}</p>
              </div>
            </div>

            {/* File Size & Status */}
            <div className="flex items-center gap-3">
              {file.status === "error" ? (
                <span className="text-red-500 flex items-center gap-1">
                  <MdError className="text-xl" />
                  <span className="border border-red-500 text-red-500 px-2 text-xs rounded">Error</span>
                </span>
              ) : (
                <span className="text-gray-600 text-sm">{file.size}</span>
              )}

              {/* Actions Menu */}
              <div className="relative group">
                <BsThreeDotsVertical className="cursor-pointer text-gray-500" />
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                    <MdDownload className="mr-2" /> Download
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-100 w-full"
                  >
                    <MdDelete className="mr-2" /> Delete
                  </button>
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                    <MdFolder className="mr-2" /> Move into Folder
                  </button>
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                    <MdEdit className="mr-2" /> Edit Label
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
