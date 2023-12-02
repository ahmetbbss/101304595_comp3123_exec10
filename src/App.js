// src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/actions';
import logo from './logo.svg';  // Make sure to have the correct path to your logo
import './App.css';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // In a real app, you'd authenticate with a server and obtain a JWT
    const fakeJWT = 'fake-token';
    dispatch(login(fakeJWT));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React with Redux and JWT Application</h1>
        {isAuthenticated ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
