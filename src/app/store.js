import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../features/userList/userListSlice";
import uploadListReducer from "../features/uploadList/uploadListSlice";
import chatListReducer from "../features/chatList/chatListSlice";
import controlsReducer from "../features/controls/controlsSlice";

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    uploadList: uploadListReducer,
    chatList: chatListReducer,
    controls: controlsReducer,
  },
});
