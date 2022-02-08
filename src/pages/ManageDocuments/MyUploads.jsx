// Libraries
import React, { useState } from "react";
import styles from "./ManageDocuments.module.scss";
import { useSelector } from "react-redux";
// Components
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Upload from "./Upload";
import EditModal from "../../components/EditModal/EditModal";
// Hooks
import useVisibility from "../../custom/useVisibility";

function MyUploads() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const [deleteState, deleteToggle] = useVisibility();
  const [uploadState, uploadToggle] = useVisibility();

  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const uploadList = useSelector((state) => state.uploadList.data);
  const [selectedUpload, setSelectedUpload] = useState(null);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const showDelete = (show, id) => {
    show ? setSelectedUpload(id) : setSelectedUpload(null);
    deleteToggle(show);
  };

  const deleteUpload = () => {
    console.log("Delete:", selectedUpload);
  };

  const showEdit = (show, id) => {
    show ? setSelectedUpload(id) : setSelectedUpload(null);
    uploadToggle(show);
  };

  const editHandler = (e, description) => {
    e.preventDefault();
    console.log("Edit:", selectedUpload, description);
  };

  return (
    <>
      {/* Modals */}
      {deleteState && (
        <DeleteModal
          showDeleteHandler={showDelete}
          deleteHandler={deleteUpload}
        />
      )}
      {uploadState && (
        <EditModal showEditHandler={showEdit} editHandler={editHandler} />
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
              {uploadList.map((upload, key) => (
                <Upload
                  data={upload}
                  showDelete={showDelete}
                  showEdit={showEdit}
                  key={key}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyUploads;
