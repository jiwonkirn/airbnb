import React from 'react';
import style from './Layout.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Magnifying } from '../svg/magnifying.svg';
import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';
import { ReactComponent as Instagram } from '../svg/instagram.svg';
import { ReactComponent as Blog } from '../svg/blog.svg';
import { ReactComponent as Board } from '../svg/board.svg';
import { withUser } from '../contexts/UserContext';
import { withSearch } from '../contexts/SearchContext';
import Login from '../containers/Login';
import Saved from '../containers/Saved';
import { GoogleLogout } from 'react-google-login';
import classNames from 'classnames';
import HelpdeskView from './HelpdeskView';
import SavedRsvn from '../containers/SavedRsvn';
import { withRouter } from 'react-router-dom';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      loginbtnclick: false,
      helpbtnclick: false,
      savedModal: false,
      savedRsvn: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        savedModal: false,
      });
    }
  }

  handleSavedModal = async () => {
    await this.setState(prev => {
      return { savedModal: !prev.savedModal };
    });
    console.log(this.state.savedModal);
  };

  handleSavedRsvn() {
    // console.log(this.props.match);
    this.props.history.push('/trips');
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
          <HelpdeskView onModalRemove={e => this.handleHelpModalRemove(e)} />
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
                {this.state.savedModal && (
                  <Saved onSavedModal={this.handleSavedModal} theme="header" />
                )}
              </p>
            )}
            {this.props.logined && (
              <p className={style.savedRsvn}>
                <span onClick={() => this.handleSavedRsvn()}>여행</span>
                {this.state.savedRsvn && (
                  <SavedRsvn onSavedRsvn={() => this.handleSavedRsvn()} />
                )}
              </p>
            )}
            {this.props.logined ? (
              <button
                onClick={() => this.props.removeGoogleProfile()}
                className={style.navbar_login}
              >
                로그아웃
              </button>
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
        {this.props.children}
        <footer>
          <div className={style.footer}>
            <div className={style.footerSection}>
              <label className={style.footerName} htmlFor={style.footerList}>
                에어비앤비
              </label>
              <ul className={style.footerList}>
                <li>채용정보</li>
                <li>미디어</li>
                <li>정책</li>
                <li>도움말</li>
                <li>다양성과 소속감</li>
              </ul>
            </div>
            <div className={style.footerSection}>
              <label className={style.footerName} htmlFor={style.footerList}>
                여행하기
              </label>
              <ul className={style.footerList}>
                <li>신뢰와 안전</li>
                <li>친구 초대하기</li>
                <li>Airbnb Citizen</li>
                <li>비즈니스 프로그램</li>
                <li>가이드북</li>
                <li>AirbnbMag</li>
                <li>에어비앤비 이벤트</li>
                <li>한국의 변경된 환불정책</li>
              </ul>
            </div>
            <div className={style.footerSection}>
              <label className={style.footerName} htmlFor={style.footerList}>
                호스팅하기
              </label>
              <ul className={style.footerList}>
                <li>호스팅의 장점</li>
                <li>호스트 추천하기</li>
                <li>호스팅 기준</li>
                <li>책임감 있는 호스트 되기</li>
                <li>커뮤니티 센터</li>
                <li>트립 호스팅NEW!</li>
                <li>Open Homes 프로그램</li>
              </ul>
            </div>
            <div className={style.footerSection}>
              <div>
                <Facebook className={style.icon} />
                <Twitter className={style.icon} />
                <Instagram className={style.icon} />
                <Blog className={style.icon} />
                <Board className={style.icon} />
              </div>
              <ul>
                <li>이용약관</li>
                <li>개인정보</li>
                <li>처리방침</li>
                <li>여행지 찾기</li>
              </ul>
            </div>
          </div>
          <div className={style.footer2}>
            <Logo className={style.logo2} />
            <p className={style.copy}> © Airbnb, Inc.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(withSearch(withUser(Layout)));
