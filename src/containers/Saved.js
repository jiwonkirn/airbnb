import React, { Component } from 'react';
import SavedModalView from '../components/SavedModalView';
import api from '../api';
import { withUser } from '../contexts/UserContext';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRooms: [],
      keyProp: 0,
      loading: true,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.loadSavedRooms();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.logined !== prevProps.logined &&
      localStorage.getItem('token')
    ) {
      this.loadSavedRooms();
    }
  }

  loadSavedRooms = async () => {
    this.setState({
      loading: true,
    });
    const { data } = await api.get('/api/user/saved/');
    await this.setState({
      savedRooms: data,
      keyProp: data.length,
    });
    this.setState({
      loading: false,
    });
  };

  handleSaveRoom = async roomId => {
    const room_id = parseInt(roomId);
    if (this.state.savedRooms.find(room => room.pk == roomId)) {
      await api.delete('/api/user/save_room/', {
        data: { room_id: room_id },
      });
      alert('삭제되었습니다.');
      this.loadSavedRooms();
    }
  };

  render() {
    return <SavedModalView {...this.state} />;
  }
}

export default withUser(Saved);
