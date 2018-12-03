import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import style from './Detail.module.scss';
import classNames from 'classnames';

export default class ReserveFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guest: 1,
      adult: 1,
      children: 1,
      infant: 1,
      selected: false,
    };
  }

  handleSelect(e) {
    e.preventDefault();
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }
  render() {
    const { selected } = this.state;
    const buttonClass = classNames(style.optionBox, {
      [style.active]: selected,
    });
    console.log(selected);
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
              <button
                onClick={e => this.handleSelect(e)}
                className={style.personInput}
                type="button"
              >
                <div className={style.capicity}>{`게스트 ${
                  this.state.guest
                }명`}</div>
                <div className={style.arrowDownBox}>
                  <ArrowDown className={style.arrowDown} />
                </div>
              </button>
              <div className={buttonClass}>
                <div className={style.optionType}>
                  <label htmlFor="">성인</label>
                  <select name="" id="" />
                </div>
                <div className={style.optionType}>
                  <label htmlFor="">
                    어린이 <span>2~12세</span>
                  </label>
                  <select value="" name="" id="" />
                </div>
                <div className={style.optionType}>
                  <label htmlFor="">유아</label>
                  <select name="" id="" />
                </div>
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
