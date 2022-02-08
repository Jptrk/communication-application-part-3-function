// Libraries
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
// Hooks
import useNavigation from "../../custom/useNavigation";
import usePathname from "../../custom/usePathname";
import { useAuth } from "../../custom/useAuth";

function Navbar() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const darkMode = useSelector((state) => state.controls.darkMode);
  const active = useSelector((state) => state.controls.activeState);
  const auth = useAuth();

  // Update active nav
  const useActiveNav = useNavigation();
  const pathName = usePathname(2);
  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const [pageName, setPageName] = useState();

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const logoutHandler = () => {
    auth.logout();
  };

  /*-------------------*/
  /*---- useEffect ----*/
  /*-------------------*/
  useEffect(() => {
    setPageName(pathName);
  }, [pathName]);

  useEffect(() => {
    // Pass a URL path you want to set active to
    useActiveNav(pageName);
  }, [pageName]);

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
