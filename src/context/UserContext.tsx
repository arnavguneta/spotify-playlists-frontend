import React, { createContext, useState, useEffect } from 'react';
import { Props, UserContext, UserContextValue } from '../common/types';
// import api from '../api/api';

const defaultUser: UserContext = {
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

const UserCtx = createContext<UserContextValue | null>(null);

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [isAuth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    // const getUser = async () => {
    //   const user = await api.getUser();
    //   console.log(user);
    //   // setUser(user);
    //   // setAuth(true);
    // };    
    // getUser();
    fetch(`${process.env.REACT_APP_BACKEND_API}/user`,
      { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((result) => {
        setUser(result);
        setAuth(true);
      }).catch((error) => console.error(error));
  }, []);

  return (
    <UserCtx.Provider value={{ user, setUser, isAuth, setAuth }}>
      {children}
    </UserCtx.Provider>
  );
};

export { UserCtx, UserContextProvider };