// Libraries
import React from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterSuccessful.module.scss";

function RegisterSuccessful() {
  return (
    <main className={`flex-container-column ${styles.main}`}>
      {/* Header */}
      <h1 className="header">Registration Successful</h1>

      {/* Message */}
      <p className={styles.message}>Thank you for your registration</p>

      <Link to="/" className="redirect">
        Click to return to home page.
      </Link>
    </main>
  );
}

export default RegisterSuccessful;
