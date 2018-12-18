import React, { Component } from 'react';
import ReserveView from '../components/ReserveView';
import api from '../api';

export default class Reserve extends Component {
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
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <ReserveView
        {...this.state}
        roomId={this.props.roomId}
        params={this.state.params}
      />
    );
  }
}
