import React, { Component } from 'react';
import ActivityDetail from './ActivityDetail';
import CollapsibleComponent from './CollapsibleComponent'

const trainInfo = [
  {
    name: "Denver",
    date: "20 Jul 6:50P",
    note: "",
    url: ""
  },
  {
    name: "Munich General Info",
    date: "20 Jul 6:50P",
    note: "",
    url: "https://www.muenchen.de/int/en.html"
  },
  {
    name: "Munich Hauptbahnof",
    date: "20 Jul 6:50P",
    note: "",
    url: "  https://www.bahnhof.de/bahnhof-en/Muenchen_Hbf-3812254"
  }


]

class ActivityInfo extends Component {
  render() {
    return (
      <div className="border border-dark">
      <CollapsibleComponent title="Activity Info">
        {trainInfo.map(info => (
          <ActivityDetail key={info.name} info={info} />
        ))}
        </CollapsibleComponent>
      </div>
    );
  }
}

export default ActivityInfo;
