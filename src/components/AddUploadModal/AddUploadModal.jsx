// Libraries
import React from "react";
import styles from "./AddUploadModal.module.scss";
// Hooks
import useOnInput from "../../custom/useOnInput";
// Assets
import close from "../../assets/close-button.svg";

function AddUploadModal({ showUploadHandler, uploadHandler }) {
  /*---------------*/
  /*---- Hooks ----*/
  /*---------------*/
  const [formData, onInputHandler] = useOnInput({
    description: "",
    file: "",
  });

  return (
    <div className={`${styles.addUploadModal} rounded-corner`}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <p className={styles.toolbarLabel}>Upload</p>
        <img
          src={close}
          alt="close"
          className={styles.close}
          onClick={() => showUploadHandler(false)}
        />
      </div>

      {/* Form */}
      <form
        className={styles.uploadForm}
        onSubmit={(e) => uploadHandler(e, formData)}
      >
        {/* Row 1 */}
        <div className={styles.row1}>
          <h4 className={styles.formLabel}>File Description</h4>
          <input
            type="text"
            name="description"
            placeholder="Sample File"
            className={styles.fileDescription}
            onInput={(e) => onInputHandler(e)}
            value={formData.description}
          />
        </div>

        {/* Row 2 */}
        <div className={styles.row2}>
          <h4 className={styles.formLabel}>File Upload</h4>
          <div className={styles.chooseFileContainer}>
            <button type="button" className={styles.chooseFileButton}>
              Choose file
            </button>
            <input
              type="file"
              name="file"
              placeholder="Sample.doc"
              className={styles.chooseFileInput}
              onChange={(e) => onInputHandler(e)}
              value={formData.file}
            />
            <div className={styles.filePreview}>
              <strong style={{ fontSize: "12px" }}>
                {/* {formatFilename(this.state.file)} */}
              </strong>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className={styles.row3}>
          <div className={styles.uploadButtonContainer}>
            <button>Upload now</button>
          </div>
          <div className={styles.cancelButtonContainer}>
            <button
              className={styles.cancelUpload}
              type="button"
              onClick={() => showUploadHandler(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUploadModal;
