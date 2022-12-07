import React, { MouseEventHandler } from 'react';
import './App.css';

function App() {
  const onLogin: MouseEventHandler<HTMLButtonElement> = async () => {
    window.location.replace('http://localhost:3000/api/v1/spotify/auth/login');
  };

  const onFetchProfile: MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await fetch(
      'http://localhost:3000/api/v1/spotify/user');
    return await response.json();
  };

  const onLogout: MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await fetch(
      'http://localhost:3000/api/v1/spotify/auth/logout');
    return await response.json();
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <button onClick={onLogin}>Log in</button>
      <button onClick={onFetchProfile}>Fetch profile</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default App;
