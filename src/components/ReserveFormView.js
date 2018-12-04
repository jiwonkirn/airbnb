import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { ReactComponent as Minus } from '../svg/minus.svg';
import { ReactComponent as Plus } from '../svg/plus.svg';
import style from './Detail.module.scss';
import classNames from 'classnames';
import PeopleControlView from './PeopleControlView';
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
      selected,

      check_out_date,
      check_in_date,
      onChangeCheckin,
      onChangeCheckout,
      onBook,
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
          <PeopleControlView />
          <button className={style.reserveBtn} onClick={onBook}>
            예약요청
          </button>
          <div className={style.notice}>
            <small>예약 확정 전에는 요금이 청구되지 않습니다</small>
          </div>
        </form>
      </div>
    );
  }
}
