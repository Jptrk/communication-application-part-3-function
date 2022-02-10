// Libraries
import styles from "../../pages/Share/Share.module.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Functions
import { filterSharedUser } from "../../utils/functions";

function Dropdown({ selectedDropdown, selectHandler, selectedUpload }) {
  /*----------------*/
  /*---- States ----*/
  /*----------------*/
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const [options, setOptions] = useState([]);

  const userToken = useSelector((state) => state.userToken.data);
  const userList = useSelector((state) => state.userList.data);
  const darkMode = useSelector((state) => state.controls.darkMode);

  /*-------------------*/
  /*---- UseEffect ----*/
  /*-------------------*/
  useEffect(() => {
    // Filter shared user
    const filteredUsers = filterSharedUser(selectedUpload.sharedUser, userList);
    const { notSharedUsers } = filteredUsers;

    setOptions(notSharedUsers);
  }, [userList, selectedUpload]);

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const toggleDropdown = () => {
    setDropDownToggle((prev) => !prev);
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      {/* Header */}
      <div className={`${styles.dropdownHeader} rounded-corner`}>
        {/* Selected user */}
        <div className={styles.selected}>
          {selectedDropdown.fullName || "Select User"}
        </div>

        {/* Arrow icon */}
        <span className={`${styles.arrowDownContainer} rounded-corner`}>
          <span
            className={styles.arrowDown}
            style={darkMode ? { borderTopColor: "white" } : {}}
          ></span>
        </span>
      </div>

      {/* UserList */}
      {dropDownToggle && options.length > 1 && (
        <ul
          className={`${styles.dropdownList} rounded-corner`}
          style={darkMode ? { backgroundColor: "#18191a" } : {}}
        >
          {/* Data will be incremented here | Options */}
          {options.map(
            (user, key) =>
              userToken.id !== user.id && (
                <li
                  className={styles.option}
                  key={key}
                  onClick={() => selectHandler(user)}
                >
                  {user.fullName}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
