import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './Detail.module.scss';

export default class ReserveFormView extends Component {
  render() {
    return (
      <div className={style.formWrapper}>
        <div className={style.reservationFrom}>
          <p className={style.price}>
            ₩198,821 /<span className={style.park}>박</span>
          </p>
          <div className={style.starwrapper}>
            <Star className={style.star} />
            <Star className={style.star} />
            <Star className={style.star} />
            <Star className={style.star} />
            <Star className={style.star} />
          </div>
          <div className={style.devider} />
          <p className={style.date}>날짜</p>
          <input className={style.dateInput} type="text" />
          <p className={style.person}>인원</p>
          <input className={style.personInput} type="text" />
          <button className={style.reserveBtn}>예약요청</button>
        </div>
      </div>
    );
  }
}
