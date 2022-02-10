import { fetchUploadList } from "../features/uploadList/uploadListSlice";

export const deleteUploadAction = (selectedUpload, userToken) => (dispatch) => {
  const uploadList = JSON.parse(localStorage.getItem("uploads"));

  // Filter data based on selected id
  const updatedData = uploadList.filter(
    (upload) => upload.id !== selectedUpload
  );

  // Save updated data to localstorage
  localStorage.setItem("uploads", JSON.stringify(updatedData));

  //Update State
  dispatch(fetchUploadList(userToken));
};
