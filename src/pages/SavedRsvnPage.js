import React, { Component } from 'react';
import SavedRsvn from '../containers/SavedRsvn';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class SavedRsvnPage extends Component {
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
          <title>{'여행 - FASTBNB'}</title>
        </Helmet>
        <SavedRsvn key={this.props.logined} />
      </>
    );
  }
}

export default withRouter(withUser(SavedRsvnPage));
