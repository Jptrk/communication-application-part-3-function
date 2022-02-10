// Libraries
import { useCallback, useEffect, useState } from "react";
// Utils
import { emailValidation } from "../utils/formValidation";
import { passwordValidation } from "../utils/formValidation";

// Note: this custom hook needs
// the form input object argument
function useOnInput(formInputs) {
  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const [formData, setFormData] = useState(formInputs);
  const [errorMessage, setErrorMessage] = useState(formInputs);
  const [valid, setValid] = useState(false);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const onInput = (e) => {
    const { name, value } = e.target;

    // Form data
    setFormData((prev) => ({ ...prev, [name]: value }));
    onValidate(name, value);
  };

  const onValidate = useCallback(
    // Will validate form fields
    (name, value) => {
      switch (name) {
        case "fullName":
          setErrorMessage((prev) => ({
            ...prev,
            fullName:
              value.length < 5 && value.length > 0
                ? `Fullname must be 5 characters long`
                : "",
          }));
          break;
        case "email":
          setErrorMessage((prev) => ({
            ...prev,
            email:
              !emailValidation(value) && value.length > 0
                ? "Invalid email address"
                : "",
          }));
          break;
        case "password":
          setErrorMessage((prev) => ({
            ...prev,
            password:
              value.length < 5 && value.length > 0
                ? "Password must be 5 characters long"
                : "",
            confirmPassword:
              !passwordValidation(value, formData.confirmPassword) &&
              formData.confirmPassword
                ? "Passwords do not match"
                : "",
          }));
          break;
        case "confirmPassword":
          setErrorMessage((prev) => ({
            ...prev,
            confirmPassword: !passwordValidation(value, formData.password)
              ? "Passwords do not match"
              : "",
          }));
          break;
        case "description":
          setErrorMessage((prev) => ({
            ...prev,
            description: value.length <= 0 ? `This field is required` : "",
          }));
          break;

        default:
          break;
      }
    },
    [formData.password, formData.confirmPassword]
  );

  useEffect(() => {
    // Check if error message is empty
    const isNoError = Object.values(errorMessage).every((x) => x === "");
    const isEmpty = Object.values(formData).some((x) => x === "");

    !isEmpty && isNoError ? setValid(true) : setValid(false);
  }, [errorMessage, formData]);

  // Note: This hook can return 4 values
  // The form data, inputhandler, error data
  // and the valid boolean
  return [formData, onInput, errorMessage, valid];
}

export default useOnInput;
