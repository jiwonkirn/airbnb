import LoginView from '../components/LoginView';
import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    const { onModalRemove } = this.props;
    return <img src={localStorage.getItem('photo')} alt="0" />;
  }
}
