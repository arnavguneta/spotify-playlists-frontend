import React, { useState } from 'react';

import styles from './AccountPill.module.css';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../../hooks/useUserContext';

export const AccountPill = () => {
  const [showProfile, setShowProfile] = useState(false);
  const userData = useUserContext();
  console.log(userData);
  const toggleProfile = () => {
    setShowProfile(prevState => !prevState);
  };

  return (
    <div className={styles.profile} onClick={toggleProfile}>
      <div className={styles.avatar} style={{
        backgroundImage:
          `url(${userData?.user?.images[0]?.url || 
            'https://i.imgur.com/pJNRID3.png'})`
      }} />
      <span id={styles.username}>coolkidarnie</span>
      <svg width="11" height="7" viewBox="0 0 11 7" fill="none"
        xmlns="http://www.w3.org/2000/svg" id={styles['dropdown-arrow']}
        className={(showProfile) ? styles['dropdown-active'] : ''}>
        <path d="M0 0.75L5.5 6.25L11 0.75H0Z" fill="#F9F9F9"></path>
      </svg>
      <ul className={
        `${styles['profile-dropdown']} ${styles[`profile-${(showProfile) 
          ? 'active' : 'closed'}`]}`
      }>
        <NavLink to="/profile">
          <li className={styles['profile-item']}>Profile</li>
        </NavLink>
        <NavLink to="/logout">
          <li className={`${styles['profile-item']} ${styles['logout']}`}>
            Logout
          </li>
        </NavLink>
      </ul>
    </div>
  );
};