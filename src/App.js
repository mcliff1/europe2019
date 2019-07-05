import React from 'react';
import FlightInfo from './components/FlightInfo';
import LodgeInfo from './components/LodgeInfo';
import './App.css';


function App() {
  return (
    <div className="App">
      European Travel Information
      <FlightInfo />
      <LodgeInfo />
      <p>Trains</p>
      <p>Activities</p>
    </div>
  );
}

export default App;
