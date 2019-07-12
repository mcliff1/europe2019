import React, { Component } from 'react';
import ActivityDetail from './ActivityDetail';
import CollapsibleComponent from './CollapsibleComponent'

const activityInfo = [
  {
    title: "Munich General Info",
    location: "Munich",
    date: "13 Jul",
    note: "",
    url: "https://www.muenchen.de/int/en.html"
  },
  {
    title: "Munich Airport",
    location: "Munich",
    date: "13 Jul",
    note: "",
    url: "https://www.raileurope-world.com/place/munich-flughafen-international"
  },
  {
    title: "Munich Hauptbahnof",
    location: "Munich",
    date: "13 Jul",
    note: "",
    url: "https://www.bahnhof.de/bahnhof-en/Muenchen_Hbf-3812254"
  },
  {
    title: "Salzburg",
    location: "Salzburg",
    date: "16 Jul",
    note: "",
    url: ""
  },
  {
    title: "Vienna",
    location: "Vienna",
    date: "17 Jul",
    note: "",
    url: ""
  },
  {
    title: "Haptsburg Palace",
    location: "Vienna",
    date: "17 Jul",
    note: "",
    url: ""
  },
  {
    title: "Rome",
    location: "Rome",
    date: "20 Jul",
    note: "",
    url: ""
  },
  {
    title: "Florence",
    location: "Florence",
    date: "24 Jul",
    note: "",
    url: ""
  }


]

class ActivityInfo extends Component {
  render() {
    return (
      <div className="border border-dark">
      <CollapsibleComponent title="Activity Info">
        {activityInfo.map(info => (
          <ActivityDetail key={info.name} info={info} />
        ))}
        </CollapsibleComponent>
      </div>
    );
  }
}

export default ActivityInfo;
