import React, { Component } from 'react';
import ReserveFormView from '../components/ReserveFormView';
import api from '../api';

export default class ReserveForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adult: 0,
      children: 0,
      infant: 0,
      selected: false,
      check_out_date: '',
      check_in_date: '',
      num_guest: '',
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
  // async handleBook() {
  //   const { heck_out_date, check_in_date, num_guest, room } = this.state;
  //   await api.post('/api/home/booking/', {
  //     heck_out_date,
  //     check_in_date,
  //     num_guest,
  //     room,
  //   });
  // }
  handlePlusAdult() {
    this.setState({
      adult: this.state.adult + 1,
    });
  }
  handlePlusChildren() {
    this.setState({
      children: this.state.children + 1,
    });
  }
  handlePlusInfant() {
    this.setState({
      infant: this.state.infant + 1,
    });
  }
  handleMinusAdult() {
    this.setState({
      adult: this.state.adult - 1,
    });
  }
  handleMinusChildren() {
    this.setState({
      children: this.state.children - 1,
    });
  }
  handleMinusInfant() {
    this.setState({
      infant: this.state.infant - 1,
    });
  }
  handleSelect(e) {
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }
  render() {
    return (
      <ReserveFormView
        {...this.state}
        onMinusAdult={() => this.handleMinusAdult()}
        onPlusAdult={() => this.handlePlusAdult()}
        onMinusChildren={() => this.handleMinusChildren()}
        onPlusChildren={() => this.handlePlusChildren()}
        onMinusInfant={() => this.handleMinusInfant()}
        onPlusInfant={() => this.handlePlusInfant()}
        onSelect={e => this.handleSelect(e)}
        onChangeCheckin={checkin => this.handleChangeCheckin(checkin)}
        onChangeCheckout={checkout => this.handleChangeCheckout(checkout)}
      />
    );
  }
}
