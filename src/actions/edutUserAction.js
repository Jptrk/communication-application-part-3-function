// Actions creators
import { editUser } from "../features/userList/userListSlice";
import { emailExists } from "../utils/functions";

export const editUserAction = (formData, data, userList) => (dispatch) => {
  const newData = {
    ...formData,
    id: data.id,
  };

  // Check if email exists
  const { email } = formData;
  if (email !== data.email)
    if (emailExists(email, userList)) {
      alert("Email already exists");
      return false;
    }

  // Save
  dispatch(editUser(newData));
  return true;
};
