import ButtonWithLoading from "component/LoadingButton";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AlDocsSummaryApi } from "store/summary/services";
// import { AlDocsSummaryApi } from "store/summary/services";

export const Summaries = () => {
  const [showSpeechSection, setShowSpeechSection] = useState(false);
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState();
  console.log("summary", summary?.data?.health_summary);
  const { isLoading  } = useSelector((state) => state.summary.summary);
  console.log("isloading 14",isLoading)

  const dispatch = useDispatch();
  // const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    dispatch(
      AlDocsSummaryApi({
        data: formData,
        onSuccess: (data) => {
          setSummary(data);
        },
        onError: (error) => {
          console.error("Upload failed", error);
        },
      })
    );
  };

  const reports = [
    { name: "Medical lab report", time: "3m ago", type: "folder" },
    { name: "Heart Report", time: "3 days ago", type: "folder" },
    { name: "Brain report.pdf", time: "3 days ago", type: "document" },
    { name: "Normal Checkup", time: "7 days ago", type: "image" },
    { name: "Blood pressure report", time: "3m ago", type: "folder" },
    { name: "Heart Report", time: "3 days ago", type: "folder" },
    { name: "Heart Report.pdf", time: "3 days ago", type: "document" },
    { name: "Lab Report", time: "7 days ago", type: "image" },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "folder":
        return "📁";
      case "document":
        return "📄";
      case "image":
        return "🖼️";
      default:
        return "📁";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* File Upload Section */}
      <div className="flex justify-center mt-6 mb-6">
        <button
          onClick={() => setShowSpeechSection(!showSpeechSection)}
          className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600"
        >
          {showSpeechSection ? "Upload Document" : "Speech to Text"}
        </button>
      </div>

      {!showSpeechSection ? (
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              File Name
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg w-full p-8 flex flex-col items-center justify-center text-gray-500">
              <svg
                className="h-10 w-10 text-gray-400 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v4m0 0h16m-16 0l16-16M16 12v8m0-8L8 4"
                />
              </svg>
              {/* <p className="text-sm mb-2">
                Select a file or drag and drop here
              </p>
              <p className="text-xs text-gray-400">
                JPG, PNG, or PDF (max 10MB)
              </p> */}
              {!file ? (
                <p className="text-gray-500 text-center">
                  No files uploaded yet.
                </p>
              ) : (
                <div className="flex items-center justify-between border border-blue-400 rounded-md p-3 mb-3">
                  <span className="text-gray-900">{file.name}</span>

                  <button className="text-red-500 hover:text-red-700">
                    <AiFillDelete size={20} />
                  </button>

                </div>
              )}

            {/* <input type="file" className="mx-auto bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">
                Select File
              </input> */}
              <label className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                Select File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="flex gap-4 mt-4">
              <ButtonWithLoading
                onClick={handleUpload}
                isLoading={isLoading}
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
              >
                Generate
              </ButtonWithLoading>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-lg font-semibold text-gray-700">Summary</h2>
            <div className="overflow-y-auto h-72 border border-gray-300 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-600">{summary} </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-gray-100 py-10">
          <div className="w-11/12 md:w-3/4 bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-end gap-4 mb-6">
              <button className="bg-red-500 text-white font-medium px-6 py-2 rounded-md hover:bg-red-600">
                Record Speech
              </button>
              <button className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600">
                Upload Speech
              </button>
            </div>
            {/* Waveform Visualization */}
            <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-4xl">
              <div className="relative">
                <div className="flex justify-between text-gray-500 text-sm mb-2">
                  <span>00:45</span>
                  <span className="text-xl font-medium text-gray-700">
                    00:<span className="text-blue-500">06.10</span>
                  </span>
                  <span>05:00</span>
                </div>
                <div className="relative bg-gray-200 h-16 rounded-md overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full flex space-x-1 px-2">
                      {[...Array(100)].map((_, i) => (
                        <div
                          key={i}
                          className={`bg-blue-500 ${
                            i % 2 === 0 ? "h-10" : "h-6"
                          } rounded-sm`}
                          style={{ width: "1px" }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute h-16 w-0.5 bg-red-500 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="w-full border border-blue-500 rounded-lg bg-blue-50 p-4 mt-6">
              <p className="text-gray-600 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-gray-600 mb-2">
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-md hover:bg-gray-300">
                Save
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Generate Summary
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {reports.map((report, index) => (
            <li key={index} className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{renderIcon(report.type)}</span>
                <div>
                  <p className="text-gray-800 font-medium">{report.name}</p>
                  <p className="text-gray-500 text-sm">{report.time}</p>
                </div>
              </div>
              <button className="px-2 py-1 text-gray-400 border border-gray-300 rounded-md hover:text-white hover:bg-blue-600">
                View
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-gray-500">5 results (Page 1 of 2)</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200">
              Previous
            </button>
            <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
