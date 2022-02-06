import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const chatListSlice = createSlice({
  name: "chatList",
  initialState,
  reducers: {
    fetchChatList: (state) => {
      state.data = JSON.parse(localStorage.getItem("chats"));
    },
    updateChatList: (state) => {
      state.data = JSON.parse(localStorage.getItem("chats"));
    },
  },
});

export const { fetchChatList, updateChatList } = chatListSlice.actions;
export default chatListSlice.reducer;
