import React, { Component } from 'react';
import LodgeDetail from './LodgeDetail';

const lodgeInfo = [
  {
    name: "Denver",
    address: "Rejevik",
    departure: "20 Jul 5:12P",
    arrival: "20 Jul 6:50P",
    url: "",
    note: ""
  },
  {
    name: "Vienna",
    address: "Rome`",
    departure: "20 Jul 5:12P",
    arrival: "20 Jul 6:50P",
    url: "",
    note: ""
  }
]

class LodgeInfo extends Component {
  render() {
    return (
      <div className="border border-dark">
        <p>Lodge Info</p>
        {lodgeInfo.map(info => (
          <LodgeDetail key={info.name} info={info} />
        ))}
      </div>
    );
  }
}

export default LodgeInfo;
