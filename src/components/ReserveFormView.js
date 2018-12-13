import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './Detail.module.scss';
import PeopleControlView from './PeopleControlView';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { withSearch } from '../contexts/SearchContext';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Dates from '../containers/Dates';

class ReserveFormView extends React.PureComponent {
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.sticky !== nextState.sticky || false;
  // }

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
      onBook,
      price,
      children,
      adult,
      roomId,
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
            ₩{price * (children + adult || 1)} /
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

            <Dates />
          </div>
          <PeopleControlView />
          <Link to={`/reserve/${roomId}`}>
            <button className={style.reserveBtn} onClick={onBook}>
              예약요청
            </button>
          </Link>
          <div className={style.notice}>
            <small>예약 확정 전에는 요금이 청구되지 않습니다</small>
          </div>
        </form>
      </div>
    );
  }
}

export default withSearch(ReserveFormView);
