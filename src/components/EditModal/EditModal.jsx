// Libraries
import React from "react";
import styles from "./EditModal.module.scss";
// Hooks
import useOnInput from "../../custom/useOnInput";
// Assets
import close from "../../assets/close-button.svg";

function EditModal({ showEditHandler, editHandler }) {
  const [formData, onInput, valid] = useOnInput({
    description: "",
  });

  return (
    <div className={styles.editModal}>
      <div className={`${styles.editModal} rounded-corner`}>
        {/* Toolbar */}
        <div className={styles.toolbar}>
          <p className={styles.toolbarLabel}>Edit</p>
          <img
            src={close}
            alt="close"
            className={styles.close}
            onClick={() => showEditHandler(false)}
          />
        </div>

        {/* Form */}
        <form
          className={styles.editForm}
          onSubmit={(e) => editHandler(e, formData.description)}
        >
          {/* Row 1 */}
          <div className={styles.row1}>
            <h4 className="formLabel">File Description</h4>
            <input
              type="text"
              name="description"
              className={styles.editDescription}
              placeholder="Sample File"
              value={formData.description}
              onInput={(e) => onInput(e)}
            />
          </div>
          {/* Row 2 */}
          <div className={styles.row2}>
            <div></div>
            <div className={styles.buttonsContainer}>
              <button>Save</button>
              <button
                className={styles.cancelEdit}
                onClick={() => showEditHandler(false)}
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
