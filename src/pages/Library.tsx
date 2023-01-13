import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Library = () => {
  const navigate = useNavigate();
  const userState = useContext(UserContext);

  useEffect(() => {
    if (!userState?.isAuth) navigate('/login?redirect=profile');
  }, []);

  return (
    <>
      <div>Placeholder Playlists/Library Content</div>
      {userState?.isAuth &&
        <div>{userState?.user.display_name}</div>}
    </>
  );
};

export default Library;