import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    fetchUserList: (state) => {
      state.data = JSON.parse(localStorage.getItem("accounts"));
    },
    updateUserList: (state) => {
      state.data = JSON.parse(localStorage.getItem("accounts"));
    },
  },
});

export const { fetchUserList, updateUserList } = userListSlice.actions;
export default userListSlice.reducer;
