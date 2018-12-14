import React, { Component } from 'react';
import Pay from '../containers/Pay';
import { Helmet } from 'react-helmet';

export default class PayPage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return (
      <>
        <Helmet>
          <title>{'결제 진행 - FASTBNB'}</title>
        </Helmet>
        <Pay roomId={roomId} />
      </>
    );
  }
}
