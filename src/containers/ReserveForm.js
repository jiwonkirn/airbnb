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

  async handleBook() {
    const { checkin: check_in_date, checkout: check_out_date } = this.props;
    const { num_guest, room } = this.state;
    // await api.post('/api/home/booking/', {
    //   check_in_date,
    //   check_out_date,
    //   num_guest,
    //   room: room.toString(),
    // });

    console.log(
      `체크인 날짜: ${check_in_date}, 체크아웃 날짜: ${check_out_date}, 게스트: ${num_guest}명, 방pk: ${room}`
    );
  }

  handleSelect(e) {
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }

  render() {
    const { roomId } = this.props;
    return (
      <ReserveFormView
        price={this.props.price}
        {...this.state}
        onSelect={e => this.handleSelect(e)}
        onBook={() => this.handleBook()}
        roomId={roomId}
      />
    );
  }
}

export default withSearch(ReserveForm);
