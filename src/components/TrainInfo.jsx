import React, { Component } from 'react';
import TrainDetail from './TrainDetail';
import CollapsibleComponent from './CollapsibleComponent'

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
    origin: "Salzburg hbf",
    destination: "Wien hbf",
    departure: "17 Jul 10:12",
    arrival: "17 Jul 13:05",
    name: "Rj691",
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
        <CollapsibleComponent title="Train Info">
        {trainInfo.map(info => (
          <TrainDetail key={info.name} info={info} />
        ))}
        </CollapsibleComponent>
      </div>
    );
  }
}

export default TrainInfo;
