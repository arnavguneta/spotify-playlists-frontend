import Spinner from '../components/Spinner/Spinner';
import { useTimeout } from '../hooks/useTimeout';
import { useRedirect } from '../hooks/useRedirect';
import { useUserContext } from '../hooks/useUserContext';

const Logout = () => {
  const userState = useUserContext();

  const handleLogout = () => {
    console.log('handlelogout');
    fetch(`${process.env.REACT_APP_BACKEND_API}/auth/logout`,
      { credentials: 'include' })
      .then(response => response.json())
      .then(() => {
        userState?.setAuth(false);
      }).catch(err => console.log('Error logging out', err));
  };

  // redirect home if not logged in
  useRedirect(!userState?.isAuth);
  useTimeout(50, handleLogout);

  return (
    <Spinner />
  );
};

export default Logout;