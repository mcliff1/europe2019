import React, { Component } from 'react';
import TrainDetail from './TrainDetail';

const trainInfo = [
  {
    name: "Firenze to Milano",
    departure: "26 Jul 7:30A",
    arrival: "26 Jul 9:10A",
    note: "Frecciarossa 9502"
  },
  {
    name: "Milano Centrale to MXP",
    departure: "26 Jul 9:25A",
    arrival: "26 Jul 10:16A",
    note: "Regionale 24922"
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
