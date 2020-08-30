import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import styles from "../Styles/Components/ChatWindow.module.css";
import Navbar from "./Navbar";
import Input from "./Input"
import InfoBar from "./InfoBar"
import Messages from "./Messages"
import TextContainer from "./TextContainer";
import { Container } from "react-bootstrap";
import {useLocation} from 'react-router-dom';

let socket;

const ChatWindow = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:3001";
  let location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    // console.log(name, room)
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT], location.search);

  useEffect(() => {
    socket.on("message", message => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", (message, () => setMessage("")));
      console.log(messages)
    }
  };

  return (
    <div className="container mt-5">
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
        <TextContainer users={users}/>
    </div>
  );
};

export default ChatWindow;
