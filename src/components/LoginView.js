import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { withUser } from '../contexts/UserContext';

class LoginView extends Component {
  render() {
    console.log(process.env.REACT_APP_FACEBOOKID);
    const { setProfile, appId } = this.props;
    console.log(appId);
    return (
      <div>
        <FacebookLogin
          appId="576870092752054"
          autoLoad={true}
          fields="name,email,picture"
          callback={setProfile}
        />
      </div>
    );
  }
}

export default withUser(LoginView);
