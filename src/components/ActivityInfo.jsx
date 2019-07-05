import React, { Component } from 'react';
import ActivityDetail from './ActivityDetail';

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

class ActivityInfo extends Component {
  render() {
    return (
      <div className="border border-dark">
        <p>Activity Info</p>
        {trainInfo.map(info => (
          <ActivityDetail key={info.name} info={info} />
        ))}
      </div>
    );
  }
}

export default ActivityInfo;
