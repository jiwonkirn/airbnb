import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { withUser } from '../contexts/UserContext';

class LoginView extends Component {
  render() {
    console.log(process.env.REACT_APP_FACEBOOKID);
    const { setProfile, appId } = this.props;
    console.log(appId);
    const responseGoogle = response => {
      console.log(response);
    };
    document.getElementById('googleButton');
    return (
      <div>
        <FacebookLogin
          appId="576870092752054"
          autoLoad={true}
          fields="name,email,picture"
          callback={setProfile}
        />
        <GoogleLogin
          clientId="492203123541-mv2nrcvptponmmqbaka554a06p7qjilc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default withUser(LoginView);
