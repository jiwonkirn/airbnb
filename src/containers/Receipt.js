import ReceiptView from '../components/ReceiptView';
import React, { Component } from 'react';
import api from '../api';

export default class Receipt extends Component {
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
      id: '',
      room: '',
      guest: '',
      num_guest: '',
      check_in_date: '',
      check_out_date: '',
      loading: true,
      saved: false,
    };
  }

  async componentDidMount() {
    const { roomId } = this.props;
    const { data: roomdetail } = await api.get(`api/home/listing/${roomId}/`);
    const { data: booking } = await api.get(`api/home/booking/${roomId}`);
    this.setState({
      ...roomdetail,
      ...booking,
    });
    this.setState({
      loading: false,
    });
  }

  render() {
    return <ReceiptView {...this.state} roomId={this.props.roomId} />;
  }
}
