import React, { Component } from 'react';
import Saved from '../containers/Saved';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

class SavedPage extends Component {
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      alert('로그인이 되어있지 않습니다. 로그인해주세요');
      this.props.history.push('/');
    }
  }

  render() {
    return <Saved key={this.props.logined} />;
  }
}

export default withRouter(withUser(SavedPage));
