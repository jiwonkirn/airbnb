import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { withUser } from '../contexts/UserContext';
import { Redirect, withRouter } from 'react-router-dom';

class LoginView extends Component {
  render() {
    const { setProfile, appId, logined } = this.props;
    const responseGoogle = response => {
      console.log(response);
    };
    document.getElementById('googleButton');
    if (logined) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <FacebookLogin
            appId={appId}
            autoLoad={true}
            fields="name,email,picture"
            callback={setProfile}
          />
          <GoogleLogin
            clientId="492203123541-mv2nrcvptponmmqbaka554a06p7qjilc.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={res => console.log(res)}
            onFailure={res => console.log(res)}
          />
        </div>
      );
    }
  }
}

export default withUser(LoginView);
