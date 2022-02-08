// Libraries
import React, { useEffect, useState } from "react";
import styles from "./EditUser.module.scss";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// Components
import FormRow from "../../components/FormRow/FormRow";
// Hooks
import useOnInput from "../../custom/useOnInput";
import usePathname from "../../custom/usePathname";
import useFetchData from "../../custom/useFetchData";
import { useSelector } from "react-redux";
// Actions
import { editUserAction } from "../../actions/edutUserAction";

function EditUser() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const location = useLocation();
  const id = usePathname(3);
  const dispatch = useDispatch();

  const formInputs = { fullName: "", email: "" };
  const [formData, onInput, errorMessage, valid] = useOnInput(formInputs);
  const [data, fetchData] = useFetchData();

  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const userList = useSelector((state) => state.userList.data);
  const [found, setFound] = useState(true);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (valid) dispatch(editUserAction(formData, userList));
  };

  const onInputHandler = (e) => {
    onInput(e);
  };

  /*-------------------*/
  /*---- UseEffect ----*/
  /*-------------------*/
  useEffect(() => {
    // Fetch data
    if (userList && id) {
      const found = fetchData(id, userList, "id");
      setFound(found);
    }
  }, [id, userList]);

  useEffect(() => {
    if (id && data) {
      // Set initial inputs value
      onInput({ target: { name: "fullName", value: data.fullName } });
      onInput({
        target: { name: "email", value: data.email },
      });
    }
  }, [id, data]);

  return (
    <>
      {/* If ID not found */}
      {!found && (
        <Navigate to="/dashboard/manageusers" state={location} replace />
      )}
      {/* If data found */}
      {data && (
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
              value={formData.fullName}
            />

            {/* Email */}
            <FormRow
              label="Email"
              type="text"
              name="email"
              placeholder="Email"
              handler={onInputHandler}
              error={errorMessage.email}
              value={formData.email}
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
      )}
    </>
  );
}

export default EditUser;
