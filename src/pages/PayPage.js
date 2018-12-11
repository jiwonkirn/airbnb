import React, { Component } from 'react';
import Pay from '../containers/Pay';

export default class PayPage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return <Pay roomId={roomId} />;
  }
}
