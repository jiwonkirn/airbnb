import React, { Component } from 'react';
import style from './Layout.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { withUser } from '../contexts/UserContext';
import { withSearch } from '../contexts/SearchContext';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  handleSubmit(e) {
    const cityName = e.target.value;
    if (e.keyCode === 13) {
      this.props.handleSearch(cityName);
    }
  }

  handleFocus(e) {
    this.setState({
      selected: true,
    });
  }

  handleBlur(e) {
    this.setState({
      selected: false,
    });
  }

  render() {
    return (
      <header key={this.props.cityName} className={style.header}>
        <Logo
          className={style.logo}
          style={{ width: '40px', height: '50px' }}
          onClick={this.props.handleLinkToHome}
        />
        <input
          style={
            this.state.selected === true ? { width: '45%' } : { width: '35%' }
          }
          onFocus={e => this.handleFocus(e)}
          onBlur={e => this.handleBlur(e)}
          onKeyDown={e => this.handleSubmit(e)}
          type="search"
          className={style.search}
          required
          defaultValue={this.props.cityName}
          placeholder="제주도에 가보는건 어떠세요?"
        />
        <nav className={style.navbar}>
          <p className={style.navbar_likelist}>저장목록</p>
          <p className={style.navbar_visited}>여행</p>
          <p className={style.navbar_helpdesk}>도움말</p>
        </nav>
      </header>
    );
  }
}

export default withSearch(withUser(Layout));
