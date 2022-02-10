// Libraries
import styles from "./Register.module.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import FormRow from "../../components/FormRow/FormRow";
import RegisterSuccessful from "./RegisterSuccessful";
// Hooks
import useOnInput from "../../custom/useOnInput";
// Actions
import { registerAction } from "../../actions/registerAction";
// Functions
import { emailExists } from "../../utils/formValidation";

function Register() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const formInputs = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, onInput, errorMessage, valid] = useOnInput(formInputs);
  const dispatch = useDispatch();

  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const [success, setSuccess] = useState(false);
  const userList = useSelector((state) => state.userList.data);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const onInputHandler = (e) => {
    onInput(e);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (valid) {
      // Validation
      const { email } = formData;
      if (emailExists(email, userList)) {
        alert("Email already exists");
        return;
      }

      // Save data
      dispatch(registerAction(formData, userList));

      // Show successful component
      setSuccess(true);
    }
  };

  return (
    <main className={`${styles.main} flex-container-column main`}>
      {!success && (
        <>
          {/* Header */}
          <h1 className="header">Register</h1>
          <form
            className={`${styles.form} flex-container-column`}
            onSubmit={(e) => onSubmitHandler(e)}
          >
            {/* Fullname */}
            <FormRow
              label="Fullname"
              type="text"
              name="fullName"
              placeholder="Full Name"
              handler={onInputHandler}
              value={formData.fullName}
              error={errorMessage.fullName}
            />

            {/* Email */}
            <FormRow
              label="Email"
              type="text"
              name="email"
              placeholder="Email"
              handler={onInputHandler}
              value={formData.email}
              error={errorMessage.email}
            />

            {/* Password */}
            <FormRow
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              handler={onInputHandler}
              value={formData.password}
              error={errorMessage.password}
            />

            {/* Confirm Password */}
            <FormRow
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              handler={onInputHandler}
              value={formData.confirmPassword}
              error={errorMessage.confirmPassword}
            />

            {/* Submit */}
            <div className="form-row">
              <input type="submit" value="Register" className={styles.submit} />
            </div>
          </form>
        </>
      )}

      {success && <RegisterSuccessful />}
    </main>
  );
}

export default Register;
