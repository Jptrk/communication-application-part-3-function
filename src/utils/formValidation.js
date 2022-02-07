/*---------------------------------*/
/*---- Check if email is valid ----*/
/*---------------------------------*/
export function emailValidation(email) {
  const atEmail = email.indexOf("@");
  const dotEmail = email.lastIndexOf(".");

  const emailLength = email.length;
  const dotPosFromLast = emailLength - dotEmail;

  //Check if:
  //* @ exists
  //* dot and @ are 2 character from eachother
  //* dot is not the last character, must have 2 more characters after dot
  if (
    atEmail < 1 ||
    dotEmail - atEmail < 2 ||
    dotPosFromLast < 3 ||
    email === ""
  ) {
    return false;
  } else {
    return true;
  }
}

/*---------------------------------*/
/*---- Check if password match ----*/
/*---------------------------------*/
export function passwordValidation(password, confirmPassword) {
  if (password === confirmPassword) {
    return true;
  } else {
    // alert("Passwords do not match.");
    return false;
  }
}

/*---------------------------------------*/
/*---- Check if fields are populated ----*/
/*---------------------------------------*/
export function requireInputs() {
  let valid = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      valid += 1;
    }
  }

  if (valid >= arguments.length) {
    return true;
  } else {
    alert("All fields are required.");
    return false;
  }
}
