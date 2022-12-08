import React,
{ createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { UserContextType } from '../@types/UserContext';

interface Props {
    children: React.ReactNode;
}

type UserContextValue = {
    user: UserContextType | null,
    setUser: Dispatch<SetStateAction<UserContextType | null>>
                | null 
};

const userCtxDefault: UserContextValue = {
    user: null,
    setUser: null
};

const UserContext = createContext<UserContextValue>(userCtxDefault);

const UserContextProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser ] = useState(userCtxDefault.user);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/user`,
            { credentials: 'include' })
            .then((response) => response.json())
            .then((result) => result.error === undefined && setUser(result))
            .catch(() => console.log('Not logged in'));
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };