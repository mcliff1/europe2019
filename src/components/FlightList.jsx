import React, { Component } from 'react';
import Flight from './Flight';

const flightInfo = [
  {
    flight_number: 1,
    origin: "Rome",
    destination: "Pais",
    departure: "20 Jul 5:12P",
    arrival: "20 Jul 6:50P",
    note: ""
  },
  {
    flight_number: 2,
    origin: "Rome",
    destination: "Pais",
    departure: "20 Jul 5:12P",
    arrival: "20 Jul 6:50P",
    note: ""
  }
]

class FlightList extends Component {
  render() {
    return (
      <div className="border border-dark">
        <p>List of Flights</p>
        {flightInfo.map(flight => (
          <Flight key={flight.flight_number} flightInfo={flight} />
        ))}
      </div>
    );
  }
}

export default FlightList;
