// Libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
// Actions
import { setActiveState } from "../../features/controls/controlsSlice";

function Navbar() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.controls.darkMode);
  const active = useSelector((state) => state.controls.activeState);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const logoutHandler = () => {};

  const onLink = (path) => {
    dispatch(setActiveState(path));
  };

  return (
    <nav className={darkMode ? `${styles.darkNav} ${styles.nav}` : styles.nav}>
      <ul className={styles.links}>
        <li
          className={`${styles.linkItem} ${
            active === "chat" ? styles.active : ""
          }`}
        >
          <Link to="/dashboard/chat" onClick={() => onLink("chat")}>
            Group Chat
          </Link>
        </li>
        <li
          className={`${styles.linkItem} ${
            active === "manageusers" ? styles.active : ""
          }`}
        >
          <Link
            to="/dashboard/manageusers"
            onClick={() => onLink("manageusers")}
          >
            Manage Users
          </Link>
        </li>
        <li
          className={`${styles.linkItem} ${
            active === "managedocuments" ? styles.active : ""
          }`}
        >
          <Link
            to="/dashboard/managedocuments"
            onClick={() => onLink("managedocuments")}
          >
            Manage Documents
          </Link>
        </li>
        <li className={`${styles.linkItem} `} onClick={logoutHandler}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
