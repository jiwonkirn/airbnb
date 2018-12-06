import React from 'react';
import style from './Layout.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Magnifying } from '../svg/magnifying.svg';
import { withUser } from '../contexts/UserContext';
import { withSearch } from '../contexts/SearchContext';
import Login from '../containers/Login';
import HelpdestView from './HelpdeskView';
import SavedModal from './SavedModal';
import classNames from 'classnames';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      loginbtnclick: false,
      helpbtnclick: false,
      savedModal: false,
    };
  }

  handleSavedModal = () => {
    this.setState(prev => {
      return { savedModal: !prev.savedModal };
    });
    console.log(this.state.savedModal);
  };

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
  handleLoginBtn() {
    this.setState({
      loginbtnclick: true,
    });
  }

  handleHelpdeskBtn() {
    this.setState({
      helpbtnclick: true,
    });
  }

  handleHelpModalRemove(e) {
    e.preventDefault();
    this.setState({
      helpbtnclick: false,
    });
  }
  handleModalRemove(e) {
    e.preventDefault();
    this.setState({
      loginbtnclick: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.loginbtnclick ? (
          <Login onModalRemove={e => this.handleModalRemove(e)} />
        ) : null}
        {this.state.helpbtnclick ? (
          <HelpdestView onModalRemove={e => this.handleHelpModalRemove(e)} />
        ) : null}
        <header key={this.props.cityName} className={style.header}>
          <Logo className={style.logo} onClick={this.props.handleLinkToHome} />
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
              type="text"
              className={style.search}
              required
              defaultValue={this.props.cityName}
              placeholder="제주도에 가보는건 어떠세요?"
            />
          </div>
          <nav className={style.navbar}>
            <p
              className={style.navbar_helpdesk}
              onClick={e => this.handleHelpdeskBtn(e)}
            >
              도움말
            </p>
            {this.props.logined && (
              <p className={style.saved}>
                <span onClick={this.handleSavedModal}>저장목록</span>
                {this.state.savedModal && <SavedModal />}
              </p>
            )}
            {this.props.logined ? (
              <button className={style.navbar_login}>로그아웃</button>
            ) : (
              <button
                onClick={e => this.handleLoginBtn(e)}
                className={style.navbar_login}
              >
                로그인
              </button>
            )}
          </nav>
        </header>
      </div>
    );
  }
}

export default withSearch(withUser(Layout));
