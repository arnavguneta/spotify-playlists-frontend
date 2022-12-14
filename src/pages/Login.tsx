import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user !== null) navigate('/', { replace: true });
    else {
      window.location.replace(
        `${process.env.REACT_APP_BACKEND_API}/auth/login`
      );
    }
  }, []);
  return (
    <div>Login</div>
  );
};

export default Login;