import React, { Component } from 'react';
import SavedModalView from '../components/SavedModalView';
import SavedView from '../components/SavedView';
import api from '../api';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';
import SavedDetailView from '../components/SavedDetailView';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRooms: [],
      filteredRooms: [],
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

    const savedRooms = this.state.savedRooms.sort((x, y) =>
      x.city.localeCompare(y.city)
    );
    const filteredRooms = [];

    await savedRooms.forEach((item, index) => {
      if (index > 0 && item.city !== savedRooms[index - 1].city) {
        filteredRooms.push([item.city]);
      } else if (index === 0) {
        filteredRooms.push([item.city]);
      }
    });

    for (let item of filteredRooms) {
      item.push(savedRooms.filter(i => i.city === item[0]));
    }

    this.setState({
      filteredRooms,
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
    if (this.props.theme === 'header') {
      return <SavedModalView {...this.state} />;
    } else if (this.props.match.path === '/saved/:city') {
      return <SavedDetailView {...this.state} />;
    } else {
      return <SavedView {...this.state} />;
    }
  }
}

export default withRouter(withUser(Saved));
