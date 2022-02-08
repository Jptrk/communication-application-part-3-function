// Libraries
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
// Hooks
import useNavigation from "../../custom/useNavigation";
import usePathname from "../../custom/usePathname";

function Navbar() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const darkMode = useSelector((state) => state.controls.darkMode);
  const active = useSelector((state) => state.controls.activeState);

  // Update active nav
  const useActiveNav = useNavigation();
  // Format page path based on index
  const pageName = usePathname(2);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const logoutHandler = () => {};

  /*-------------------*/
  /*---- useEffect ----*/
  /*-------------------*/
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
