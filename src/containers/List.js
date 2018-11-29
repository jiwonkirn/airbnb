import React, { Component } from "react";
import ListView from "../components/ListView";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        {
          location: "개인실 바르셀로나",
          title: "SUNSET CAVE HOUSE IN BARSELONA",
          price: 62770
        },
        {
          location: "개인실 제주시",
          title: "SOMETIMES JEJU 201호",
          price: 62770
        },
        {
          location: "개인실 서울",
          title: "Myeong Dong Portabl Wifi #1",
          price: 62770
        },
        {
          location: "아파트 전체 레체",
          title: "In the historical center in Lecce",
          price: 62770
        },
        {
          location: "개인실 바르셀로나",
          title: "SUNSET CAVE HOUSE IN BARSELONA",
          price: 62770
        },
        {
          location: "개인실 제주시",
          title: "SOMETIMES JEJU 201호",
          price: 62770
        },
        {
          location: "개인실 서울",
          title: "Myeong Dong Portabl Wifi #1",
          price: 62770
        },
        {
          location: "아파트 전체 레체",
          title: "In the historical center in Lecce",
          price: 62770
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
