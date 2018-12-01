import React, { Component } from 'react';
import api from '../api';
import GoogleLogin from 'react-google-login';

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appId: '576870092752054',
      id: null,
      username: null,
      setProfile: this.setProfile.bind(this),
      setGoogleProfile: this.setGoogleProfile.bind(this),
      // logout: this.logout.bind(this),
      logined: false,
    };
  }

  async componentDidMount() {
    await this.refreshUser();
  }

  async setProfile(res) {
    if (!localStorage.getItem('token')) {
      const { email, id, name } = res;
      const first_name = name.split(' ')[0];
      const last_name = name.split(' ')[1];
      const user_id = id;
      const {
        data: { token },
      } = await api.post('/api/user/auth-token/', {
        email,
        first_name,
        last_name,
        user_id,
      });
      localStorage.setItem('token', token);
      await this.refreshUser();
    }
  }

  refreshUser = () => {
    if (localStorage.getItem('token')) {
      this.setState({
        logined: true,
      });
    } else {
      this.setState({
        logined: false,
      });
    }
  };

  async setGoogleProfile(res) {
    //구글에서 사용자 정보를 가져오는 코드
    const { profileObj } = res;
    const first_name = profileObj.familyName;
    const last_name = profileObj.givenName;
    const email = profileObj.email;
    const user_id = profileObj.googleId;

    //사용자 정보를 서버에 보내서 토큰을 받아오는 코드
    const res2 = await api.post('/api/user/auth-token/', {
      email,
      last_name,
      first_name,
      user_id,
    });
    localStorage.setItem('token', res2.data.token);

    //TODO:서버에서 사용자의 id와 username정보를 받아와서 상태를 바꿔주는 코드
    // this.setState({
    //   id:,
    //   username:
    // });
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withUser(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { UserProvider, Consumer as UserConsumer, withUser };
