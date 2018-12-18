import React, { Component } from 'react';
import DateView from '../components/DateView';
import { withSearch } from '../contexts/SearchContext';
import { withRouter } from 'react-router-dom';
import api from '../api';

class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin: '',
      checkout: '',
      bookingInfo: [],
      loading: true,
    };
  }

  // TODO: 예약이 불가능한 날짜를 가져와서 내려준다.
  async componentDidMount() {
    const { search } = this.props.location;
    const { roomId } = this.props.match.params;
    const params = new URLSearchParams(search);
    const checkin = params.get('checkin') == '0' ? null : params.get('checkin');
    const checkout =
      params.get('checkout') == '0' ? null : params.get('checkout');
    this.setState({
      checkin,
      checkout,
      loading: false,
    });
    if (roomId) {
      const {
        data: { booking_info: bookingInfo },
      } = await api.get(`/api/home/listings/${roomId}/`);
      this.setState({
        bookingInfo,
      });
    }
  }

  render() {
    return <DateView {...this.state} />;
  }
}

export default withRouter(withSearch(Dates));
