import React, { Component } from 'react';
import style from './SavedRsvnView.module.scss';
import img from '../components/imgs/giftImg.png';
import { withUser } from '../contexts/UserContext';

class SavedRsvnView extends Component {
  render() {
    return (
      <div className={style.Container}>
        <section className={style.infoMain}>
          <div className={style.title}>다음여행지를 골라보세요</div>
          <div className={style.body}>
            친구들에게 ₩32,000(을)를 선물하여 에어비앤비로 초대해 보세요. 친구가
            에어비앤비를 통해 첫 예약을 할 경우 회원님은 ₩16,000의 여행 크레딧을
            받게 됩니다.
          </div>
          <img className={style.giftImg} src={img} alt="gift img" />
          <button className={style.inviteFriend}>친구 초대하기</button>
        </section>
        <section className={style.previousRsvn}>
          <div className={style.partTitle}>이전예약</div>
        </section>
      </div>
    );
  }
}

export default withUser(SavedRsvnView);
