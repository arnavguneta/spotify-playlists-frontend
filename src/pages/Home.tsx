import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [playlistLink, setPlaylistLink] = useState('');
  const userState = useContext(UserContext);

  const onPlaylistSubmit = (e: React.SyntheticEvent) => {
    return e.preventDefault();
  };

  return (
    <>
      {!userState?.isAuth
        &&
        <div className={styles.welcomeMain}>
          <div className={`${styles.section}`}>
            <h1 className={styles.header} id={styles.heading}>
              Analyze Your Spotify Playlists
            </h1>
            <p className={styles.header} id={styles.sub}>
              View details and statistics about any playlist
            </p>
          </div>
          <div className={`${styles.section}`} id={styles.inputSection}>
            <div className={styles.linkSearch}>
              <form onSubmit={onPlaylistSubmit} id={styles.idForm}>
                <input id={styles.linkInput} className={styles.inputs}
                  type="text" value={playlistLink} autoComplete='off'
                  placeholder='Paste a Spotify playlist link' required
                  onChange={(e) => setPlaylistLink(e.target.value)}
                />
                <input id={styles.submit} className={styles.inputs}
                  type="submit" value="Analyze" />
              </form>
            </div>
            <div id={styles.separatorContainer}>
              <div className={styles.separator} />
              <p>OR</p>
              <div className={styles.separator} />
            </div>
            <div className={styles.login}>
              <button id={styles.loginBtn} className={styles.inputs}>
                <NavLink to='/login'>
                  <img src="./images/logo/spotify-white.png" alt="logo" />
                  Login with Spotify
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        || <div>Authorized Home</div>
      }
    </>
  );
};

export default Home;