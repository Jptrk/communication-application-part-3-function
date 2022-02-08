// Actions creators
import { editUser } from "../features/userList/userListSlice";

export const editUserAction = (formData, userList) => (dispatch) => {
  console.log("userList", userList);
  // Update

  // Save
  dispatch(editUser(formData));
};
