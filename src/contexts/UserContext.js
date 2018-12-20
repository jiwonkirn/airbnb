import React, { Component } from 'react';
import api from '../api';
import { withRouter } from 'react-router-dom';

const { Provider, Consumer } = React.createContext();

let lastInnerWidth = window.innerWidth;

class UserProviders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appId: '576870092752054', // 페이스북 앱 아이디
      email: null,
      first_name: null,
      last_name: null,
      user_id: null,
      setProfile: this.setProfile.bind(this),
      setGoogleProfile: this.setGoogleProfile.bind(this),
      removeGoogleProfile: this.removeGoogleProfile.bind(this),
      handleFixModal: this.handleFixModal.bind(this),
      logined: false, // 로그인 여부
      device: 'desktop',
    };
  }

  // 컴포넌트가 마운트 되면 로그인 여부를 확인한다.
  // 저장된 방 정보를 불러온다.
  async componentDidMount() {
    await this.refreshUser();
    if (window.innerWidth > 761 && window.innerWidth <= 1128) {
      this.setState({
        device: 'tablet',
      });
    } else if (window.innerWidth <= 760) {
      this.setState({
        device: 'mobile',
      });
    } else if (window.innerWidth > 1129) {
      this.setState({
        device: 'desktop',
      });
    }
    window.addEventListener('resize', this.deviceWidth);
    //서버에서 사용자의 id와 username정보를 받아와서 상태를 바꿔주는 코드
  }

  deviceWidth = () => {
    const currentWidth = window.innerWidth;
    if (
      currentWidth > 761 &&
      currentWidth <= 1128 &&
      (this.lastInnerWidth <= 761 || this.lastInnerWidth > 1128)
    ) {
      this.setState({
        device: 'tablet',
      });
    } else if (currentWidth <= 760 && this.lastInnerWidth > 760) {
      this.setState({
        device: 'mobile',
      });
    } else if (currentWidth > 1129 && this.lastInnerWidth <= 1129) {
      this.setState({
        device: 'desktop',
      });
    }

    this.lastInnerWidth = currentWidth;
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.deviceWidth);
  };

  // 토큰이 있으면 로그인 된 상태로 여긴다.
  refreshUser = async () => {
    if (localStorage.getItem('token')) {
      this.setState({
        logined: true,
      });
    } else {
      this.setState({
        logined: false,
      });
    }
  };

  // 페이스북 에서 응답받은 콜백을 통해 로그인, 회원가입 요청을 하는 메소드
  async setProfile(res) {
    if (!localStorage.getItem('token')) {
      try {
        const {
          email,
          id,
          name,
          picture: {
            data: { url },
          },
        } = res;
        const first_name = name.split(' ')[0];
        const last_name = name.split(' ')[1] == null ? ' ' : name.split(' ')[1];
        const user_id = id;
        const {
          data: { token },
        } = await api.post('/api/user/auth-token/', {
          email,
          first_name,
          last_name,
          user_id,
        });
        alert(`${last_name} ${first_name}남 환영합니다!`);
        await localStorage.setItem('token', token);
        await localStorage.setItem('photo', url);
        if (localStorage.getItem('token')) {
          this.setState({
            email,
            first_name,
            last_name,
            user_id,
          });
          await this.refreshUser();
        }
      } catch (e) {
        console.log(e.message);
        alert('로그인에 실패하셨습니다.');
      }
    }
  }

  // 구글 에서 응답받은 콜백을 통해 로그인, 회원가입 요청을 하는 메소드
  async setGoogleProfile(res) {
    //구글에서 사용자 정보를 가져오는 코드
    const { profileObj } = res;
    const first_name = profileObj.familyName;
    const last_name = profileObj.givenName;
    const email = profileObj.email;
    const user_id = profileObj.googleId;

    //사용자 정보를 서버에 보내서 토큰을 받아오는 코드
    const res2 = await api.post('/api/user/auth-token/', {
      email,
      last_name,
      first_name,
      user_id,
    });
    alert('로그인 되었습니다.');
    localStorage.setItem('token', res2.data.token);
    this.refreshUser();
    this.setState({
      first_name,
      last_name,
    });
  }

  removeGoogleProfile() {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('token');
    this.refreshUser();
  }

  handleFixModal = boolean => {
    const body = document.querySelector('body');
    if (boolean) {
      body.style.overflow = 'hidden';
      body.style.position = 'relative';
    } else {
      body.style.overflow = 'visible';
      body.style.position = 'static';
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

const UserProvider = withRouter(UserProviders);

function withUser(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { UserProvider, Consumer as UserConsumer, withUser };
