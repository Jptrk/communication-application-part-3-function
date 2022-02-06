import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const uploadListSlice = createSlice({
  name: "uploadList",
  initialState,
  reducers: {
    fetchUploadList: (state) => {
      state.data = JSON.parse(localStorage.getItem("uploads"));
    },
    updateUploadList: (state) => {
      state.data = JSON.parse(localStorage.getItem("uploads"));
    },
  },
});

export const { fetchUploadList, updateUploadList } = uploadListSlice.actions;
export default uploadListSlice.reducer;
