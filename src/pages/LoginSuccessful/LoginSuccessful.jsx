// Library
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./LoginSuccessful.module.scss";

function LoginSuccessful() {
  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const userToken = useSelector((state) => state.userToken.data);

  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Login Successful</h1>
        <p>
          <strong>Welcome!</strong>
          <span className={styles.userEmail}> {userToken.email}</span>
        </p>
      </div>
    </main>
  );
}

export default LoginSuccessful;
