import React from 'react';
import './App.css';

function App() {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Months of the Year</h1>
        <ul>
          {months.map((month, index) => (
            <li key={index}>{month}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
