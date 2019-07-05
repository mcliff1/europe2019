import React, { Component } from 'react';
import TrainDetail from './TrainDetail';

const trainInfo = [
  {
    name: "Denver",
    origin: "Rejevik",
    destination: "",
    departure: "20 Jul 5:12P",
    arrival: "20 Jul 6:50P",
    note: ""
  },
  {
    name: "Vienna",
    origin: "Rejevik",
    destination: "",
    departure: "20 Jul 5:12P",
    arrival: "20 Jul 6:50P",
    note: ""
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
