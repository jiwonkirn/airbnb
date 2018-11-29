import React, { Component } from "react";

export default class ListView extends Component {
  render() {
    const { rooms } = this.props;
    return (
      <div>
        <h1>전세계의 숙소</h1>
        {rooms.map(room => (
          <div className="roomInfo">
            <p>{room.location}</p>
            <p>{room.title}</p>
          </div>
        ))}
      </div>
    );
  }
}
