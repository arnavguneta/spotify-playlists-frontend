import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Spinner from '../components/Spinner/Spinner';

const Logout = () => {
  const navigate = useNavigate();
  const userState = useContext(UserContext);
  // refactor api
  useEffect(() => {
    if (!userState?.isAuth) navigate('/', { replace: true });
    else {
      setTimeout(() => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/auth/logout`,
          { credentials: 'include' })
          .then(response => response.json())
          .then(() => {
            userState?.setAuth(false);
            navigate('/', { replace: true });
          }).catch(err => console.log('Error logging out', err));
      }, 200);
    }
  }, []);

  return (
    <Spinner />
  );
};

export default Logout;