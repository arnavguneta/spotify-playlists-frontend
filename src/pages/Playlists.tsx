import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Playlists = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) navigate('/login?redirect=profile');
  }, []);

  return (
    <>
      <div>Playlists</div>
      {user !== null &&
        <div>{user.display_name}</div>}
    </>
  );
};

export default Playlists;