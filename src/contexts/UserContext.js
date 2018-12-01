import React, { Component } from 'react';
import api from '../api';

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
