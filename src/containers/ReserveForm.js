import React, { Component } from 'react';
import ReserveFormView from '../components/ReserveFormView';
import { withRouter } from 'react-router-dom';
import api from '../api';
import { withSearch } from '../contexts/SearchContext';

class ReserveForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      num_guest: this.props.adult + this.props.children,
      room: this.props.roomId,
    };
  }

  async handleBook() {
    if (localStorage.getItem('token')) {
      const { checkin, checkout, adult, infant, children } = this.props;
      const { room: roomId } = this.state;
      console.log(checkin, checkout, adult, infant, children);
      this.props.history.push(
        `/reserve/${roomId}?&adult=${adult}&children=${children}&infant=${infant}&checkin=${checkin}&checkout=${checkout}`
      );
    } else {
      alert('로그인이 되어있지 않습니다. 로그인해주세요.');
    }
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

export default withRouter(withSearch(ReserveForm));
