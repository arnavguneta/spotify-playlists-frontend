import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { basename } from '../common/constants';
import { useTitle } from '../hooks/useTitle';
import { useUserContext } from '../hooks/useUserContext';
import styles from './Home.module.css';
import { MainTitle } from '../components/UI/Text/MainTitle';
import { SubTitle } from '../components/UI/Text/SubTitle';
import { Button } from '../components/UI/Form/Button';
import { Input } from '../components/UI/Form/Input';
import { Separator } from '../components/UI/Misc/Separator';

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
        <MainTitle>Analyze Your Spotify Playlists</MainTitle>
        <SubTitle>View details and statistics about any playlist</SubTitle>
      </div>
      <div className={`${styles.section}`} id={styles.inputSection}>
        <div className={styles.linkSearch}>
          <form onSubmit={onPlaylistSubmit} id={styles.idForm}>
            <Input placeholder='Paste a Spotify playlist link'
              value={playlistLink}
              onChange={(e) => setPlaylistLink(e.target.value)} />
            <Button>Analyze</Button>
          </form>
        </div>
        <div id={styles.separatorContainer}>
          <Separator />
          <p>OR</p>
          <Separator />
        </div>
        <div className={styles.login}>
          <NavLink to={`/${userState?.isAuth ? 'library' : 'login'}`}>
            <Button>
              {!userState?.isAuth &&
                <><img src={`${basename}/images/logo/spotify-white.png`}
                  alt="logo" id={styles.loginLogo} />
                  Login with Spotify</>
                || <><LibraryMusicIcon id={styles.libraryIcon} />
                  View Your Library</>
              }
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;