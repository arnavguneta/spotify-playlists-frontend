import React, { MouseEventHandler } from 'react';
import './App.css';

function App() {
  const onLogin: MouseEventHandler<HTMLButtonElement> = async () => {
    window.location.replace(`${process.env.REACT_APP_BACKEND_API}/auth/login`);
  };
  const onFetchProfile: MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API}/user`, { credentials: 'include' }
    );
    return await response.json();
  };

  const onLogout: MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API}/auth/logout`,
      { credentials: 'include' }
    );
    return await response.json();
  };

  return (
    <div className="App">
      <img src={`${process.env.PUBLIC_URL}/images/logo/spotify.svg`} />
      <h1>Test</h1>
      <button onClick={onLogin}>Log in</button>
      <button onClick={onFetchProfile}>Fetch profile</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default App;
