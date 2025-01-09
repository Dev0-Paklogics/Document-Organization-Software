import React from 'react';

export const DocumentManagement = () => {
    const files = [
        { name: "Heart Reports", size: "604KB" },
        { name: "Blood tests", size: "2.20GB" },
        { name: "Heart Report", size: "1.46MB" },
        { name: "Normal Checkup reports", size: "1.46MB" },
        { name: "Heart reports", size: "929KB" }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Document Management</h2>
            <button style={{ margin: '10px 0', padding: '10px' }}>Create Custom Folder</button>
            <div>
                {files.map((file, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #ccc', padding: '10px', margin: '5px 0' }}>
                        <span>{file.name}</span>
                        <span>{file.size}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};