import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { withUser } from '../contexts/UserContext';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'haha',
    };
  }

  render() {
    //페이스북 로그인
    const { setProfile } = this.props;

    //구글로그인
    const responseGoogle = response => {
      // console.log(response);
    };

    document.getElementById('googleButton');
    console.log(this.state.focusedInput);
    console.log(this.state.date);
    return (
      <div>
        <FacebookLogin
          appId="576870092752054"
          autoLoad={false}
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
