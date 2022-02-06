// Libraries
import styles from "./Register.module.scss";
import React, { useEffect, useState } from "react";
// Components
import FormRow from "../../components/FormRow/FormRow";
import RegisterSuccessful from "./RegisterSuccessful";
// Utils
import { errorSetter } from "../../utils/formValidation";

function Register() {
  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const onInputHandler = (e) => {
    errorSetter(e, error, formData);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  /*-------------------*/
  /*---- UseEffect ----*/
  /*-------------------*/
  useEffect(() => {
    // If form field is empty remove error
    if (!formData.email.length) {
      setError((prev) => ({ ...prev, email: "" }));
    }
    if (!formData.password.length) {
      setError((prev) => ({ ...prev, password: "" }));
    }
    if (!formData.confirmPassword.length) {
      setError((prev) => ({ ...prev, confirmPassword: "" }));
    }
    if (!formData.fullName.length) {
      setError((prev) => ({ ...prev, fullName: "" }));
    }
  }, [formData]);

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
              error={error.fullName}
            />

            {/* Email */}
            <FormRow
              label="Email"
              type="text"
              name="email"
              placeholder="Email"
              handler={onInputHandler}
              value={formData.email}
              error={error.email}
            />

            {/* Password */}
            <FormRow
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              handler={onInputHandler}
              value={formData.password}
              error={error.password}
            />

            {/* Confirm Password */}
            <FormRow
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              handler={onInputHandler}
              value={formData.confirmPassword}
              error={error.confirmPassword}
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
