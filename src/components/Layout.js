import React from 'react';
import style from './Layout.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Magnifying } from '../svg/magnifying.svg';
import { withUser } from '../contexts/UserContext';
import { withSearch } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';

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
        <div
          className={style.searchbar}
          onFocus={e => this.handleFocus(e)}
          onBlur={e => this.handleBlur(e)}
          style={
            this.state.selected === true ? { width: '50%' } : { width: '35%' }
          }
        >
          <Magnifying
            className={style.magnifying}
            style={{ width: '20px', height: '50px' }}
          />
          <input
            onKeyDown={e => this.handleSubmit(e)}
            type="search"
            className={style.search}
            required
            defaultValue={this.props.cityName}
            placeholder="제주도에 가보는건 어떠세요?"
          />
        </div>
        <nav className={style.navbar}>
          <p className={style.navbar_helpdesk}>도움말</p>
          <Link to="login" className={style.navbar_login}>
            로그인
          </Link>
        </nav>
      </header>
    );
  }
}

export default withSearch(withUser(Layout));
