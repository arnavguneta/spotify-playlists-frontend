import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { basename } from '../utils/constants';
import { useTitle } from '../hooks/useTitle';
import { useUserContext } from '../hooks/useUserContext';
import styles from './Home.module.css';

const Home = () => {
  useTitle('Spotify Stats | Home');

  const [playlistLink, setPlaylistLink] = useState('');
  const userState = useUserContext();

  const onPlaylistSubmit = (e: React.SyntheticEvent) => {
    return e.preventDefault();
  };

  return (

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
            <button id={styles.submit} className={styles.inputs}
              type="submit">Analyze</button>
          </form>
        </div>
        <div id={styles.separatorContainer}>
          <div className={styles.separator} />
          <p>OR</p>
          <div className={styles.separator} />
        </div>
        <div className={styles.login}>
          <button id={styles.loginBtn} className={styles.inputs}>
            {!userState?.isAuth
              && <NavLink to='/login'>
                <img src={`${basename}/images/logo/spotify-white.png`}
                  alt="logo" />
                Login with Spotify
              </NavLink>
              || <NavLink to='/library'>
                <LibraryMusicIcon id={styles.libraryIcon} />
                View Your Library
              </NavLink>
            }

          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;