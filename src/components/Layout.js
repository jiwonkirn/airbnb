import React from 'react';
import style from './Layout.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Magnifying } from '../svg/magnifying.svg';
import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';
import { ReactComponent as Instagram } from '../svg/instagram.svg';
import { ReactComponent as Blog } from '../svg/blog.svg';
import { ReactComponent as Board } from '../svg/board.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { ReactComponent as Home } from '../svg/home.svg';
import { ReactComponent as Conversation } from '../svg/conversation.svg';
import { ReactComponent as Carrier } from '../svg/carrier.svg';
import { ReactComponent as Hart } from '../svg/hart.svg';
import { ReactComponent as Person } from '../svg/person.svg';
import { withUser } from '../contexts/UserContext';
import { withSearch } from '../contexts/SearchContext';
import Login from '../containers/Login';
import Saved from '../containers/Saved';
import { GoogleLogout } from 'react-google-login';
import classNames from 'classnames';
import HelpdeskView from './HelpdeskView';
import SavedRsvn from '../containers/SavedRsvn';
import { Link, withRouter } from 'react-router-dom';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      loginbtnclick: false,
      helpbtnclick: false,
      savedModal: false,
      savedRsvn: false,
      navSelected: false,
    };
    this.props.handleFixModal(this.state.navSelected);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      await this.setState({
        savedModal: false,
        navSelected: false,
      });
      this.props.handleFixModal(this.state.navSelected);
    }
  }

  handleSavedModal = async () => {
    const {
      device,
      history: { push },
    } = this.props;
    if (device === 'desktop') {
      await this.setState(prev => {
        return { savedModal: !prev.savedModal };
      });
    } else {
      push('/saved');
    }
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

  handleNavigation = async () => {
    await this.setState(prev => {
      return { navSelected: !prev.navSelected };
    });
    this.props.handleFixModal(this.state.navSelected);
  };

  render() {
    const { selected, navSelected } = this.state;
    const {
      device,
      location: { pathname },
    } = this.props;
    const nav = classNames(style.navbar, {
      [style.activeNav]: this.state.navSelected,
    });
    return (
      <div>
        {this.state.loginbtnclick ? (
          <Login onModalRemove={e => this.handleModalRemove(e)} />
        ) : null}
        {this.state.helpbtnclick ? (
          <HelpdeskView onModalRemove={e => this.handleHelpModalRemove(e)} />
        ) : null}
        <header
          style={
            device === 'mobile' && pathname === '/'
              ? { position: 'fixed' }
              : null
          }
          key={this.props.cityName}
          className={style.header}
        >
          <Logo
            className={style.logo}
            onClick={() => {
              if (device === 'desktop') {
                this.props.handleLinkToHome();
              } else {
                this.handleNavigation();
              }
            }}
          />
          <ArrowDown
            style={
              navSelected
                ? { transform: 'rotate(90deg)' }
                : { transform: 'rotate(0)' }
            }
            className={style.arrowDown}
          />
          <div
            className={style.searchbar}
            onFocus={e => this.handleFocus(e)}
            onBlur={e => this.handleBlur(e)}
            style={
              selected
                ? {
                    width:
                      device === 'desktop'
                        ? '650px'
                        : device === 'tablet'
                        ? '50%'
                        : '70%',
                  }
                : {
                    width:
                      device === 'desktop'
                        ? '460px'
                        : device === 'tablet'
                        ? '50%'
                        : '70%',
                  }
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
              placeholder={
                device === 'desktop' ? '제주도에 가보는건 어떠세요?' : '검색'
              }
            />
          </div>
          <nav className={nav}>
            {device !== 'desktop' && (
              <Link to="/" className={style.toHomeMobile}>
                {'홈'}
                <Home className={style.home} />
              </Link>
            )}
            <p
              className={style.navbar_helpdesk}
              onClick={e => this.handleHelpdeskBtn(e)}
            >
              도움말
              <Conversation className={style.conversation} />
            </p>
            {this.props.logined && (
              <p className={style.saved}>
                <span onClick={this.handleSavedModal}>저장목록</span>
                <Hart className={style.hart} />
                {this.state.savedModal && device === 'desktop' ? (
                  <Saved onSavedModal={this.handleSavedModal} theme="header" />
                ) : null}
              </p>
            )}
            {this.props.logined && (
              <p className={style.savedRsvn}>
                <span onClick={() => this.handleSavedRsvn()}>여행</span>
                <Carrier className={style.carrier} />
                {this.state.savedRsvn && (
                  <SavedRsvn onSavedRsvn={() => this.handleSavedRsvn()} />
                )}
              </p>
            )}
            {this.props.logined ? (
              <p
                onClick={() => this.props.removeGoogleProfile()}
                className={style.navbar_login}
              >
                로그아웃
                <Person className={style.person} />
              </p>
            ) : (
              <p
                onClick={e => this.handleLoginBtn(e)}
                className={style.navbar_login}
              >
                로그인
                <Person className={style.person} />
              </p>
            )}
          </nav>
        </header>
        {this.props.children}
        {device === 'desktop' && (
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
        )}
      </div>
    );
  }
}

export default withRouter(withSearch(withUser(Layout)));
