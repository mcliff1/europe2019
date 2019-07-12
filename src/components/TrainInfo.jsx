import React, { Component } from 'react';
import TrainDetail from './TrainDetail';

const trainInfo = [
  {
    origin: "Muenchen Hauptbahnof",
    destination: "Salzburg, Au",
    departure: "16 Jul",
    arrival: "16 Jul",
    name: "",
    note: "hourly trains depart (2h)"
  },
  {
    origin: "Salzburg",
    destination: "Wien",
    departure: "17 Jul",
    arrival: "17 Jul",
    name: "",
    note: "hourly trains depart (2,5h)"
  },
  {
    origin: "Roma",
    destination: "Firenze",
    departure: "24 Jul",
    arrival: "24 Jul",
    name: "(about 1,5h)"
  },
  {
    origin: "Firenze",
    destination: "Milano Centrale",
    departure: "26 Jul 7:30A",
    arrival: "26 Jul 9:10A",
    name: "Frecciarossa 9502",
    note: "Prima Classe"
  },
  {
    origin: "Milano Centrale",
    destination: "Milan Airport (MXP)",
    departure: "26 Jul 9:25A",
    arrival: "26 Jul 10:16A",
    name: "Regionale 24922"
  }
]

class TrainInfo extends Component {
  render() {
    return (
      <div className="border border-dark">
        <p>Train Info</p>
        {trainInfo.map(info => (
          <TrainDetail key={info.name} info={info} />
        ))}
      </div>
    );
  }
}

export default TrainInfo;
