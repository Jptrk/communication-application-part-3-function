// Libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <main className={`${styles.main} flex-container-column `}>
      {/* Header */}
      <h1>Welcome to Users Module</h1>

      {/* Existing Users */}
      <div className="flex-container-column">
        <h3 className="header">Existing Users</h3>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>

      {/* New Users */}
      <div className="flex-container-column">
        <h3 className="header">New Users</h3>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </main>
  );
}

export default Welcome;
