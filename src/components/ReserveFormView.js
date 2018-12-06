import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './Detail.module.scss';
import PeopleControlView from './PeopleControlView';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { withSearch } from '../contexts/SearchContext';
import classNames from 'classnames';
class ReserveFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      sticky: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    let lastScrollY = window.scrollY;
    if (lastScrollY > 555) {
      this.setState({
        sticky: true,
      });
    } else {
      this.setState({
        sticky: false,
      });
    }
  };
  render() {
    const {
      check_out_date,
      check_in_date,
      onChangeCheckin,
      onChangeCheckout,
      onBook,
      price,
      children,
      adult,
    } = this.props;

    console.log(check_out_date, check_in_date);
    const stickyClass = classNames(style.formWrapper, {
      [style.sticky]: this.state.sticky,
    });
    return (
      <div className={stickyClass}>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className={style.reservationFrom}
        >
          <p className={style.price}>
            ₩{price * (children + adult)} /
            <span className={style.park}>박</span>
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
              onDatesChange={async ({ startDate, endDate }) => {
                this.setState({ startDate, endDate });
                await onChangeCheckin(this.state.startDate);
                await onChangeCheckout(this.state.endDate);
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

export default withSearch(ReserveFormView);
