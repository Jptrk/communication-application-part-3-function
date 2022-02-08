// Action creators
import { registerUser } from "../features/userList/userListSlice";

export const registerAction = (formData) => (dispatch) => {
  const { fullName, email, password } = formData;

  const newUser = {
    id: Number(new Date()),
    fullName: fullName,
    email: email,
    password,
  };

  dispatch(registerUser(newUser));
};
