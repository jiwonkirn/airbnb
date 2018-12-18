import React, { Component } from 'react';
import ReserveNav from '../components/ReserveNav';
import GuestInfo from '../containers/GuestInfo';
import { Helmet } from 'react-helmet';

export default class GuestInfoPage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return (
      <div>
        <Helmet>
          <title>{'게스트 정보 안내 - FASTBNB'}</title>
        </Helmet>
        <ReserveNav />
        <GuestInfo roomId={roomId} />
      </div>
    );
  }
}
