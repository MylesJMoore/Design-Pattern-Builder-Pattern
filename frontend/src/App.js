// App.js

import React from 'react';
import './App.css';
import ProfileBuilder from './ProfileBuilder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile Builder Application</h1>
      </header>
      <main>
        <ProfileBuilder />
      </main>
    </div>
  );
}

export default App;
