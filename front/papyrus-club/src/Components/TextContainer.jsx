import React from 'react';

import onlineIcon from '../Images/Icons/onlineIcon.png';

import styles from '../Styles/Components/TextContainer.module.css';

const TextContainer = ({ users }) => (
  <div className={styles.textContainer}>
    <div>
    </div>
    {
      users
        ? (
          <div>
            <h1>Users:</h1>
            <div className={styles.activeContainer}>
              <h2>
                {users.map(({name}) => (
                  <div key={name} className={styles.activeItem}>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;