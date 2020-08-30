import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import styles from '../Styles/Components/Messages.module.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className={styles.messages}>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;