import React, { Component } from 'react';
import ReserveForm from '../containers/ReserveForm';
import Reserve from '../containers/Reserve';

export default class ReservePage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return (
      <div>
        <Reserve roomId={roomId} />
      </div>
    );
  }
}
