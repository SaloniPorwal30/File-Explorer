import React, { useState } from "react";
import FileExplorer from "./Components/FileExplorer";
import {
  createFolderHandler,
  createFileHandler,
  deleteFileHandler,
  renameFileHandler,
} from "./Components/Handlers";
import { Files } from "./Files";

function App() {
  const [files, setFiles] = useState(Files);

  const createFolder = (currentFolder, folderName) => {
    const updatedFiles = createFolderHandler(currentFolder, folderName);
    setFiles(updatedFiles);
  };

  const createFile = (currentFolder, fileName) => {
    const updatedFiles = createFileHandler(currentFolder, fileName);
    setFiles(updatedFiles);
  };

  const deleteFile = (fileName) => {
    const updatedFiles = deleteFileHandler(files, fileName);
    setFiles(updatedFiles);
  };

  const renameFile = (oldName, newName) => {
    const updatedFiles = renameFileHandler(files, oldName, newName);
    setFiles(updatedFiles);
  };
  return (
    <>
      <FileExplorer
        files={files}
        createFolder={createFolder}
        createFile={createFile}
        deleteFile={deleteFile}
        renameFile={renameFile}
      />
    </>
  );
}

export default App;
