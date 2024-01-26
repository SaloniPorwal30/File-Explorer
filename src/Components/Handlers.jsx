export const createFolderHandler = (currentFolder, folderName) => {
  const newFolder = {
    type: "folder",
    name: folderName,
    data: [],
  };
  return { ...currentFolder, data: [...currentFolder.data, newFolder] };
};

export const createFileHandler = (currentFolder, fileName) => {
  const newFile = {
    type: "file",
    name: fileName,
  };
  return { ...currentFolder, data: [...currentFolder.data, newFile] };
};

export const deleteFileHandler = (currentFiles, fileName) => {
  const updatedData = currentFiles.data
    .map((file) => {
      if (file.type === "folder") {
        const updatedFolder = deleteFileHandler(file, fileName);
        return { ...file, data: updatedFolder.data };
      } else if (file.name === fileName) {
        return null;
      } else {
        return file;
      }
    })
    .filter(Boolean);
  return { ...currentFiles, data: updatedData };
};

export const renameFileHandler = (currentFiles, oldName, newName) => {
  return {
    ...currentFiles,
    data: currentFiles.data.map((file) =>
      file.name === oldName
        ? { ...file, name: newName }
        : file.type === "folder"
        ? renameFileHandler(file, oldName, newName)
        : file
    ),
  };
};
