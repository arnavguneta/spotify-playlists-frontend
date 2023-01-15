import Spinner from '../components/Spinner/Spinner';
import { useTimeout } from '../hooks/useTimeout';
import { useRedirect } from '../hooks/useRedirect';
import { useUserContext } from '../hooks/useUserContext';

const Login = () => {
  const userState = useUserContext();

  // redirect home if logged in
  useRedirect(!!userState?.isAuth);
  useTimeout(50, () => window.location.replace(
    `${process.env.REACT_APP_BACKEND_API}/auth/login`));  
  
  return (
    <Spinner />
  );
};

export default Login;