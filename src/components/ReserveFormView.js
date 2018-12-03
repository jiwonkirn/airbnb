import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { ReactComponent as Minus } from '../svg/minus.svg';
import { ReactComponent as Plus } from '../svg/plus.svg';
import style from './Detail.module.scss';
import classNames from 'classnames';

export default class ReserveFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adult: 0,
      children: 0,
      infant: 0,
      selected: false,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleSelect(e) {
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }
  handlePlusAdult(e) {
    this.setState({
      adult: this.state.adult + 1,
    });
  }
  handlePlusChildren(e) {
    this.setState({
      children: this.state.children + 1,
    });
  }
  handlePlusInfant(e) {
    this.setState({
      infant: this.state.infant + 1,
    });
  }
  handleMinusAdult(e) {
    this.setState({
      adult: this.state.adult - 1,
    });
  }
  handleMinusChildren(e) {
    this.setState({
      children: this.state.children - 1,
    });
  }
  handleMinusInfant(e) {
    this.setState({
      infant: this.state.infant - 1,
    });
  }
  render() {
    const { adult, children, infant, selected } = this.state;
    const buttonClass = classNames(style.optionBox, {
      [style.active]: selected,
    });
    console.log(selected);
    return (
      <div className={style.formWrapper}>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className={style.reservationFrom}
        >
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
                <div className={style.capicity}>{`게스트 ${adult +
                  children}명`}</div>
                <div>{`유아${infant}`}</div>
                <div className={style.arrowDownBox}>
                  <ArrowDown className={style.arrowDown} />
                </div>
              </button>
              <div className={buttonClass}>
                <div className={style.optionType}>
                  <div className={style.type}>성인</div>
                  <div className={style.number}>
                    <button className={style.minus}>
                      <Minus
                        onClick={e => this.handleMinusAdult(e)}
                        className={style.minusCompo}
                      />
                    </button>
                    <div className={style.result}>{adult}</div>
                    <button className={style.plus}>
                      <Plus
                        onClick={e => this.handlePlusAdult(e)}
                        className={style.plusCompo}
                      />
                    </button>
                  </div>
                </div>
                <div className={style.optionType}>
                  <div>
                    어린이 <span>2~12세</span>
                  </div>
                  <div className={style.number}>
                    <button
                      onClick={e => this.handleMinusChildren(e)}
                      className={style.minus}
                    >
                      <Minus className={style.minusCompo} />
                    </button>
                    <div className={style.result}>{children}</div>
                    <button
                      onClick={e => this.handlePlusChildren(e)}
                      className={style.plus}
                    >
                      <Plus className={style.plusCompo} />
                    </button>
                  </div>
                </div>
                <div className={style.optionType}>
                  <div>유아 <span>2세 미만</span></div>
                  <div className={style.number}>
                    <button
                      onClick={e => this.handleMinusInfant(e)}
                      className={style.minus}
                    >
                      <Minus className={style.minusCompo} />
                    </button>
                    <div className={style.result}>{infant}</div>
                    <button
                      onClick={e => this.handlePlusInfant(e)}
                      className={style.plus}
                    >
                      <Plus className={style.plusCompo} />
                    </button>
                  </div>
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
