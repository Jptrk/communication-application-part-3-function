// Libraries
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
// Hooks
import useNavigation from "../../custom/useNavigation";

function Navbar() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const darkMode = useSelector((state) => state.controls.darkMode);
  const active = useSelector((state) => state.controls.activeState);

  const location = useLocation();
  const useActiveNav = useNavigation();

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const logoutHandler = () => {};

  /*-------------------*/
  /*---- useEffect ----*/
  /*-------------------*/
  useEffect(() => {
    // Pass a URL path you want to set active to
    useActiveNav(location.pathname);
  }, [location.pathname]);

  return (
    <nav className={darkMode ? `${styles.darkNav} ${styles.nav}` : styles.nav}>
      <ul className={styles.links}>
        <li
          className={`${styles.linkItem} ${
            active === "chat" ? styles.active : ""
          }`}
        >
          <Link to="/dashboard/chat">Group Chat</Link>
        </li>
        <li
          className={`${styles.linkItem} ${
            active === "manageusers" ? styles.active : ""
          }`}
        >
          <Link to="/dashboard/manageusers">Manage Users</Link>
        </li>
        <li
          className={`${styles.linkItem} ${
            active === "managedocuments" ? styles.active : ""
          }`}
        >
          <Link to="/dashboard/managedocuments">Manage Documents</Link>
        </li>
        <li className={`${styles.linkItem} `} onClick={logoutHandler}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
