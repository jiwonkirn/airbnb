import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { ReactComponent as Minus } from '../svg/minus.svg';
import { ReactComponent as Plus } from '../svg/plus.svg';
import style from './Detail.module.scss';
import classNames from 'classnames';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

export default class ReserveFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: '',
      endDate: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  async handleReserve() {
    //Todo: 서버측에 체크인, 체크아웃, 룸아이디, 인원 정보를 전달하는 코드
  }

  render() {
    const {
      adult,
      children,
      infant,
      selected,
      onSelect,
      onMinusAdult,
      onPlusAdult,
      onMinusChildren,
      onPlusChildren,
      onMinusInfant,
      onPlusInfant,
      check_out_date,
      check_in_date,
      onChangeCheckin,
      onChangeCheckout,
    } = this.props;

    console.log(check_out_date, check_in_date);
    console.log(this.state.startDate, this.state.endDate);
    const buttonClass = classNames(style.optionBox, {
      [style.active]: selected,
    });
    console.log(this.state.guest);
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
            <label className={style.dateLabel} htmlFor={style.dateInputWrapper}>
              {' '}
              <small>날짜</small>{' '}
            </label>

            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => {
                this.setState({ startDate, endDate });
                onChangeCheckin(this.state.startDate);
                onChangeCheckout(this.state.endDate);
              }} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          </div>
          <div>
            <label htmlFor={style.personInputWrapper}>
              <small>인원</small>
            </label>
            <div className={style.personInputWrapper}>
              <button
                onClick={e => onSelect(e)}
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
                        onClick={onMinusAdult}
                        className={style.minusCompo}
                      />
                    </button>
                    <div className={style.result}>{adult}</div>
                    <button className={style.plus}>
                      <Plus onClick={onPlusAdult} className={style.plusCompo} />
                    </button>
                  </div>
                </div>
                <div className={style.optionType}>
                  <div>
                    어린이 <span>2~12세</span>
                  </div>
                  <div className={style.number}>
                    <button className={style.minus}>
                      <Minus
                        className={style.minusCompo}
                        onClick={onMinusChildren}
                      />
                    </button>
                    <div className={style.result}>{children}</div>
                    <button className={style.plus}>
                      <Plus
                        className={style.plusCompo}
                        onClick={onPlusChildren}
                      />
                    </button>
                  </div>
                </div>
                <div className={style.optionType}>
                  <div>
                    유아 <span>2세 미만</span>
                  </div>
                  <div className={style.number}>
                    <button className={style.minus}>
                      <Minus
                        className={style.minusCompo}
                        onClick={onMinusInfant}
                      />
                    </button>
                    <div className={style.result}>{infant}</div>
                    <button className={style.plus}>
                      <Plus
                        className={style.plusCompo}
                        onClick={onPlusInfant}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className={style.reserveBtn}
            onClick={() => this.handleReserve()}
          >
            예약요청
          </button>
          <div className={style.notice}>
            {' '}
            <small>예약 확정 전에는 요금이 청구되지 않습니다</small>
          </div>
        </form>
      </div>
    );
  }
}
