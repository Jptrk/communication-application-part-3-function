// Libraries
import React, { useEffect } from "react";
import styles from "./ManageDocuments.module.scss";
import { useDispatch, useSelector } from "react-redux";
// Components
import AddUploadModal from "../../components/AddUploadModal/AddUploadModal";
// Hooks
import useVisibility from "../../custom/useVisibility";
import useFetchData from "../../custom/useFetchData";
// Actions Creators
import { fetchSharedUploads } from "../../features/uploadList/uploadListSlice";
// Actions
import { addUploadAction } from "../../actions/addUploadAction";

function SharedUploads() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const dispatch = useDispatch();
  const [uploadState, uploadToggle] = useVisibility();
  const [data, fetchData, returnFetchedData] = useFetchData();

  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const userToken = useSelector((state) => state.userToken.data);
  const sharedUploads = useSelector((state) => state.uploadList.sharedData);
  const userList = useSelector((state) => state.userList.data);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const showUploadHandler = (show) => {
    uploadToggle(show);
  };

  const uploadHandler = (e, formData, fileName) => {
    e.preventDefault();

    const success = dispatch(addUploadAction(formData, fileName, userToken));
    if (!success) return;
    showUploadHandler(false);
  };

  useEffect(() => {
    dispatch(fetchSharedUploads(userToken));
  }, [dispatch, userToken, userList]);

  return (
    <div className={styles.sharedUploadContainer}>
      {/* Modal */}
      {uploadState && (
        <AddUploadModal
          showUploadHandler={showUploadHandler}
          uploadHandler={uploadHandler}
        />
      )}

      <div className={styles.header}>
        <h1>Shared Uploads</h1>
      </div>
      {/* <!-- Table --> */}
      <div className="table-wrapper">
        <table
          cellSpacing="0"
          cellPadding="0"
          className={styles.sharedUploadsTable}
        >
          {/* <!-- Header --> */}
          <thead>
            <tr className={styles.shareTableHeader}>
              <th>Label</th>
              <th>File Name</th>
              <th>Shared by</th>
            </tr>
          </thead>

          {/* <!-- Data --> */}
          <tbody>
            {/* Add upload row */}
            {sharedUploads.map((upload, key) => (
              <tr key={key}>
                <td>{upload.description}</td>
                <td>{upload.fileName}</td>
                <td>
                  {returnFetchedData(upload.userId, userList, "id").email ||
                    "Deleted User"}
                </td>
              </tr>
            ))}
            <tr className={styles.addUploadRow}>
              <td>
                <button
                  className={`${styles.addUpload} button-small`}
                  onClick={() => showUploadHandler(true)}
                >
                  <i className="fa fa-plus"></i> Add Upload
                </button>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SharedUploads;
