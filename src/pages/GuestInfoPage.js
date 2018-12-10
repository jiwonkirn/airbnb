import React, { Component } from 'react';
import ReserveNav from '../components/ReserveNav';
import GuestInfo from '../containers/GuestInfo';

export default class GuestInfoPage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return (
      <div>
        <ReserveNav />
        <GuestInfo roomId={roomId} />
      </div>
    );
  }
}
