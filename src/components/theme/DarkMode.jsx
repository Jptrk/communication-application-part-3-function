// Libraries
import styles from "./DarkMode.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
// Actions
import { toggleTheme } from "../../features/controls/controlsSlice";

function DarkMode() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const dispatch = useDispatch();

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const toggleHandler = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className={styles.theme} onClick={toggleHandler}>
      <i className="fa fa-moon-o"></i>
    </div>
  );
}

export default DarkMode;
