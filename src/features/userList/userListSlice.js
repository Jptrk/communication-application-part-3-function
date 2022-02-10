import { createSlice } from "@reduxjs/toolkit";
// import { saveAccountHistoryAction } from "../../utils/functions";

// Init State
const initialState = {
  data: [],
};

// Reducer
export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    /*--------------------*/
    /*---- Fetch data ----*/
    /*--------------------*/
    fetchUserList: (state) => {
      state.data = JSON.parse(localStorage.getItem("accounts")) || [];
    },
    /*------------------*/
    /*---- Register ----*/
    /*------------------*/
    registerUser: (state, action) => {
      state.data.push(action.payload); // Add new user
      localStorage.setItem("accounts", JSON.stringify(state.data)); // Save to localstorage
    },
    /*----------------*/
    /*---- Delete ----*/
    /*----------------*/
    deleteUser: (state, action) => {
      const userId = parseInt(action.payload);

      // Note: add this if you want to implment
      // localstorage account history, and account retrieveal.
      // saveAccountHistoryAction(userId, state.data);

      state.data = state.data.filter((user) => user.id !== userId); // Remove user with similar id
      localStorage.setItem("accounts", JSON.stringify(state.data)); // Save to localstorage
    },
    /*--------------*/
    /*---- Edit ----*/
    /*--------------*/
    editUser: (state, action) => {
      const { id, fullName, email } = action.payload;

      for (const user of state.data) {
        // Update user properties
        // based on the form data
        if (user.id === id) {
          user.fullName = fullName;
          user.email = email;
        }
      }
      localStorage.setItem("accounts", JSON.stringify(state.data)); // Save to localstorage
    },
  },
});

export const { fetchUserList, registerUser, editUser, deleteUser } =
  userListSlice.actions;
export default userListSlice.reducer;
