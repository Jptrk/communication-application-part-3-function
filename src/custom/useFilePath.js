import React, { useCallback, useEffect, useState } from "react";

function useFilePath() {
  const [fileName, setFileName] = useState("");

  const getFileName = useCallback((filePath) => {
    const index = filePath.lastIndexOf("\\");
    const formattedFilePath = filePath.substring(index + 1);

    setFileName(formattedFilePath);
  }, []);

  return { fileName, getFileName };
}

export default useFilePath;
