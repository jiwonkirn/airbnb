import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { withUser } from '../contexts/UserContext';
import style from './LoginView.module.scss';
import { ReactComponent as Cross } from '../svg/cross.svg';
import { ReactComponent as Google } from '../svg/google.svg';
import { ReactComponent as Facebook } from '../svg/facebook.svg';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'haha',
      crossclick: false,
    };
  }
  handleCross() {
    this.setState({
      crossclick: true,
    });
  }
  render() {
    //페이스북 로그인
    const { setProfile, onModalRemove } = this.props;

    //구글로그인
    const responseGoogle = response => {
      //
    };

    document.getElementById('googleButton');
    console.log(this.state.focusedInput);
    console.log(this.state.date);
    return (
      <div className={style.container} onClick={e => onModalRemove(e)}>
        <div className={style.wrapper}>
          <Cross className={style.crossImg} onClick={e => onModalRemove(e)} />
          <FacebookLogin
            appId="576870092752054"
            autoLoad={false}
            fields="name,email,picture"
            callback={setProfile}
            render={renderProps => (
              <button
                className={style.facebookBtn}
                onClick={renderProps.onClick}
              >
                <Facebook className={style.facebookLogo} />
                <div className={style.a}>페이스북 계정으로 로그인</div>
              </button>
            )}
          />
          <GoogleLogin
            clientId="492203123541-mv2nrcvptponmmqbaka554a06p7qjilc.apps.googleusercontent.com"
            render={renderProps => (
              <button className={style.googleBtn} onClick={renderProps.onClick}>
                <Google className={style.googleLogo} />
                <div className={style.a}>구글 계정으로 로그인</div>
              </button>
            )}
            buttonText="Login"
            onSuccess={this.props.setGoogleProfile}
            onFailure={responseGoogle}
          />
          <hr className={style.line} />
          <div className={style.login}>
            <p>이미 에어비앤비 계정이 있나요?</p>
            <p>로그인</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(LoginView);
