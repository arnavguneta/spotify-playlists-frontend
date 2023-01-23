import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
  const [playlistLink, setPlaylistLink] = useState('');
  const userState = useUserContext();
  const navigate = useNavigate();

  const onPlaylistSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const id = playlistLink.trim().split('playlist/')[1].split('?')[0];
    navigate(`/playlists/${id}`);
  };

  useTitle('Spotify Stats | Home');

  return (
    <div className={styles.welcomeMain}>
      <div className={`${styles.section}`}>
        <MainTitle center>Analyze Your Spotify Playlists</MainTitle>
        <SubTitle center>
          View details and statistics about any playlist
        </SubTitle>
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