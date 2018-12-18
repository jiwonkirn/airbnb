import React, { Component } from 'react';
import Detail from '../containers/Detail';
import { withUser } from '../contexts/UserContext';

class DetailPage extends Component {
  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return <Detail key={this.props.logined} roomId={roomId} />;
  }
}

export default withUser(DetailPage);
