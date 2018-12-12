import React, { Component } from 'react';
import SavedRsvn from '../containers/SavedRsvn';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

class SavedRsvnPage extends Component {
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      alert('로그인이 되어있지 않습니다. 로그인해주세요');
      this.props.history.push('/');
    }
  }

  render() {
    return <SavedRsvn key={this.props.logined} />;
  }
}

export default withRouter(withUser(SavedRsvnPage));
