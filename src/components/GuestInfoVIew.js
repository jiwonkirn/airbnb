import React, { Component } from 'react';
import style from './GuestInfoView.module.scss';
import RoomInfoView from './RoomInfoView';
import PeopleControlForm from './PeopleControlForm';
import PeopleControlView from './PeopleControlView';
import { Link, withRouter } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';

class GuestInfoVIew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkin: '',
      checkout: '',
    };
  }

  componentDidMount() {
    const location = this.props.location;
    const params = new URLSearchParams(location.search);
    const checkin = params.get('checkin');
    const checkout = params.get('checkout');
    this.setState({
      checkin,
      checkout,
    });
  }
  render() {
    const { roomId, adult, children, infant, checkin, checkout } = this.props;
    const checkinYear = this.state.checkin.split('-')[0];
    const checkinMounth = this.state.checkin.split('-')[1];
    const checkinDate = this.state.checkin.split('-')[2];
    const checkoutYear = this.state.checkout.split('-')[0];
    const checkoutMounth = this.state.checkout.split('-')[1];
    const checkoutDate = this.state.checkout.split('-')[2];
    return (
      <div>
        <div className={style.guestInfoContainer}>
          <h1 className={style.guestTitle}>일행이 있나요?</h1>
          <h2 className={style.subTitle}>인원</h2>
          <div className={style.guestOption}>
            <PeopleControlForm />
            <PeopleControlView />
          </div>
          <h2 className={style.subTitle}>호스트에게 인사하기</h2>
          <p className={style.greeting}>
            Kim님에게 간단히 자신을 소개하고 여행 목적에 대해 알려주세요.{' '}
          </p>
          <textarea
            className={style.textArea}
            name=""
            id=""
            cols="30"
            rows="10"
          />
          <Link
            to={`/pay/${roomId}?&adult=${adult}&children=${children}&infant=${infant}&checkin=${checkin}&checkout=${checkout}`}
          >
            <button className={style.continueBtn}>계속하기</button>
          </Link>
        </div>
        <RoomInfoView
          checkinYear={checkinYear}
          checkinMounth={checkinMounth}
          checkinDate={checkinDate}
          checkoutYear={checkoutYear}
          checkoutMounth={checkoutMounth}
          checkoutDate={checkoutDate}
          {...this.props}
        />
      </div>
    );
  }
}

export default withRouter(withSearch(GuestInfoVIew));
