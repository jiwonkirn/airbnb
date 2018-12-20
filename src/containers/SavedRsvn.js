import SavedRsvnView from '../components/SavedRsvnView';
import React, { Component } from 'react';
import api from '../api';

export default class SavedRsvn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: '',
      // room: '',
      // guest: '',
      // num_guest: '',
      // check_in_date: '',
      // check_out_date: '',
      // room_city: '',
      // room_price: '',
      // room_public_address: '',
      // room_host: '',
      // room_name: '',
      // created_date: '',
      // booking: [],
      loading: true,
      receipt: [],
    };
  }

  async componentDidMount() {
    const receipt = this.state.receipt.slice();
    const { data: receipt1 } = await api.get(`/api/home/receipt/8/`);
    const { data: receipt2 } = await api.get(`/api/home/receipt/29/`);
    const { data: receipt3 } = await api.get(`/api/home/receipt/30/`);
    const { data: receipt4 } = await api.get(`/api/home/receipt/31/`);
    receipt.splice(0, 4, receipt1, receipt2, receipt3, receipt4);
    await this.setState({
      receipt,
    });
    console.log(receipt);
    await this.setState({
      loading: false,
    });
  }

  render() {
    return <SavedRsvnView {...this.state} />;
  }
}
