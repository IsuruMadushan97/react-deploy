import React from 'react';
import profileImage from './img/profile-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Blood donation website testing</h1>
      <h2>Author : Isuru madushan</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
