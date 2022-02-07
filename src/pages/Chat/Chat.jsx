// Assets
import close from "../../assets/close-button.svg";
// Libraries
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Chat.module.scss";
import { useSelector, useDispatch } from "react-redux";

function Chat() {
  const darkMode = useSelector((state) => state.controls.darkMode);

  /*----------------*/
  /*---- states ----*/
  /*----------------*/
  const [message, setMessage] = useState("");

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const inputHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = () => {};
  const refreshHandler = () => {};

  return (
    <main className={styles.main}>
      {/* Main content */}
      <div className={`${styles.chatContainer} rounded-corner`}>
        {/* Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarLabel}>
            <h4>Group Chat</h4>
          </div>
          <div className={styles.close}>
            <Link to="/">
              {!darkMode && <img src={close} alt="close" width="28" />}
              {darkMode && <i className="fa fa-window-close-o"></i>}
            </Link>
          </div>
        </div>
        {/* Message container */}
        <div className={`${styles.messageContainer} rounded-corner`}>
          {/* Render data */}
        </div>

        {/* Chat input */}
        <div className={`${styles.chatInputContainer} rounded-corner`}>
          <div className={`${styles.userName}`}>
            <h4>User Name</h4>
          </div>
          <div className={`${styles.inputMessage}`}>
            <input
              type="text"
              name="message"
              className={styles.messageInput}
              onInput={(e) => inputHandler(e)}
              value={message}
            />
          </div>
          <div className={styles.actions}>
            <input
              type="submit"
              value="Send"
              className={`button-small ${styles.sendMessage}`}
              onClick={sendMessageHandler}
            />
            <input
              type="submit"
              value="Refresh"
              className={`button-small ${styles.sendMessage}`}
              onClick={refreshHandler}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Chat;
