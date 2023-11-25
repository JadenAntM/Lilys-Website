import React from 'react';
import './App.css'; // Ensure your CSS is correctly linked here
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <ul className="lightrope">
        {/* Insert 50 <li></li> elements here */}
        {[...Array(50)].map((_, i) => <li key={i}></li>)}
      </ul>
      <Profile /> {/* Profile component */}
    </div>
  );
}

export default App;
