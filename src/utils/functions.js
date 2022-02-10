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

// Format date
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
