import React, { Component } from 'react';
import DetailView from '../components/DetailView';
import api from '../api';

export default class Detail extends Component {
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
    };
  }

  async componentDidMount() {
    const { roomId } = this.props;
    console.log(roomId);
    const { data: roomdetail } = await api.get(`/api/home/listings/${roomId}/`);
    console.log(roomdetail);
    this.setState({
      ...roomdetail,
    });
  }
  render() {
    console.log(this.state);
    return <DetailView {...this.state} />;
  }
}
