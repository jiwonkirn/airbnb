import React, { Component } from 'react';
import ReserveForm from '../containers/ReserveForm';
import Reserve from '../containers/Reserve';
import { Helmet } from 'react-helmet';

export default class ReservePage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return (
      <div>
        <Helmet>
          <title>{'숙소 이용규칙 안내 - FASTBNB'}</title>
        </Helmet>
        <Reserve roomId={roomId} />
      </div>
    );
  }
}
