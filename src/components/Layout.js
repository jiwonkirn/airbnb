import React, { Component } from 'react';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { withSearch } from '../contexts/SearchContext';
import { withUser } from '../contexts/UserContext';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    const cityName = e.target.value;
    this.props.handleSearch(cityName);
  }

  render() {
    return (
      <header className="header">
        <Logo style={{ width: '40px' }} />
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" defaultValue={'ㅎㅎ'} />
        </form>
        <div />
      </header>
    );
  }
}

export default withUser(withSearch(Layout));
