import React, { Component } from 'react';
import ReserveFormView from '../components/ReserveFormView';
import { withRouter } from 'react-router-dom';
import api from '../api';
import { withSearch } from '../contexts/SearchContext';
import { withUser } from '../contexts/UserContext';

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
    const { checkin, checkout, adult, infant, children } = this.props;
    if (children + adult === 0 || checkout === '' || checkin === '') {
      alert('인원, 날짜는 필수 입력값입니다.');
    } else if (localStorage.getItem('token') === null) {
      alert('로그인이 되어있지 않습니다. 로그인해주세요.');
    } else {
      const { room: roomId } = this.state;
      this.props.history.push(
        `/reserve/${roomId}?&adult=${adult}&children=${children}&infant=${infant}&checkin=${checkin}&checkout=${checkout}`
      );
    }
  }

  handleSelect(e) {
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }

  render() {
    const { roomId, device, mobileReservation } = this.props;
    if (device === 'desktop') {
      return (
        <ReserveFormView
          price={this.props.price}
          {...this.state}
          onSelect={e => this.handleSelect(e)}
          onBook={() => this.handleBook()}
          roomId={roomId}
          handleMobileReservation={this.props.mobileReservation}
        />
      );
    } else if (device !== 'desktop') {
      {
        return (
          mobileReservation && (
            <ReserveFormView
              price={this.props.price}
              {...this.state}
              onSelect={e => this.handleSelect(e)}
              onBook={() => this.handleBook()}
              roomId={roomId}
              handleMobileReservation={this.props.handleMobileReservation}
            />
          )
        );
      }
    }
  }
}

export default withUser(withRouter(withSearch(ReserveForm)));
