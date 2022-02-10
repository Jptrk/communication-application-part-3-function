import { addUpload } from "../features/uploadList/uploadListSlice";

export const addUploadAction =
  (formData, fileName, userToken) => (dispatch) => {
    const { filePath, description } = formData;

    // If fields are empty display error message
    if (!description) {
      alert("Input file description");
      return false;
    } else if (!filePath || !fileName) {
      alert("Choose a file upload");
      return false;
    } else {
      // If input fields are valid
      // dispatch the actions.
      const newUpload = {
        id: Number(new Date()),
        ...formData,
        sharedUser: [],
        fileName: fileName,
        userId: userToken.id,
      };

      dispatch(addUpload(newUpload));
      return true;
    }
  };
