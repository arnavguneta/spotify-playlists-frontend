import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Login() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    // TODO: if logged in redirect back to '/'
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
}