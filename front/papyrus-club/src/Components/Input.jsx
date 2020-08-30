import React from "react";

import styles from "../Styles/Components/Input.module.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className={styles.form}>
    <input
      className={styles.input}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className={styles.sendButton} onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
