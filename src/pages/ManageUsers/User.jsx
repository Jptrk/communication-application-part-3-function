// Libraries
import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserList.module.scss";

function User({ data, showDelete }) {
  return (
    <tr>
      <td>{data?.fullName}</td>
      <td>{data?.email}</td>
      <td>
        <div className={styles.actions}>
          {/* Edit */}
          <Link to={`${data.id}`} className={styles.edit}>
            Edit
          </Link>
          {/* Line */}
          <span>&nbsp;|&nbsp;</span>
          {/* Delete */}
          <Link
            to="#"
            className={styles.deleteButton}
            onClick={() => showDelete(true, data.id)}
          >
            Delete
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default User;
