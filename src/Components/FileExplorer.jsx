import React, { useState } from "react";
import { FaFile, FaFolder } from "react-icons/fa";

import "./styles.css";

const FileExplorer = ({
  files,
  createFolder,
  createFile,
  deleteFile,
  renameFile,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleCreateFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      createFolder(files, folderName);
    }
  };

  const handleCreateFile = () => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      createFile(files, fileName);
    }
  };
  const handleDelete = (fileName) => {
    deleteFile(fileName);
  };

  const handleRename = (oldName, newName) => {
    renameFile(oldName, newName);
  };
  if (files.type === "folder") {
    return (
      <div key={files.name} className="div">
        <span onClick={() => setExpanded(!expanded)}>{files.name}</span>
        <button className="create-folder" onClick={handleCreateFolder}>
          New Folder <FaFolder />
        </button>
        <button className="create-file" onClick={handleCreateFile}>
          New File <FaFile />
        </button>
        <div
          className="expanded"
          style={{ display: expanded ? "block" : "none" }}
        >
          {files.data.map((file) => (
            <FileExplorer
              key={file.name}
              files={file}
              createFolder={createFolder}
              createFile={createFile}
              deleteFile={deleteFile}
              renameFile={renameFile}
            />
          ))}
        </div>
      </div>
    );
  } else if (files.type === "file") {
    return (
      <div className="div" key={files.name}>
        {files.name}
        <button
          className="delete-button"
          onClick={() => handleDelete(files.name)}
        >
          Delete
        </button>
        <button
          className="rename-button"
          onClick={() =>
            handleRename(files.name, prompt("Enter new file name:"))
          }
        >
          Rename
        </button>
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default FileExplorer;
