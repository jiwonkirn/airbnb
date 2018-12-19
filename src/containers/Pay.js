import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PayView from '../components/PayView';
import api from '../api';

class Pay extends Component {
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
      room_photos: [],
      notices: [
        '어린이와 유아에게 적합함',
        '반려동물 동반 불가',
        '파티나 이벤트 금지',
        '흡연 금지',
      ],
    };
  }

  async componentDidMount() {
    const { roomId } = this.props;
    const { data: roomdetail } = await api.get(`/api/home/listings/${roomId}/`);
    this.setState({
      ...roomdetail,
    });
    console.log(roomdetail);
    this.setState({
      loading: false,
    });
  }
  async handlePost(checkin, checkout, adult, children) {
    const {
      data: { id },
    } = await api.post('/api/home/booking/', {
      check_in_date: checkin,
      check_out_date: checkout,
      num_guest: adult + children,
      room: this.props.roomId,
    });
    if (id) {
      alert('예약이 완료되었습니다.');
      this.props.history.push('/receipt/' + id);
    }
  }
  render() {
    const { roomId } = this.props;
    return (
      <PayView
        onPost={(checkin, checkout, adult, children) =>
          this.handlePost(checkin, checkout, adult, children)
        }
        {...this.state}
        roomId={roomId}
      />
    );
  }
}

export default withRouter(Pay);
