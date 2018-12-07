import React, { Component } from 'react';
import DetailView from '../components/DetailView';
import api from '../api';
import { withUser } from '../contexts/UserContext';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pk: '',
      bathrooms: '',
      bedrooms: '',
      beds: '',
      person_capacity: '',
      room_name: '',
      room_type: '',
      room_and_property_type: '',
      public_address: '',
      city: '',
      price: '',
      lat: '',
      lng: '',
      created_at: '',
      amenities: [],
      roominfo: {},
      hostimages: {},
      loading: true,
      saved: false,
    };
  }

  async componentDidMount() {
    const { roomId } = this.props;
    const { data: roomdetail } = await api.get(`/api/home/listings/${roomId}/`);
    this.setState({
      ...roomdetail,
    });

    const { data: savedRoomList } = await api.get('/api/user/saved/');
    if (savedRoomList.some(item => item.pk == roomId)) {
      this.setState({
        saved: true,
      });
    }
    this.setState({
      loading: false,
    });
  }

  // 방을 저장하거나 저장 취소하는 메소드
  handleSaveRoom = async roomId => {
    const room_id = parseInt(roomId);
    const { saved } = this.state;
    if (!saved) {
      await api.post('/api/user/save_room/', {
        room_id,
      });
      this.setState({
        saved: true,
      });
      alert('숙소 저장에 성공했습니다.');
    } else {
      await api.delete('/api/user/save_room/', {
        data: { room_id: room_id },
      });
      this.setState({
        saved: false,
      });
      alert('저장목록에서 삭제되었습니다.');
    }
  };

  render() {
    const { roomId } = this.props;
    return (
      <DetailView
        {...this.state}
        roomId={roomId}
        onHandleSaveRoom={roomId => this.handleSaveRoom(roomId)}
      />
    );
  }
}

export default withUser(Detail);
