import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const chatListSlice = createSlice({
  name: "chatList",
  initialState,
  reducers: {
    fetchChatList: (state) => {
      state.data = JSON.parse(localStorage.getItem("chat")) || [];
    },
  },
});

export const { fetchChatList } = chatListSlice.actions;
export default chatListSlice.reducer;
