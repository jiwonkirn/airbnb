import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { withUser } from '../contexts/UserContext';
import { Redirect, withRouter } from 'react-router-dom';

class LoginView extends Component {
  render() {
    //페이스북 로그인
    console.log(process.env.REACT_APP_FACEBOOKID);
    const { setProfile, appId, logined } = this.props;
    console.log(appId);

    //구글로그인
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
          // onSuccess={this.props.setGoogleProfile}
          onSuccess={this.props.setGoogleProfile}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default withUser(LoginView);
