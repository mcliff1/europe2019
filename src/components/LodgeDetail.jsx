import React, { Component } from 'react';

class LodgeDetail extends Component {

  render() {
    const {info} = this.props;
    return (
      <div className="p-3">
        <table className="Table" border="1">
          <tbody>
            <tr><td colspan="2">Name:r {info.name}</td></tr>
            <tr><td>Address: {info.address}</td><td>1</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LodgeDetail;
