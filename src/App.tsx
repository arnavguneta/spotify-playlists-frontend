import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SideBar from './components/MenuBar/SideBar/SideBar';
import NavBar from './components/MenuBar/NavBar/NavBar';
import Spinner from './components/Spinner/Spinner';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Library from './pages/Library';
import Profile from './pages/Profile';

import styles from './App.module.css';
import { useTimeout } from './hooks/useTimeout';
import { Disclaimer } from './components/Footer/Disclaimer';

function App() {
  const [state, setState] = useState('loading');

  useTimeout(50, () => setState('base'));

  return (
    <div className={styles.app}>
      {state === 'loading' &&
        <Spinner />
        ||
        <>
          <SideBar />
          <div className={styles.contentContainer}>
            <NavBar />
            <section className={styles.mainContent}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/library' element={<Library />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
              </Routes>
            </section>
            <Disclaimer />
          </div>
        </>
      }
    </div>
  );
}

export default App;
