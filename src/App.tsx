import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/logout'>Logout</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>

    </div>
  );
}

export default App;
