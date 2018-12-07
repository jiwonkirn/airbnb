import LoginView from '../components/LoginView';
import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    const { onModalRemove } = this.props;
    return <LoginView onModalRemove={e => onModalRemove(e)} />;
  }
}
