import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Spinner from '../components/Spinner/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const userState = useContext(UserContext);

  useEffect(() => {
    if (userState?.isAuth) navigate('/', { replace: true });
    else {
      setTimeout(() => {
        window.location.replace(
          `${process.env.REACT_APP_BACKEND_API}/auth/login`
        );
      }, 200);
    }
  }, []);
  return (
    <Spinner />
  );
};

export default Login;