import { useTitle } from '../hooks/useTitle';
import { useRedirect } from '../hooks/useRedirect';
import { useUserContext } from '../hooks/useUserContext';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';
import { PlaylistItems } from '../common/types';

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
        console.log(result);
        setPlaylistsData(result);
      }).catch((error) => console.error(error));
  }, []);

  return (
    <>
      {userState?.isAuth && !isLoading
        &&
        <div>
          {userState?.user.display_name}
          {playlistsData?.map(playlist => {
            return (
              <div key={playlist.id}>{playlist.name}</div>
            );
          })}
        </div>
        || <Spinner />}
    </>
  );
};

export default Library;