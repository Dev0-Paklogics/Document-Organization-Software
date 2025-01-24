import React from "react";

export const Summaries = () => {
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
   
     <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* File Upload Section */}
      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">File Name</h2>
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


          <p className="text-sm mb-2">
            Select a file or drag and drop here
          </p>
          <p className="text-xs text-gray-400">
            JPG, PNG or PDF, file size no more than 10MB
          </p>
        </div>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">
          Select File
        </button>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
            Speech To Text
          </button>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
            Generate
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Summary</h2>
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600"
          >
            <option>Brief</option>
            <option>Detailed</option>
            <option>Key Points</option>
          </select>
        </div>
        <div className="overflow-y-auto h-72 border border-gray-300 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus...
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi...
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};
