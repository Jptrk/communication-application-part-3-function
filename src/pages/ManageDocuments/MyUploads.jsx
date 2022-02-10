// Libraries
import React, { useEffect, useState } from "react";
import styles from "./ManageDocuments.module.scss";
import { useSelector, useDispatch } from "react-redux";
// Components
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Upload from "./Upload";
import EditModal from "../../components/EditModal/EditModal";
// Hooks
import useVisibility from "../../custom/useVisibility";
// Actions Creator
import {
  deleteUpload,
  editUpload,
} from "../../features/uploadList/uploadListSlice";
import useFetchData from "../../custom/useFetchData";
// Actions

function MyUploads() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const [deleteState, deleteToggle] = useVisibility();
  const [uploadState, uploadToggle] = useVisibility();
  const [data, fetchData] = useFetchData();
  const dispatch = useDispatch();

  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const uploadList = useSelector((state) => state.uploadList.data);
  const userToken = useSelector((state) => state.userToken.data);
  const [selectedUpload, setSelectedUpload] = useState(null);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/

  // Delete handlers
  const showDelete = (show, id) => {
    show ? setSelectedUpload(id) : setSelectedUpload(null);
    deleteToggle(show);
  };

  const deleteUploadHandler = () => {
    dispatch(deleteUpload(selectedUpload));
    showDelete(false);
  };

  // Edit handlers
  const showEdit = (show, id) => {
    show ? setSelectedUpload(id) : setSelectedUpload(null);
    uploadToggle(show);

    fetchData(id, uploadList, "id");
  };

  const editHandler = (e, description, valid) => {
    e.preventDefault();
    if (valid) {
      dispatch(editUpload({ selectedUpload, description, userToken }));
      uploadToggle(false);
    }
  };

  return (
    <>
      {/* Modals */}
      {deleteState && (
        <DeleteModal
          showDeleteHandler={showDelete}
          deleteHandler={deleteUploadHandler}
        />
      )}
      {uploadState && (
        <EditModal
          showEditHandler={showEdit}
          editHandler={editHandler}
          defaultValue={data?.description}
        />
      )}

      {/* My uploads */}
      <div className={styles.myUploadContainer}>
        <div className={styles.header}>
          <h1>My Uploads</h1>
        </div>
        <div className="table-wrapper">
          <table
            cellSpacing="0"
            cellPadding="0"
            className={styles.uploadlistTable}
          >
            {/* Header */}
            <thead>
              <tr>
                <th>Label</th>
                <th>File Name</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Data */}
            <tbody>
              {uploadList.length > 0 &&
                uploadList.map((upload, key) => (
                  <Upload
                    data={upload}
                    showDelete={showDelete}
                    showEdit={showEdit}
                    key={key}
                  />
                ))}
              {!uploadList.length && (
                <tr>
                  <td colSpan={3}>
                    <center>
                      <h1>No uploads.</h1>
                    </center>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyUploads;
