import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallDocsFunApi } from "store/document/services";
import { FaFolder, FaChevronDown, FaChevronUp, FaFilePdf } from "react-icons/fa";

export const DocumentManagement = () => {
  const dispatch = useDispatch();
  const [groupedDocs, setGroupedDocs] = useState({});
  const [openFolders, setOpenFolders] = useState({});

  const allDocs = useSelector((state) => state.document.documentAll.data);
  console.log("allDocs",allDocs)

  useEffect(() => {
    dispatch(
      getallDocsFunApi({
        onSuccess: () => {
        },
      })
    );
  }, [dispatch]);

  useEffect(() => {
    // Group documents by category
    if (allDocs?.length > 0) {
      const grouped = allDocs.reduce((acc, doc) => {
        acc[doc.category] = acc[doc.category] || [];
        acc[doc.category].push(doc);
        return acc;
      }, {});
      setGroupedDocs(grouped);
    }
  }, [allDocs]);

  const toggleFolder = (category) => {
    setOpenFolders((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Document Management</h2>
      <div className="space-y-4">
        {Object.keys(groupedDocs).map((category) => (
          <div
            key={category}
            className="border border-gray-300 rounded-lg p-4 shadow-md"
          >
            {/* Folder Header */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFolder(category)}
            >
              <div className="flex items-center">
                <FaFolder className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                  <p className="text-sm text-gray-500">
                    {groupedDocs[category].length} files
                  </p>
                </div>
              </div>
              {openFolders[category] ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>

            {/* Folder Content */}
            {openFolders[category] && (
              <ul className="mt-4 space-y-2">
                {groupedDocs[category].map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer"
                    onClick={() => window.open(file.fileUrl, "_blank")}
                  >
                    <FaFilePdf className="text-red-500 text-xl" />
                    <span className="text-sm font-medium text-gray-700">
                      {file.fileUrl.split("/").pop()} 
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
