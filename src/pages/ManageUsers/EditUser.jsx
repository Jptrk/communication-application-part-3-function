// Libraries
import React from "react";
import styles from "./EditUser.module.scss";
// Components
import FormRow from "../../components/FormRow/FormRow";
// Hooks
import useOnInput from "../../custom/useOnInput";

function EditUser() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const formInputs = { fullName: "", email: "" };
  const [formData, onInput, errorMessage, valid] = useOnInput(formInputs);
  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (valid) console.log(formData);
  };
  const onInputHandler = (e) => {
    onInput(e);
  };

  return (
    <main className={`${styles.main} flex-container-column`}>
      {/* <!-- Header --> */}
      <div>
        <h1 className="header">Edit User Information</h1>
      </div>

      {/* <!-- Edit Form --> */}
      <form
        className={`${styles.editForm} flex-container-column`}
        onSubmit={(e) => onSubmitHandler(e)}
      >
        {/* Full name */}
        <FormRow
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Full Name"
          handler={onInputHandler}
          error={errorMessage.fullName}
        />

        {/* Email */}
        <FormRow
          label="Email"
          type="text"
          name="email"
          placeholder="Email"
          handler={onInputHandler}
          error={errorMessage.email}
        />
        <div className="form-row">
          <input
            type="submit"
            value="Save"
            className={styles.submit}
            name="save"
          />
        </div>
      </form>
    </main>
  );
}

export default EditUser;
