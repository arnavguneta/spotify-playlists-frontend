import { useTitle } from '../hooks/useTitle';
import { useRedirect } from '../hooks/useRedirect';
import { useUserContext } from '../hooks/useUserContext';

const Profile = () => {
  const userState = useUserContext();

  useTitle('Spotify Stats | Library');
  useRedirect(!userState?.isAuth, '/login?redirect=profile', false);

  return (
    <>
      <div>Placeholder Profile Content</div>
      {userState?.isAuth &&
        <div>{userState?.user.display_name}</div>}
    </>
  );
};

export default Profile;