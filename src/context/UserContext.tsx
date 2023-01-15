import React,
{ createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { UserContextType } from '../@types/UserContext';
import api from '../api/api';

interface Props {
  children: React.ReactNode;
}

type UserContextValue = {
  user: UserContextType,
  setUser: Dispatch<SetStateAction<UserContextType>>,
  isAuth: boolean,
  setAuth: Dispatch<SetStateAction<boolean>>
};

const defaultUser: UserContextType = {
  country: '',
  display_name: '',
  email: '',
  explicit_content: {},
  external_urls: {},
  followers: {},
  href: '',
  id: '',
  images: [],
  product: '',
  type: '',
  uri: ''
};

const UserContext = createContext<UserContextValue | null>(null);

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [isAuth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      const user = await api.getUser();
      console.log(user);
      // setUser(user);
      // setAuth(true);
    };    
    getUser();
    // fetch(`${process.env.REACT_APP_BACKEND_API}/user`,
    //   { credentials: 'include' })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error(`${response.status} - ${response.statusText}`);
    //     }
    //     return response.json();
    //   })
    //   .then((result) => {
    //     setUser(result);
    //     setAuth(true);
    //   }).catch((error) => console.error(error));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isAuth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };