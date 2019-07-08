import React, { Component } from 'react';
import FlightDetail from './FlightDetail';

const flightInfo = [
  {
    flight_number: "FI674",
    origin: "Denver",
    destination: "Reykjavik",
    departure: "12 Jul 7:50P",
    arrival: "13 Jul 9:15A",
    tracker: "https://flightaware.com/live/flight/ICE674",
    note: "seats 11C-F"
  },
  {
    flight_number: "FI530",
    origin: "Reykjavik",
    destination: "Munich",
    departure: "13 Jul 10:45A",
    arrival: "13 Jul 4:25P",
    note: "seats 12A-D",
    tracker: "https://flightaware.com/live/flight/ICE530"
  },
  {
    flight_number: "Iberia 5638/Vueling 6687",
    origin: "Vienna",
    destination: "Rome",
    departure: "20 Jul 5:12P",
    arrival: "20 Jul 6:50P",
    note: "seats 17A-D  /luggage",
    tracker: "https://flightaware.com/live/flight/IBE5638"
  },
  {
    flight_number: "LH1857",
    origin: "Milan",
    destination: "Munich",
    departure: "26 Jul 12:25P",
    arrival: "26 Jul 1:35P",
    tracker: "https://flightaware.com/live/flight/DLH1857",
    note: "seats 11C-F"
  },
  {
    flight_number: "FI533",
    origin: "Munich",
    destination: "Reykjavik",
    departure: "27 Jul 2:05P",
    arrival: "27 Jul 4:00P",
    tracker: "https://flightaware.com/live/flight/ICE533",
    note: "terminal 1; seats 12A-D"
  },
  {
    flight_number: "FI671",
    origin: "Reykjavik",
    destination: "Denver",
    departure: "27 Jul 4:45P",
    arrival: "27 Jul 6:40P",
    tracker: "https://flightaware.com/live/flight/ICE671",
    note: "seats 12C-F"
  }
]

class FlightInfo extends Component {
  render() {
    return (
      <div className="border border-dark">
        <p>List of Flights</p>
        {flightInfo.map(flight => (
          <FlightDetail key={flight.flight_number} info={flight} />
        ))}
      </div>
    );
  }
}

export default FlightInfo;
