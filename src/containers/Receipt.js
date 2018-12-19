import ReceiptView from '../components/ReceiptView';
import React, { Component } from 'react';
import api from '../api';

export default class Receipt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      room: '',
      guest: '',
      num_guest: '',
      check_in_date: '',
      check_out_date: '',
      room_city: '',
      room_price: '',
      room_public_address: '',
      room_host: '',
      room_name: '',
      created_date: '',
    };
  }

  async componentDidMount() {
    const { bookingId } = this.props;
    const { data: receipt } = await api.get(`/api/home/receipt/${bookingId}/`);
    console.log(receipt);
    this.setState({
      ...receipt,
    });
    this.setState({
      loading: false,
    });
  }

  render() {
    return <ReceiptView {...this.state} bookingId={this.props.bookingId} />;
  }
}
