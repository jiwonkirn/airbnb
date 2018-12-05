import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { withUser } from '../contexts/UserContext';
import style from './LoginView.module.scss';
import { ReactComponent as Cross } from '../svg/cross.svg';
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
      <div className={style.container}>
        <div className={style.wrapper}>
          <Cross className={style.cross} />
          <FacebookLogin
            appId="576870092752054"
            autoLoad={true}
            fields="name,email,picture"
            callback={setProfile}
            className={style.facebookBtn}
          />
          <GoogleLogin
            clientId="492203123541-mv2nrcvptponmmqbaka554a06p7qjilc.apps.googleusercontent.com"
            buttonText="Login"
            // onSuccess={this.props.setGoogleProfile}
            onSuccess={this.props.setGoogleProfile}
            onFailure={responseGoogle}
            className={style.googleBtn}
          />
           <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick}>This is my custom Google button</button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
    );
  }
}

export default withUser(LoginView);
