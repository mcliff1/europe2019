import React from 'react';
import FlightList from './components/FlightList';
import './App.css';


function App() {
  return (
    <div className="App">
      European Travel Information
      <FlightList />
      <p>Lodging</p>
      <p>Trains</p>
      <p>Activities</p>
    </div>
  );
}

export default App;
