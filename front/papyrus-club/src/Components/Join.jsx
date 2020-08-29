import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Components/Join.module.css"
const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className={styles.joinOuterContainer}>
    <div className={styles.joinInnerContainer}>
        <h1 className={styles.heading}>Join</h1>
        <div><input placeholder="" className={styles.joinInput} type="text" onChange={(e)=>setName(e.target.value)}/></div>
        <div><input placeholder="" className={styles.joinInput} type="text" onChange={(e)=>setRoom(e.target.value)}/></div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
         <button className={styles.button} type="submit">Sign In</button>
        </Link>
    </div>
    </div>
  );
};

export default Chat;
