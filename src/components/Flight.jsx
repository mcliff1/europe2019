import React, { Component } from 'react';

class Flight extends Component {

  // state = {
  //   flight_number: "",
  //   arrival: "",
  //   departure: "",
  //   origin: "",
  //   destination: ""
  // }

  render() {
    const {flightInfo} = this.props;
    return (
      <div className="p-3">
        <table className="Table" border="1">
          <tbody>
            <tr><td colspan="2">Flight Number {flightInfo.flight_number}</td></tr>
            <tr><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>1</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Flight;
