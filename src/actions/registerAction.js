// Action creators
import { registerUser } from "../features/userList/userListSlice";
// Functions
import { fetchDataByEmail } from "../utils/functions";

export const registerAction = (formData) => (dispatch) => {
  const { fullName, email, password } = formData;

  const newUser = {
    id: Number(new Date()),
    fullName: fullName,
    email: email,
    password,
  };

  // If old user use the same ID
  if (checkOldUser(email)) newUser.id = checkOldUser(email).id;

  dispatch(registerUser(newUser));
};

/*----------------------------------*/
/*---- Check of old user exists ----*/
/*----------------------------------*/
function checkOldUser(email) {
  //Old accounts
  const oldUsers = JSON.parse(localStorage.getItem("accountHistory"));
  const selectedOldUser = fetchDataByEmail(email, oldUsers || []);

  return selectedOldUser ? selectedOldUser : false;
}
