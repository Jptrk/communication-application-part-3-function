// Libraries
import styles from "./Login.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import FormRow from "../../components/FormRow/FormRow";
// Utils
import { errorSetter } from "../../utils/formValidation";

function Login() {
  const navigate = useNavigate();
  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const onInputHandler = (e) => {
    errorSetter(e, error, formData);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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
  }, [formData]);

  return (
    <main className={`${styles.main} flex-container-column main`}>
      {/* Header */}
      <h1 className="header">Login</h1>

      {/* Form */}
      <form
        className={`${styles.form} flex-container-column`}
        onSubmit={(e) => onSubmitHandler(e)}
      >
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

        {/* Submit */}
        <div className="form-row">
          <input type="submit" value="Login" className={styles.submit} />
        </div>
      </form>
    </main>
  );
}

export default Login;
