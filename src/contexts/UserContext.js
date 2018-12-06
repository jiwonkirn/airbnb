import React, { Component } from 'react';
import api from '../api';

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
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
      // logout: this.logout.bind(this),
      logined: false, // 로그인 여부
      // 저장목록 관련
      savedRooms: [],
      handleSaveRoom: this.handleSaveRoom.bind(this),
    };
  }

  // 컴포넌트가 마운트 되면 로그인 여부를 확인한다.
  // 저장된 방 정보를 불러온다.
  async componentDidMount() {
    await this.refreshUser();
    await this.loadSavedRooms();
    //서버에서 사용자의 id와 username정보를 받아와서 상태를 바꿔주는 코드
  }

  // 저장된 방 정보를 받아오는 메소드
  loadSavedRooms = async () => {
    const { data } = await api.get('/api/user/saved/');
    this.setState({
      savedRooms: data,
    });
  };

  // 방을 저장하거나 저장 취소하는 메소드
  handleSaveRoom = async roomId => {
    const room_id = parseInt(roomId);
    if (!this.state.savedRooms.find(room => room.pk == roomId)) {
      await api.post('/api/user/save_room/', {
        room_id,
      });
      alert('숙소 저장에 성공했습니다.');
      await this.loadSavedRooms();
    } else {
      await api.delete('/api/user/save_room/', {
        data: { room_id: room_id },
      });
      alert('저장목록에서 삭제되었습니다.');
      await this.loadSavedRooms();
    }
  };

  // 페이스북 에서 응답받은 콜백을 통해 로그인, 회원가입 요청을 하는 메소드
  async setProfile(res) {
    if (!localStorage.getItem('token')) {
      const { email, id, name } = res;
      const first_name = name.split(' ')[0];
      const last_name = name.split(' ')[1];
      const user_id = id;
      const {
        data: { token },
      } = await api.post('/api/user/auth-token/', {
        email,
        first_name,
        last_name,
        user_id,
      });
      await localStorage.setItem('token', token);
      if (localStorage.getItem('token')) {
        this.setState({
          email,
          first_name,
          last_name,
          user_id,
        });
        await this.refreshUser();
      } else {
        alert('로그인에 실패했습니다 확인해주세요.');
      }
    }
  }

  // 토큰이 있으면 로그인 된 상태로 여긴다.
  refreshUser = () => {
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
    localStorage.setItem('token', res2.data.token);
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withUser(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { UserProvider, Consumer as UserConsumer, withUser };
