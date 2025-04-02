import React, { useState } from "react";
import "./style.css"; 

const FileUploadModal = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setFile(null);
      setIsOpen(false);
    }
  };

  return (
    <div>
      <a href="#" onClick={() => setIsOpen(true)} className="open-modal-link">Upload CSV</a>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-button" onClick={() => setIsOpen(false)}>&times;</span>
            <h3 className="modal-title">Upload CSV File</h3>
            <input type="file" onChange={handleFileChange} className="file-input" />
            <button onClick={handleUpload} className="upload-button" disabled={!file}>
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadModal;
