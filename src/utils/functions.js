/*----------------------------*/
/*---- Filter Shared User ----*/
/*----------------------------*/

import { emailExists, idExists } from "./formValidation";

// Note: this will return the list
// of shared users, and the list
// of the not shared users
export const filterSharedUser = (selectedUpload, userList) => {
  let sharedUsers = [];
  let notSharedUsers = [];

  userList.forEach((user) => {
    // If the user id of each user in
    // the userlist exists then push to
    // shared users array, else push to
    // not shared users array.
    const exists = selectedUpload.some((shared) => shared === user.id);
    if (exists) {
      sharedUsers.push(user);
    } else {
      notSharedUsers.push(user);
    }
  });

  return { notSharedUsers, sharedUsers };
};

/*---------------------*/
/*---- Format Date ----*/
/*---------------------*/
export function dateFormat(date) {
  const newDate = new Date(date);

  const ampm = newDate.getHours() >= 12 ? "PM" : "AM";
  let hour = newDate.getHours();
  let hourFormat = "";

  if (hour > 12) {
    hourFormat = newDate.getHours() - 12;
    hour = "0" + hourFormat.toString();
  }

  const format = `${newDate.getFullYear()}-${
    newDate.getMonth() + 1
  }-${newDate.getDate()} ${hour}:${newDate.getMinutes()}:${newDate.getSeconds()} ${ampm}`;

  return format;
}

/*------------------------------*/
/*---- Save account history ----*/
/*------------------------------*/
export function saveAccountHistoryAction(selectedUserId, userData) {
  // History data
  const accountHistoryData =
    JSON.parse(localStorage.getItem("accountHistory")) || [];

  // Selected user
  const selectedUserData = userData.filter(
    (account) => account.id === parseInt(selectedUserId)
  )[0];

  // If email and ID exists dont save
  const existsEmail = emailExists(selectedUserData.email, accountHistoryData);
  const existsId = idExists(selectedUserId, accountHistoryData);

  if (existsEmail) return;
  if (existsId) return;

  accountHistoryData.push(selectedUserData);
  localStorage.setItem("accountHistory", JSON.stringify(accountHistoryData));
}

/*---------------------------------------*/
/*---- Fetch upload info using email ----*/
/*---------------------------------------*/
export function fetchDataByEmail(email, arr) {
  const data = arr.filter((item) => item.email === email);
  return data[0];
}
