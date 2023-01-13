import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import styles from './Home.module.css';

const Home = () => {
  const [playlistLink, setPlaylistLink] = useState('');
  const userState = useContext(UserContext);

  const onPlaylistSubmit = (event: any) => {
    return event.preventDefault();
  };

  return (
    <>
      {!userState?.isAuth
        &&
        <div className={styles.welcomeMain}>
          <div className={`${styles.section}`}>
            <h1 className={styles.heading}>Analyze Your Spotify Playlists</h1>
            <p className={`${styles.heading} ${styles.sub}`}>
              View details and statistics about any playlist
            </p>
          </div>
          <div className={`${styles.section}`}>
            <div className={styles.listSearch}>
              <form onSubmit={onPlaylistSubmit} id={styles.idForm}>
                <input type="text" value={playlistLink}
                  placeholder='Paste a Spotify playlist link'
                  onChange={(e) => setPlaylistLink(e.target.value)} />
                <input type="submit" value="Analyze" />
              </form>
            </div>
            <div className={styles.separator}>

            </div>
            <div className={styles.login}>

            </div>
          </div>
        </div>
        || <div>Authorized Home</div>
      }
    </>
  );
};

export default Home;