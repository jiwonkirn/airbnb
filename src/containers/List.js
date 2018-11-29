import React, { Component } from "react";
import ListView from "../components/ListView";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        {
          location: "개인실 바르셀로나",
          title: "SUNSET CAVE HOUSE IN BARSELONA"
        },
        {
          location: "개인실 제주시",
          title: "SOMETIMES JEJU 201호"
        },
        {
          location: "개인실 서울",
          title: "Myeong Dong Portabl Wifi #1"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <ListView {...this.state} />
      </div>
    );
  }
}
