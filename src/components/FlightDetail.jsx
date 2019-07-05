import React, { Component } from 'react';

class FlightDetail extends Component {

  render() {
    const {info} = this.props;
    return (
      <div className="p-3">
        <table className="Table" border="1">
          <tbody>
            <tr><td colspan="2">Flight Number {info.flight_number}</td></tr>
            <tr><td>Origin: {info.origin}</td><td>Dest: {info.destination}</td></tr>
            <tr><td>Dept: {info.departure}</td><td>Arrive: {info.arrival}</td></tr>
            <tr><td colspan="2">{info.note}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FlightDetail;
