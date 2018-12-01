import React, { Component } from 'react';
import style from './Layout.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <Logo className="logo" style={{ width: '40px', height: '50px' }} />
        <input
          type="search"
          className="search"
          required
          placeholder="제주도에 가보는건 어떠세요?"
        />
        <nav className="navbar">
          <p className="navbar_likelist">저장목록</p>
          <p className="navbar_visited">여행</p>
          <p className="navbar_helpdesk">도움말</p>
        </nav>
      </header>
    );
  }
}
