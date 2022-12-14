import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import MenuBar from './components/MenuBar/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Playlists from './pages/Playlists';
import Profile from './pages/Profile';

function App() {
  return (
    <div className={styles.app}>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/playlists' element={<Playlists />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>

    </div>
  );
}

export default App;
