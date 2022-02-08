// Libraries
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
// Components
import FormRow from "../../components/FormRow/FormRow";
// Hooks
import useOnInput from "../../custom/useOnInput";
import { useAuth } from "../../custom/useAuth";

function Login() {
  const navigate = useNavigate();
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const formInputs = { email: "", password: "" };
  const [formData, onInput, errorMessage, valid] = useOnInput(formInputs);
  const auth = useAuth();

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const onInputHandler = (e) => {
    onInput(e);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (valid) {
      // If success redirect
      const success = auth.login(formData.email, formData.password);
      if (success) {
        navigate("/dashboard/loginsuccessful");
      } else {
        alert("Invalid user credentials");
        return;
      }
    }
  };

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

        {/* Submit */}
        <div className="form-row">
          <input type="submit" value="Login" className={styles.submit} />
        </div>
      </form>
    </main>
  );
}

export default Login;
