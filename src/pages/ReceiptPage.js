import React, { Component } from 'react';
import Receipt from '../containers/Receipt';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

class ReceiptPage extends Component {
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      alert('로그인이 되어있지 않습니다. 로그인해주세요');
      this.props.history.push('/');
    }
  }

  render() {
    const { match } = this.props;
    const roomId = match.params.roomId;
    return <Receipt key={this.props.logined} roomId={roomId} />;
  }
}

export default withRouter(withUser(ReceiptPage));
