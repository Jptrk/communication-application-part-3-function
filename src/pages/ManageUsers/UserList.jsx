// Libraries
import React, { useState } from "react";
import styles from "./UserList.module.scss";
import { useSelector, useDispatch } from "react-redux";
// Components
import User from "./User";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
// Hooks
import useVisibility from "../../custom/useVisibility";
// Actions
import { deleteUser } from "../../features/userList/userListSlice";
import { deleteUserUploads } from "../../features/uploadList/uploadListSlice";

function UserList() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const dispatch = useDispatch();

  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const users = useSelector((state) => state.userList.data);
  const [state, toggle] = useVisibility();
  const [selectedId, setSelectedId] = useState(null);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const showDelete = (show, id) => {
    show ? setSelectedId(id) : setSelectedId(null);
    toggle(show);
  };

  const deleteHandler = () => {
    // Delete User
    dispatch(deleteUser(selectedId));

    // Delete User Uploads
    dispatch(deleteUserUploads(selectedId));

    toggle(false);
  };

  return (
    <main className={`${styles.main} flex-container-column`}>
      {state && (
        <DeleteModal
          showDeleteHandler={showDelete}
          deleteHandler={deleteHandler}
        />
      )}

      {/*  Page Header */}
      <div className={styles.header}>
        <h1>Users</h1>
      </div>

      {/*  User Table  */}
      <div className={`${styles.tableWrapper} table-wrapper round-corner`}>
        <table cellSpacing="0" cellPadding="0" className={styles.userlistTable}>
          {/* Table Header */}
          <thead>
            <tr>
              <th>Name</th>
              <th>User Email ID</th>
              <th></th>
            </tr>
          </thead>

          {/* Data will be rendered below */}
          <tbody>
            {users.map((user, key) => (
              <User data={user} key={key} showDelete={showDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default UserList;
