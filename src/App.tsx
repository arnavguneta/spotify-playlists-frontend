import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Library from './pages/Library';
import Profile from './pages/Profile';
import { Playlist } from './pages/Playlist';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Lost404 } from './pages/404';

import SideBar from './components/MenuBar/SideBar/SideBar';
import NavBar from './components/MenuBar/NavBar/NavBar';
import Spinner from './components/Spinner/Spinner';
import { Disclaimer } from './components/Footer/Disclaimer';

import { useTimeout } from './hooks/useTimeout';

import styles from './App.module.css';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [toggleSidebar, setToggleSidbar] = useState(false);

  const handleSidebarToggle = () => {
    setToggleSidbar(prevState => !prevState);
  };

  useTimeout(50, () => setLoading(false));
  return (
    <div className={styles.app}>
      {isLoading &&
        <Spinner />
        ||
        <>
          <SideBar toggle={toggleSidebar} />
          <div className={`${styles.contentContainer} 
            ${toggleSidebar ? styles.closed : ''}`}>
            <NavBar toggleSidebar={toggleSidebar}
              handleSidebarToggle={handleSidebarToggle} />
            <section className={styles.mainContent}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/library' element={<Library />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path="/playlists">
                  <Route path=':playlistId' element={<Playlist />} />
                </Route>
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/*' element={<Lost404 />} />
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
