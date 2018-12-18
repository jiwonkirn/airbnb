import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './DateView.scss';
import { DateRangePicker } from 'react-dates';
import { withSearch } from '../contexts/SearchContext';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Cross } from '../svg/cross.svg';
var moment = require('moment');

class DateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      lisplay: 'block',
      display: 'none',
    };
  }

  // 로딩이 다 되면 날짜의 기본값을 채워넣는다.
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.loading && prevProps.loading) {
      const { checkin, checkout } = this.props;
      if (checkin && checkout) {
        this.setState({
          startDate: moment(checkin).local(),
          endDate: moment(checkout).local(),
        });
        console.log(this.state.startDate);
      }
    }
  }

  // 날짜 정보를 '2018-12-10'의 형태로 바꿔주는 메소드
  handleDateString = day => {
    return new Date(day)
      .toLocaleString()
      .split('. ')
      .slice(0, 3)
      .map(item => (item.length === 1 ? '0' + item : item))
      .join('-');
  };

  // 날짜 정보를 모두 입력하면 날짜 정보를 바꿔준다.
  handleSearch = async () => {
    const {
      handlePersonCapacitySearch,
      handleChange,
      handleSubSearch,
    } = this.props;
    await handleChange('checkin', this.handleDateString(this.state.startDate));
    await handleChange('checkout', this.handleDateString(this.state.endDate));
    if (
      this.props.match.path !== '/' &&
      this.props.location.pathname !== '/search-list/detail'
    ) {
      handlePersonCapacitySearch();
    } else if (this.props.location.pathname === '/search-list/detail') {
      handleSubSearch();
    }
  };

  // 특정 날짜의 예약을 막는 메소드
  handleBlock = day => {
    const { bookingInfo } = this.props;
    const blockedDate = bookingInfo.some(item => {
      return (
        item.check_in_date === this.handleDateString(day._d) ||
        item.reserved_dates.some(
          innerItem => innerItem === this.handleDateString(day._d)
        )
      );
    });
    if (blockedDate) {
      return true;
    }
  };

  handleModal = () => {
    this.setState(prev => {
      return {
        display: prev.display === 'none' ? 'block' : 'none',
        lisplay: prev.lisplay === 'block' ? 'none' : 'block',
      };
    });
  };

  handleIntitialDates = async () => {
    const {
      handlePersonCapacitySearch,
      handleChange,
      handleSubSearch,
    } = this.props;
    await this.setState({
      startDate: 0,
      endDate: 0,
    });
    await handleChange('checkin', 0);
    await handleChange('checkout', 0);
    if (
      this.props.match.path !== '/' &&
      this.props.location.pathname !== '/search-list/detail'
    ) {
      handlePersonCapacitySearch();
    } else if (this.props.location.pathname === '/search-list/detail') {
      handleSubSearch();
    }
  };

  render() {
    const bool =
      this.props.match.path === '/search-list' ||
      this.props.match.path === '/search-list/detail' ||
      this.props.match.path === '/date';
    const { startDate, endDate } = this.state;
    const { path } = this.props.match;
    return (
      <div style={{ position: 'relative' }}>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={async ({ startDate, endDate }) => {
            await this.setState({ startDate, endDate });
            if (this.state.endDate) {
              this.handleSearch();
            }
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            this.setState({ focusedInput });
          }}
          readOnly={true}
          isDayBlocked={this.handleBlock}
          small={bool}
          withPortal={bool}
          block={!bool}
          endDatePlaceholderText="체크아웃"
          startDatePlaceholderText="체크인"
          anchorDirection={path === '/room-detail/:roomId' ? 'right' : 'left'}
          showClearDates={true}
        />
        <Cross
          onClick={this.handleIntitialDates}
          className="initialButton"
          style={
            this.props.match.path === '/search-list'
              ? {
                  right: '12px',
                  width: '10px',
                }
              : {
                  right: '18px',
                  width: '15px',
                }
          }
        >
          X
        </Cross>
      </div>
    );
  }
}

export default withRouter(withSearch(DateView));
