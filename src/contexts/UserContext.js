import React, { Component } from 'react';
import api from '../api';
import GoogleLogin from 'react-google-login';

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appId: process.env.REACT_APP_API_FACEBOOKID,
      // appId: '576870092752054',
      id: null,
      username: null,
      setProfile: this.setProfile.bind(this),
      setGoogleProfile: this.setGoogleProfile.bind(this),
      // logout: this.logout.bind(this),
      logined: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        logined: true,
      });
    }
  }

  setProfile(res) {
    console.log(res);
  }

  async setGoogleProfile(res) {
    console.log(res);
    const { profileObj } = res;
    const first_name = profileObj.familyName;
    const last_name = profileObj.givenName;
    const email = profileObj.email;
    const user_id = profileObj.googleId;
    const res2 = await api.post('/api/user/auth-token/', {
      email,
      last_name,
      first_name,
      user_id,
    });
    localStorage.setItem('token', res2.data.token);
    // this.setState({});
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
