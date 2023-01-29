import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { TrackItem, TrackResponse } from '../common/types';
// import { useUserContext } from '../hooks/useUserContext';

import styles from './Playlist.module.css';
import { MainTitle } from '../components/UI/Text/MainTitle';
import { Search } from '@mui/icons-material';
import Spinner from '../components/Spinner/Spinner';
import { Input } from '../components/UI/Form/Input';

const TrackCard = ({ trackData }: { trackData: TrackItem }) => {
  const { track } = trackData;
  const artists = track.artists.map(artist => artist.name).join(' ');
  return (
    <li className={styles.card_items}>
      <a href={track.external_urls.spotify} target='_blank'
        style={{ width: '100%' }}>
        <div className={`${styles.card} ${styles.rounded} `}>
          <div className={`${styles.rounded} ${styles.imgContainer}`}>
            <img src={track.album.images[0].url} id={styles.cover} />
          </div>
          <div className={styles.info}>
            <div id={styles.title} title={track.name}>{track.name}</div>
            <div id={styles.author}
              title={artists}>
              By {artists}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export const Playlist = () => {
  // const userState = useUserContext();
  const { playlistId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [filter, setFilter] = useState('');
  const [playlistName, setPlaylistName] = useState('');
  const [tracksData, setTracksData] = useState<Array<TrackItem>>([]);
  // const [offset, setOffset] = useState(0);
  const [isFetchingMore, setFetchingMore] = useState(false);
  let offset = 0;
  let fetching = false;
  useTitle('Spotify Stats | Playlist');

  function isInViewport(e: Element) {
    const rect = e.getBoundingClientRect();
    return (
      Math.floor(rect.bottom) - 200 <=
      (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function handleScroll() {
    const footer = document.querySelector('#footer');
    if (!footer || !isInViewport(footer)|| isFetchingMore || fetching) return;
    setFetchingMore(true);
    fetching = true;
    // eslint-disable-next-line max-len
    fetch(`${process.env.REACT_APP_BACKEND_API}/spotify/playlists/${playlistId}/tracks?offset=${offset}`,
      { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          fetching = false;
          setFetchingMore(false);
        }
        return response.json();
      })
      .then((result: TrackResponse) => {
        setFetchingMore(false);
        setTracksData(prevState => [...prevState, ...result.items]);
        offset = result.offset;
        fetching = false;
      }).catch((error) => console.error(error));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line max-len
    fetch(`${process.env.REACT_APP_BACKEND_API}/spotify/playlists/${playlistId}/tracks`,
      { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          setError(true);
          setLoading(false);
        }
        return response.json();
      })
      .then((result: TrackResponse) => {
        setLoading(false);
        setTracksData(result.items);
        offset = result.offset;
      }).catch((error) => console.error(error));
    // eslint-disable-next-line max-len
    fetch(`${process.env.REACT_APP_BACKEND_API}/spotify/playlists/${playlistId}`,
      { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((result: { name: string }) => {
        setPlaylistName(result.name);
      }).catch((error) => console.error(error));
  }, []);

  const filteredData = (tracksData ?? []).filter(data =>
    data.track.name.toLowerCase().includes(filter) ||
    data.track.album.name.toLowerCase().includes(filter) ||
    data.track.artists.map(artist => artist.name).join(' ')
      .toLowerCase().includes(filter)
  );

  return (
    <>
      {(isError &&
        <p id={styles.alt}>
          No tracks found in this playlist<br />
          If this playlist is private, please login to view details
        </p>)
      }
      {(!isLoading && !isError
        &&
        <div className={styles.libraryContainer}>
          <div className={styles.header}>
            <MainTitle>Playlist {playlistName}</MainTitle>
            <div className={styles.filter}>
              <Search id={styles.search} />
              <Input placeholder='Filter by name, artist, or album'
                value={filter} id='filter' hasIcon dark
                onChange={(e) => setFilter(e.target.value.toLowerCase())} />
            </div>
          </div>
          <ul className={styles.playlistsContainer} >
            {filteredData.length > 0
              && filteredData?.map(track =>
                <TrackCard key={track.track.id} trackData={track} />
              )
              || <p id={styles.alt}>No tracks found</p>
            }
          </ul>
        </div>)}
      {(!isError && isFetchingMore && <p>Fetching more songs</p>)}
      {(!isError && isLoading && <Spinner />)}
    </>
  );
};