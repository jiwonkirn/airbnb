import React, { Component } from 'react';
import Detail from '../containers/Detail';

export default class DetailPage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return <Detail roomId={roomId} />;
  }
}
