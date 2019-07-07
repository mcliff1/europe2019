import React, { Component } from 'react';
import LodgeDetail from './LodgeDetail';

const lodgeInfo = [
  {
    name: "Cocoon Hauptbahnof",
    address: "Mittererstraße 9, 80336 München",
    arrive: "13 Jul",
    depart: "16 Jul",
    phone: "+49 89 548018 99 05",
    maps: "https://www.google.de/maps/place/Hotel+Cocoon+Hauptbahnhof/@48.137959,11.5554048,17z/data=!3m1!4b1!4m9!3m8!1s0x479e75f8ec7a8db3:0x1183cb78b077c535!5m3!1s2018-08-12!4m1!1i2!8m2!3d48.137959!4d11.5575934",
    email: "hauptbahnhof@cocoon-hotels.de",
    checkout: "2P",
    checkin: "11A",
    url: "https://cocoon-hotels.de/en/cocoon-hauptbahnhof.html",
    note: ""
  },
  {
    name: "Imlauer Hotel Pitter",
    address: "Rainestr.6, Salzburg",
    phone: "+43 662 88978807",
    arrive: "16 Jul",
    depart: "17 Jul",
    checkin: "3P",
    checkout: "11A",
    url: "https://imlauer.com/hotel-pitter-salzburg/",
    note: ""
  },
  {
    name: "Vienna Prestige - Opal Suite 17",
    address: "Graben 27-28 1010 Wien",
    phone: " +43 1 996 30 10",
    email: "reception@welcome2vienna.com",
    arrive: "17 Jul",
    depart: "20 Jul",
    checkin: "2P",
    checkout: "11A",
    url: "",
    note: "no checkin counter, private apartment"
  },
  {
    name: "Rome - Stronio",
    address: "Via dell'Esquilino 38",
    phone: "+39 349 644 0888",
    arrive: "20 Jul",
    depart: "24 Jul",
    checkin: "3P",
    checkout: "11A",
    url: "https://www.vrbo.com/8086018ha",
    note: "owner: Guido"
  },
  {
    name: "Florence",
    address: "",
    arrive: "24 Jul",
    depart: "26 Jul",
    checkin: "2P",
    checkout: "11A",
    url: "",
    note: ""
  },
  {
    name: "Munich",
    address: "",
    arrive: "17 Jul",
    depart: "20 Jul",
    checkin: "2P",
    checkout: "11A",
    url: "",
    note: "no checkin counter, private apartment"
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
