import React, { Component } from 'react';
import DateView from '../components/DateView';
import { withSearch } from '../contexts/SearchContext';
import { withRouter } from 'react-router-dom';

class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  // TODO: 예약이 불가능한 날짜를 가져와서 내려준다.
  componentDidMount() {
    const { search } = this.props.location;
    const params = new URLSearchParams(search);
    const checkin =
      params.get('checkin') === '0' ? null : params.get('checkin');
    const checkout =
      params.get('checkout') === '0' ? null : params.get('checkout');
    // console.log(checkin);
    this.setState({
      checkin,
      checkout,
      loading: false,
    });
  }

  render() {
    return <DateView {...this.state} />;
  }
}

export default withRouter(withSearch(Dates));
