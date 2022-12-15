import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) navigate('/login?redirect=profile');
  }, []);

  return (
    <>
      <div>Placeholder Profile Content</div>
      {user !== null &&
        <div>{user.display_name}</div>}
    </>
  );
};

export default Profile;