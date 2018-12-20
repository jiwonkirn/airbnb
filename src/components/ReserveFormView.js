import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Cross } from '../svg/cross.svg';
import { ReactComponent as HelfStar } from '../svg/helfStar.svg';
import style from './Detail.module.scss';
import PeopleControlView from './PeopleControlView';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { withSearch } from '../contexts/SearchContext';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Dates from '../containers/Dates';
import { withUser } from '../contexts/UserContext';

class ReserveFormView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      sticky: false,
      stars: [1, 2, 3, 4, 5],
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
    const currentScroll = window.scrollY;
    if (currentScroll > 555 && this.lastScrollY <= 555) {
      this.setState({
        sticky: true,
      });
    } else if (this.lastScrollY > 555 && currentScroll <= 555) {
      this.setState({
        sticky: false,
      });
    }
    this.lastScrollY = currentScroll;
  };

  render() {
    const {
      check_out_date,
      check_in_date,
      checkout,
      checkin,
      onBook,
      price,
      children,
      adult,
      roomId,
      device,
      rate_average,
    } = this.props;
    const { stars } = this.state;
    const stickyClass = classNames(style.formWrapper, {
      [style.sticky]: this.state.sticky,
    });
    return (
      <div className={stickyClass}>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className={style.reservationFrom}
        >
          {device !== 'desktop' && (
            <Cross
              onClick={this.props.handleMobileReservation}
              className={style.cross}
            />
          )}
          <p className={style.price}>
            ₩
            {price *
              ((children + adult) *
                ((new Date(checkout) - new Date(checkin)) / 86400000) ||
                1)}{' '}
            /<span className={style.park}>박</span>
          </p>
          <div className={style.starwrapper}>
            {stars.map((star, index) =>
              star <= rate_average ? (
                <Star className={style.star} />
              ) : star < parseFloat(rate_average) + 1 ? (
                <div className={style.helfStarbox}>
                  <HelfStar className={style.helfStar} />
                  <Star className={style.star2} />
                </div>
              ) : (
                <Star className={style.star2} />
              )
            )}
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

export default withUser(withSearch(ReserveFormView));
