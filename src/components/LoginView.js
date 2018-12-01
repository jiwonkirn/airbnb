import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { withUser } from '../contexts/UserContext';
import { Redirect, withRouter } from 'react-router-dom';

class LoginView extends Component {
  render() {
    const { setProfile, appId, logined } = this.props;
    // if (logined) {
    // return <Redirect to="/" />;
    // } else {
    return (
      <div>
        <FacebookLogin
          appId={appId}
          autoLoad={true}
          fields="name,email,picture"
          callback={setProfile}
        />
      </div>
    );
    // }
  }
}

export default withUser(LoginView);
