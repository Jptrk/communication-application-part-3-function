import { fetchUploadList } from "../features/uploadList/uploadListSlice";

export const editUploadAction =
  (selectedUpload, description, userToken) => (dispatch) => {
    const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];

    // Update data based on
    // selected upload id
    for (const upload of uploadList) {
      if (upload.id === selectedUpload) {
        upload.description = description;
      }
    }

    // Save to localstorage
    localStorage.setItem("uploads", JSON.stringify(uploadList));

    // Update state
    dispatch(fetchUploadList(userToken));
  };
