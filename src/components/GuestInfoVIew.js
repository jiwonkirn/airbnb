import React, { Component } from 'react';
import style from './GuestInfoView.module.scss';
import RoomInfoView from './RoomInfoView';
import PeopleControlForm from './PeopleControlForm';
import PeopleControlView from './PeopleControlView';
import { Link, withRouter } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import { withUser } from '../contexts/UserContext';

class GuestInfoVIew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkin: '',
      checkout: '',
      comment: '',
      modalclick: false,
    };
  }
  handleValue(e) {
    this.setState({
      comment: e.target.value,
    });
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
  handleContinue() {
    const { roomId, adult, children, infant, checkin, checkout } = this.props;
    if (this.state.comment) {
      this.props.history.push(
        `/pay/${roomId}?&adult=${adult}&children=${children}&infant=${infant}&checkin=${checkin}&checkout=${checkout}`
      );
    } else {
      alert('호스트에게 간단히 자신을 소개하고 여행 목적에 대해 알려주세요.');
    }
  }
  async handleModal() {
    await this.setState({
      modalclick: this.state.modalclick === true ? false : true,
    });
    this.props.handleFixModal(this.state.modalclick);
  }
  render() {
    const {
      roomId,
      adult,
      children,
      infant,
      checkin,
      checkout,
      device,
      price,
    } = this.props;
    const checkinYear = this.state.checkin.split('-')[0];
    const checkinMounth = this.state.checkin.split('-')[1];
    const checkinDate = this.state.checkin.split('-')[2];
    const checkoutYear = this.state.checkout.split('-')[0];
    const checkoutMounth = this.state.checkout.split('-')[1];
    const checkoutDate = this.state.checkout.split('-')[2];
    const { comment } = this.state.comment;
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
            onChange={e => this.handleValue(e)}
            className={style.textArea}
            name=""
            id=""
            cols="30"
            rows="10"
            value={comment}
          />
          {device === 'desktop' || device === 'tablet' ? (
            <button
              onClick={() => this.handleContinue()}
              className={style.continueBtn}
            >
              계속하기
            </button>
          ) : device === 'mobile' ? (
            <div className={style.continueBtnWrapper}>
              <div>
                <ul>
                  <li>₩{price}</li>
                  <li>{parseInt(checkoutDate) - parseInt(checkinDate)}박</li>
                </ul>
                <button
                  onClick={() => this.handleModal()}
                  className={style.more2}
                >
                  자세히 보기
                </button>
              </div>
              <button
                onClick={() => this.handleContinue()}
                className={style.continueBtn}
              >
                계속하기
              </button>
            </div>
          ) : null}
          {this.state.modalclick === true ? (
            <div className={style.roomInfoViewWrapper}>
              <RoomInfoView
                checkinYear={checkinYear}
                checkinMounth={checkinMounth}
                checkinDate={checkinDate}
                checkoutYear={checkoutYear}
                checkoutMounth={checkoutMounth}
                checkoutDate={checkoutDate}
                {...this.props}
                modalclick={this.state.modalclick}
                onModal={() => this.handleModal()}
              />
            </div>
          ) : null}
        </div>
        {device === 'desktop' || device === 'tablet' ? (
          <RoomInfoView
            checkinYear={checkinYear}
            checkinMounth={checkinMounth}
            checkinDate={checkinDate}
            checkoutYear={checkoutYear}
            checkoutMounth={checkoutMounth}
            checkoutDate={checkoutDate}
            {...this.props}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(withSearch(withUser(GuestInfoVIew)));
