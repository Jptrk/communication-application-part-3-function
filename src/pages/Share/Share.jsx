// Libraries
import React, { useEffect, useState } from "react";
import styles from "./Share.module.scss";
// Components
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Dropdown from "../../components/Dropdown/Dropdown";
// Hooks
import useVisibility from "../../custom/useVisibility";
import { useDispatch, useSelector } from "react-redux";
import useFetchData from "../../custom/useFetchData";
import usePathname from "../../custom/usePathname";
//Action creators
import {
  addSharedUser,
  deleteSharedUser,
} from "../../features/uploadList/uploadListSlice";
// Functions
import { filterSharedUser } from "../../utils/functions";

function Share() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const [showDelete, setShowDelete] = useVisibility();
  const [data, fetchData] = useFetchData();

  const uploadId = usePathname(3);
  const dispatch = useDispatch();

  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  // User States
  const userList = useSelector((state) => state.userList.data);
  const uploadList = useSelector((state) => state.uploadList.data);
  const userToken = useSelector((state) => state.userToken.data);

  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [sharedUserList, setSharedUserList] = useState(null);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  // Delete
  const showDeleteHandler = (show, id) => {
    show ? setSelectedUser(id) : setSelectedUser(null);

    setShowDelete(show);
  };

  const deleteSharedUserHandler = () => {
    dispatch(deleteSharedUser({ selectedUser, data, userToken }));
    showDeleteHandler(false);
  };

  // Dropdown
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!selectedDropdown) return;
    dispatch(addSharedUser({ selectedDropdown, uploadId, userToken }));
    setSelectedDropdown("");
  };

  const selectHandler = (user) => {
    setSelectedDropdown(user);
  };

  /*-------------------*/
  /*---- UseEffect ----*/
  /*-------------------*/

  // Fetch current upload data
  useEffect(() => {
    fetchData(uploadId, uploadList, "id");
  }, [uploadId, uploadList]);

  // Filter shared users
  useEffect(() => {
    // Get shared user List
    const sharedUserArray = data?.sharedUser || [];

    // Get shared users or not shared users
    const { sharedUsers } = filterSharedUser(sharedUserArray, userList);

    // Set SharedUserList state
    setSharedUserList(sharedUsers);
  }, [data, userList]);

  return (
    <>
      {data && (
        <main className={styles.main}>
          {/* Delete modal */}
          {showDelete && (
            <DeleteModal
              showDeleteHandler={showDeleteHandler}
              deleteHandler={deleteSharedUserHandler}
            />
          )}
          {/* Upload Sharing */}
          <div className={styles.uploadSharingContainer}>
            {/* Header */}
            <div className={styles.header}>
              <h1>
                Upload Sharing:
                <span style={{ fontWeight: "normal" }}> {data.fileName}</span>
              </h1>
            </div>
            {/* Table */}
            <div className={`${styles.tableWrapper} rounded-corner`}>
              <table
                cellSpacing="0"
                cellPadding="0"
                className={styles.sharedListTable}
              >
                {/* Header */}
                <thead>
                  <tr>
                    <th>Shared User</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {/* Data */}
                <tbody>
                  {sharedUserList.length <= 0 && (
                    <tr>
                      <td colSpan={2}>
                        <center>
                          <h2>No user.</h2>
                        </center>
                      </td>
                    </tr>
                  )}

                  {sharedUserList.length > 0 &&
                    sharedUserList.map((user, key) => (
                      <tr key={key}>
                        <td>{user.fullName}</td>
                        <td>
                          <a
                            className={styles.remove}
                            onClick={() => showDeleteHandler(true, user.id)}
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Sharing */}
          <div className={styles.addSharingContainer}>
            {/* Header */}
            <div className={styles.header}>
              <h1>Add Sharing</h1>
            </div>

            {/* Choose user container */}
            <div className={`${styles.chooseUserContainer} rounded-corner`}>
              <form
                className={`${styles.chooseUserForm}`}
                onSubmit={(e) => onSubmitHandler(e)}
              >
                <div className={`form-row ${styles.formRow}`}>
                  <h3>Choose User:</h3>
                  {/* Dropdown */}
                  <Dropdown
                    data={userList}
                    selectedDropdown={selectedDropdown}
                    selectHandler={selectHandler}
                    selectedUpload={data}
                  />
                  <input
                    type="submit"
                    value="Add Share"
                    className={styles.addBtton}
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Share;
