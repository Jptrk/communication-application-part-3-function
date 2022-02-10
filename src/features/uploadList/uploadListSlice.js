import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  sharedData: [],
};

export const uploadListSlice = createSlice({
  name: "uploadList",
  initialState,
  reducers: {
    /*--------------------*/
    /*---- Fetch Data ----*/
    /*--------------------*/
    fetchUploadList: (state, action) => {
      // If user token is null or undefined
      // set uploadList value to an empty array
      if (!action.payload) {
        state.data = [];
        return;
      }

      // Filter upload list
      const { id } = action.payload;
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];
      const filteredUploadList = uploadList.filter(
        (upload) => upload.userId === id
      );

      // Save filtered data
      state.data = filteredUploadList;
    },

    /*--------------------*/
    /*---- Add Upload ----*/
    /*--------------------*/
    addUpload: (state, action) => {
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];

      uploadList.push(action.payload); // Push new data to uploadList
      localStorage.setItem("uploads", JSON.stringify(uploadList)); // Save updated data to localstorage

      state.data.push(action.payload); // Update state
    },

    /*-----------------------*/
    /*---- Delete Upload ----*/
    /*-----------------------*/
    deleteUpload: (state, action) => {
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];
      const id = action.payload;

      // Filter data based on selected id
      const updatedData = uploadList.filter((upload) => upload.id !== id);

      // Save updated data to localstorage
      localStorage.setItem("uploads", JSON.stringify(updatedData));

      // Update state
      state.data = state.data.filter((upload) => upload.id !== id);
    },

    /*-------------------------------*/
    /*---- Delete User's Uploads ----*/
    /*-------------------------------*/
    deleteUserUploads: (state, action) => {
      const id = action.payload;
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];
      const userToken = JSON.parse(localStorage.getItem("userToken")) || [];

      // Filter data based on selected id
      const updatedData = uploadList.filter((upload) => upload.userId !== id);

      // Save updated data to localstorage
      localStorage.setItem("uploads", JSON.stringify(updatedData));

      // Filter upload list
      const filteredUploadList = updatedData.filter(
        (upload) => upload.userId === userToken.id
      );

      // Update state
      state.data = filteredUploadList;
    },

    /*---------------------*/
    /*---- Edit Upload ----*/
    /*---------------------*/
    editUpload: (state, action) => {
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];
      const { selectedUpload, description, userToken } = action.payload;

      // Update data based on
      // selected upload id
      for (const upload of uploadList) {
        if (upload.id === selectedUpload) {
          upload.description = description;
        }
      }

      // Save updated data to localstorage
      localStorage.setItem("uploads", JSON.stringify(uploadList));

      // Update state
      state.data = uploadList.filter(
        (upload) => upload.userId === userToken.id
      );
    },

    /*------------------------------*/
    /*---- Fetch Shared Uploads ----*/
    /*------------------------------*/
    fetchSharedUploads: (state, action) => {
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];
      const { id } = action.payload;

      const filteredData = uploadList.filter((upload) =>
        upload.sharedUser.some((user) => user === id)
      );

      state.sharedData = filteredData;
    },

    /*--------------------------*/
    /*---- Add Shared Users ----*/
    /*--------------------------*/
    addSharedUser: (state, action) => {
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];
      const { selectedDropdown, uploadId, userToken } = action.payload;

      for (const upload of uploadList) {
        if (upload.id === parseInt(uploadId)) {
          upload.sharedUser.push(selectedDropdown.id);
        }
      }

      // Save updated data to localstorage
      localStorage.setItem("uploads", JSON.stringify(uploadList));

      // Update state
      state.data = uploadList.filter(
        (upload) => upload.userId === userToken.id
      );
    },

    deleteSharedUser: (state, action) => {
      const uploadList = JSON.parse(localStorage.getItem("uploads")) || [];
      const selectedUser = action.payload.selectedUser;
      const userToken = action.payload.userToken.id;
      const selectedUpload = action.payload.data.id;

      for (const upload of uploadList) {
        if (upload.id === selectedUpload) {
          upload.sharedUser = upload.sharedUser.filter(
            (id) => id !== selectedUser
          );
        }
      }

      // Save updated data to localstorage
      localStorage.setItem("uploads", JSON.stringify(uploadList));

      // Update state
      state.data = uploadList.filter((upload) => upload.userId === userToken);
    },
  },
});

export const {
  fetchUploadList,
  updateUploadList,
  addUpload,
  deleteUpload,
  editUpload,
  fetchSharedUploads,
  addSharedUser,
  deleteSharedUser,
  deleteUserUploads,
} = uploadListSlice.actions;
export default uploadListSlice.reducer;
