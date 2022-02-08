import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("userToken")) || null,
};

export const userTokenSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    fetchUserToken: (state) => {
      state.data = JSON.parse(localStorage.getItem("userToken")) || null;
    },
  },
});

export const { fetchUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
