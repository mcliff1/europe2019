import React, { Component } from 'react';

class LodgeDetail extends Component {

  render() {
    const {info} = this.props;
    return (
      <div className="p-3">
        <table className="Table" border="1">
          <tbody>
            <tr><td colspan="2"><a href={info.url}>{info.name}</a></td><td>{info.arrive} - {info.depart}</td></tr>
            <tr><td colspan="2">{info.address}</td><td>{info.phone}</td></tr>
            <tr><td colspan="2">{info.note}</td><td>in:{info.checkin}, out: {info.checkout}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LodgeDetail;
