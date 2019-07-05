import React from 'react';
import FlightInfo from './components/FlightInfo';
import LodgeInfo from './components/LodgeInfo';
import TrainInfo from './components/TrainInfo';
import ActivityInfo from './components/ActivityInfo';
import './App.css';


function App() {
  return (
    <div className="App">
      European Travel Information
      <FlightInfo />
      <LodgeInfo />
      <TrainInfo />
      <ActivityInfo />
    </div>
  );
}

export default App;
