import React, { Component } from 'react';
import api from '../api';

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appId: '576870092752054',
      id: null,
      username: null,
      setProfile: this.setProfile.bind(this),
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
