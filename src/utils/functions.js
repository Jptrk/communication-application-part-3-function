/*--------------------------*/
/*---- Form Validations ----*/
/*--------------------------*/

// Checks if email already exists
export const emailExists = (email, userList) => {
  const exist = userList.some((user) => user.email === email);
  return exist;
};
