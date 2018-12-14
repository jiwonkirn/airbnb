import React, { Component } from 'react';
import Saved from '../containers/Saved';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class SavedPage extends Component {
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      alert('로그인이 되어있지 않습니다. 로그인해주세요');
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{'숙소 저장목록 - FASTBNB'}</title>
        </Helmet>
        <Saved key={this.props.logined} />
      </>
    );
  }
}

export default withRouter(withUser(SavedPage));
