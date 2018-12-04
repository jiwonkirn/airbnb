import React, { Component } from 'react';
import ReserveFormView from '../components/ReserveFormView';
import api from '../api';
import { withSearch } from '../contexts/SearchContext';

class ReserveForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      check_out_date: '',
      check_in_date: '',
      num_guest: this.props.adult + this.props.children,
      room: this.props.roomId,
    };
  }
  handleChangeCheckin(checkin) {
    this.setState({
      check_in_date: checkin,
    });
  }
  handleChangeCheckout(checkout) {
    this.setState({
      check_out_date: checkout,
    });
  }
  async handleBook() {
    const { check_out_date, check_in_date, num_guest, room } = this.state;
    await api.post('/api/home/booking/', {
      check_out_date,
      check_in_date,
      num_guest,
      room,
    });
  }
  handleSelect(e) {
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }
  render() {
    console.log(this.state);
    return (
      <ReserveFormView
        {...this.state}
        onSelect={e => this.handleSelect(e)}
        onChangeCheckin={checkin => this.handleChangeCheckin(checkin)}
        onChangeCheckout={checkout => this.handleChangeCheckout(checkout)}
        onBook={() => this.handleBook()}
      />
    );
  }
}

export default withSearch(ReserveForm);
