import React, { Component } from 'react'
import logo from '../svg/logo.svg';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>
    )
  }
}