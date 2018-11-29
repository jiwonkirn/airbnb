import React, { Component } from 'react';
import { ReactComponent as Logo } from '../svg/logo.svg';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <Logo style={{ width: '50px' }} />
      </header>
    );
  }
}
