import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SideBar from './components/MenuBar/SideBar';
import NavBar from './components/MenuBar/NavBar';
import Spinner from './components/Spinner/Spinner';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Library from './pages/Library';
import Profile from './pages/Profile';

import styles from './App.module.css';

function App() {
  const [state, setState] = useState('loading');

  useEffect(() => {
    setTimeout(() => {
      setState('base');
    }, 600);
  }, []);

  return (
    <div className={styles.app}>
      {state === 'loading' &&
        <Spinner />
        ||
        <>
          <SideBar />
          <div className={styles.contentContainer}>
            <NavBar />
            <div className={styles.mainContent}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/library' element={<Library />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;
