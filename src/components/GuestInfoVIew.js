import React, { Component } from 'react';
import style from './GuestInfoView.module.scss';
import RoomInfoView from './RoomInfoView';
import PeopleControlForm from './PeopleControlForm';
import PeopleControlView from './PeopleControlView';
import { Link } from 'react-router-dom';

export default class GuestInfoVIew extends Component {
  render() {
    const { roomId } = this.props;
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
          <Link to={`/pay/${roomId}`}>
            <button className={style.continueBtn}>계속하기</button>
          </Link>
        </div>
        <RoomInfoView {...this.props} />
      </div>
    );
  }
}
