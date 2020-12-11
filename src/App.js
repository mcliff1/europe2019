import React from 'react';
import FlightInfo from './components/FlightInfo';
import LodgeInfo from './components/LodgeInfo';
import TrainInfo from './components/TrainInfo';
import ActivityInfo from './components/ActivityInfo';
import './App.css';


function App() {
  return (
    <div className="App">
      <p>2019 and 2021 European Travel Information</p>
      <FlightInfo />
      <LodgeInfo />
      <TrainInfo />
      <ActivityInfo />
    </div>
  );
}

export default App;
