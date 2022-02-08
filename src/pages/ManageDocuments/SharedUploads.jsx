// Libraries
import React from "react";
import styles from "./ManageDocuments.module.scss";
// Components
import AddUploadModal from "../../components/AddUploadModal/AddUploadModal";
// Hooks
import useVisibility from "../../custom/useVisibility";

function SharedUploads() {
  const [uploadState, uploadToggle] = useVisibility();

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const showUploadHandler = (show) => {
    uploadToggle(show);
  };

  const uploadHandler = (e, formData) => {
    e.preventDefault();

    console.log(formData);
    showUploadHandler(false);
  };

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
