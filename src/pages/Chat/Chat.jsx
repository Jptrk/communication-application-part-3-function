// Assets
import close from "../../assets/close-button.svg";
// Libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Chat.module.scss";
import { useSelector, useDispatch } from "react-redux";
// Functions
import { dateFormat } from "../../utils/functions";
// Hooks
import useFetchData from "../../custom/useFetchData";
// Action creators
import { fetchChatList } from "../../features/chatList/chatListSlice";

function Chat() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const dispatch = useDispatch();
  const [data, fetchData, returnFetchedData] = useFetchData();

  /*----------------*/
  /*---- states ----*/
  /*----------------*/
  const darkMode = useSelector((state) => state.controls.darkMode);
  const userToken = useSelector((state) => state.userToken.data);
  const chatList = useSelector((state) => state.chatList.data);
  const userList = useSelector((state) => state.userList.data);

  const [message, setMessage] = useState("");

  /*------------------*/
  /*---- Handlers ----*/
  /*------------------*/
  const inputHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();

    // If message is empty return
    if (!message.trim()) return;

    //New chat
    const newChat = [
      ...chatList,
      {
        email: userToken.email,
        userId: userToken.id,
        message,
        id: Number(new Date()),
        date: new Date(),
      },
    ];

    // Save
    localStorage.setItem("chat", JSON.stringify(newChat));

    // Update state
    dispatch(fetchChatList());
    setMessage("");
  };

  const refreshHandler = () => {
    // Save
    localStorage.removeItem("chat");

    // Update state
    dispatch(fetchChatList());
  };

  /*-------------------*/
  /*---- UseEffect ----*/
  /*-------------------*/
  useEffect(() => {
    dispatch(fetchChatList());
  }, [dispatch]);

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
          {chatList.map((chat, key) => (
            <div className={styles.message} key={key}>
              <span className={styles.dateTime}>
                [{dateFormat(chat.date)}]{" "}
              </span>
              <span className={styles.userName}>
                {returnFetchedData(chat.userId, userList, "id")?.fullName ||
                  "Deleted user"}
                :{" "}
              </span>

              <span className={styles.userMessage}>{chat.message}</span>
            </div>
          ))}
        </div>

        {/* Chat input */}
        <form onSubmit={(e) => sendMessageHandler(e)}>
          <div className={`${styles.chatInputContainer} rounded-corner`}>
            <div className={`${styles.userName}`}>
              <h4>
                {returnFetchedData(userToken.id, userList, "id")?.fullName ||
                  "Deleted user"}
              </h4>
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
                type="button"
                value="Refresh"
                className={`button-small ${styles.sendMessage}`}
                onClick={refreshHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Chat;
