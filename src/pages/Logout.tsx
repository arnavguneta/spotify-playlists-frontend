import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Logout = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user === null) navigate('/', { replace: true });
        else {
            fetch(`${process.env.REACT_APP_BACKEND_API}/auth/logout`,
                { credentials: 'include' })
                .then(response => response.json())
                .then(() => {
                    setUser !== null && setUser(null);
                    navigate('/', { replace: true });
                });
        }
    }, []);

    return (
        <div>Logout</div>
    );
};

export default Logout;