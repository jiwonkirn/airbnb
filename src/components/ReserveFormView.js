import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import style from './Detail.module.scss';

export default class ReserveFormView extends Component {
  render() {
    return (
      <div className={style.formWrapper}>
        <form className={style.reservationFrom}>
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
          <div>
            <label className={style.dateLabel} for={style.dateInputWrapper}>
              {' '}
              <small>날짜</small>{' '}
            </label>
            <div className={style.dateInputWrapper}>
              <input
                className={style.checkInInput}
                type="text"
                placeholder="체크인"
              />
              <div className={style.arrowBox}>
                <Arrow className={style.arrow} />
              </div>
              <input
                className={style.checkOutInput}
                type="text"
                placeholder="체크아웃"
              />
            </div>
          </div>
          <div>
            <label for={style.personInputWrapper}>
              <small>인원</small>
            </label>
            <div className={style.personInputWrapper}>
              <div className={style.personInput} type="text" />
              <div>
                <label htmlFor="">성인</label>
                <select name="" id="" />
              </div>
            </div>
          </div>
          <button className={style.reserveBtn}>예약요청</button>
          <div className={style.notice}>
            {' '}
            <small>예약 확정 전에는 요금이 청구되지 않습니다</small>
          </div>
        </form>
      </div>
    );
  }
}
