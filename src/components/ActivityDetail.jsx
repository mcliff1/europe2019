import React, { Component } from 'react';

class ActivityDetail extends Component {

  render() {
    const {info} = this.props;
    return (
      <div className="p-3">
        <table className="Table" border="1">
          <tbody>
            <tr><td colspan="2"><a href={info.url}>{info.title}</a></td></tr>
            <tr><td>{info.location}</td><td>{info.date}</td></tr>
            <tr><td colspan="2">{info.note}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActivityDetail;
