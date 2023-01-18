import { useTitle } from '../hooks/useTitle';
import { useRedirect } from '../hooks/useRedirect';
import { useUserContext } from '../hooks/useUserContext';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';
import { PlaylistItems } from '../common/types';

import styles from './Library.module.css';

const Library = () => {
  const userState = useUserContext();
  const [isLoading, setLoading] = useState(true);
  const [playlistsData, setPlaylistsData] = useState<Array<PlaylistItems>>();

  useTitle('Spotify Stats | Library');
  useRedirect(!userState?.isAuth, '/login?redirect=profile', false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/user/playlists`,
      { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((result: Array<PlaylistItems>) => {
        setLoading(false);
        setPlaylistsData(result);
      }).catch((error) => console.error(error));
  }, []);

  return (
    <>
      {userState?.isAuth && !isLoading
        &&
        <div className={styles.libraryContainer}>
          <h1 className={styles.header} id={styles.heading}>
            Library
          </h1>
          <div className={styles.playlistsContainer}>
            {playlistsData?.map(playlist => {
              return (
                <div key={playlist.id}
                  className={`${styles.rounded} ${styles.card}`}>
                  <div className={`${styles.rounded} ${styles.imgContainer}`}>
                    <img src={playlist.images[0].url} id={styles.cover} />
                  </div>
                  <div className={`${styles.info}`}>
                    <div id={styles.title} title={playlist.name}>
                      {playlist.name}
                    </div>
                    <div id={styles.author}
                      title={playlist.owner?.display_name}>
                      By {playlist.owner?.display_name}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        || <Spinner />}
    </>
  );
};

export default Library;