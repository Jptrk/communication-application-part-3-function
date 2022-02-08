// Libraries
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ManageDocuments.module.scss";

function Upload({ data, showEdit, showDelete }) {
  return (
    <tr>
      <td>{data.description}</td>
      <td>{data.fileName}</td>
      <td>
        <div className={styles.actions}>
          {/* Edit */}
          <Link to="#" onClick={() => showEdit(true, data.id)}>
            Edit
          </Link>
          {/* Line */}
          <span>&nbsp;|&nbsp;</span>
          {/* Delete */}
          <Link to="#" onClick={() => showDelete(true, data.id)}>
            Delete
          </Link>
          {/* Line */}
          <span>&nbsp;|&nbsp;</span>
          {/* Share */}
          <Link to={`${data.id}`}>Share</Link>
        </div>
      </td>
    </tr>
  );
}

export default Upload;
