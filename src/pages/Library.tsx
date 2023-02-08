import React from 'react';
import { useTitle } from '../hooks/useTitle';
import { useRedirect } from '../hooks/useRedirect';
import { useUserContext } from '../hooks/useUserContext';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';
import { PlaylistItem, Response } from '../common/types';

import styles from './Library.module.css';
import { MainTitle } from '../components/UI/Text/MainTitle';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/UI/Form/Input';
import { Search } from '@mui/icons-material';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const PlaylistCard = ({ playlist }: { playlist: PlaylistItem }) => {
  const navigate = useNavigate();
  return (
    <li className={styles.card_items}
      onClick={() => navigate(`/playlists/${playlist.id}`)}>
      <div className={`${styles.card} ${styles.rounded} `}>
        <div className={`${styles.rounded} ${styles.imgContainer}`}>
          <img src={playlist.images[0].url} id={styles.cover} />
        </div>
        <div className={styles.info}>
          <div id={styles.title} title={playlist.name}>{playlist.name}</div>
          <div id={styles.author}
            title={playlist.owner?.display_name}>
            By {playlist.owner?.display_name}
          </div>
        </div>
      </div>
    </li>
  );
};

const Library = () => {
  const userState = useUserContext();
  const [isLoading, setLoading] = useState(true);
  const [playlistsData, setPlaylistsData] = useState<Array<PlaylistItem>>([]);
  const [filter, setFilter] = useState('');
  const endpoint = 'spotify/me/playlists';

  function updateData(data: Array<PlaylistItem>) {
    setPlaylistsData(prevState => [...prevState, ...data]);
  }
  useInfiniteScroll<PlaylistItem>(updateData, endpoint);
  useTitle('Spotify Stats | Library');
  useRedirect(!userState?.isAuth, '/login?redirect=profile', false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/${endpoint}`,
      { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((result: Response<PlaylistItem>) => {
        setLoading(false);
        setPlaylistsData(result.items);
      }).catch((error) => console.error(error));
  }, []);

  const filteredData = (playlistsData ?? []).filter(data =>
    data.name.toLowerCase().includes(filter) ||
    data.owner?.display_name.toLowerCase().includes(filter)
  );

  return (
    <>
      {(userState?.isAuth && !isLoading)
        &&
        <div className={styles.libraryContainer}>
          <div className={styles.header}>
            <MainTitle>Library</MainTitle>
            <div className={styles.filter}>
              <Search id={styles.search} />
              <Input placeholder='Filter by playlist name or author'
                value={filter} id='filter' dark hasIcon
                onChange={(e) => setFilter(e.target.value.toLowerCase())} />
            </div>
          </div>
          <ul className={styles.playlistsContainer}>
            {filteredData.length > 0
              && filteredData?.map(playlist => 
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                )
              || <p id={styles.alt}>No playlists found</p>
            }
          </ul>
        </div>
        || <Spinner />}
    </>
  );
};

export default Library;