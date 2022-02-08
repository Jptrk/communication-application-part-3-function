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
    registerUser: (state, action) => {
      state.data.push(action.payload); // Add new user
      localStorage.setItem("accounts", JSON.stringify(state.data)); // Save to localstorage
    },
    deleteUser: (state, action) => {
      const userId = parseInt(action.payload);
      state.data = state.data.filter((user) => user.id !== userId); // Remove user with similar id
      localStorage.setItem("accounts", JSON.stringify(state.data)); // Save to localstorage
    },
    editUser: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { fetchUserList, registerUser, editUser, deleteUser } =
  userListSlice.actions;
export default userListSlice.reducer;
