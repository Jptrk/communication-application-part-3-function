// Libraries
import React from "react";
import styles from "./DeleteModal.module.scss";
// Assets
import question from "../../assets/question.jpg";
import close from "../../assets/close-button.svg";

function DeleteModal({ showDeleteHandler, deleteHandler }) {
  return (
    <div className={`${styles.deleteModal} rounded-corner`}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <p className={styles.toolbarLabel}>Confirm User Deletion</p>
        <img
          src={close}
          alt="close"
          className={styles.close}
          onClick={() => showDeleteHandler(false)}
        />
      </div>

      {/* Message */}
      <div className={styles.message}>
        <img src={question} alt="question" />
        <h4>Are you sure?</h4>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button
          className={`${styles.deleteOk} button-small`}
          onClick={deleteHandler}
        >
          Ok
        </button>
        <button
          className={`${styles.deleteCancel} button-small`}
          onClick={() => showDeleteHandler(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
