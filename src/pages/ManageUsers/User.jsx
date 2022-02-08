// Libraries
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./UserList.module.scss";

function User({ data, showDelete }) {
  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const userToken = useSelector((state) => state.userToken.data);

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
          {/* If current logged in user */}
          {/* Dont display delete button */}
          {data.id !== userToken.id && (
            <>
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
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

export default User;
