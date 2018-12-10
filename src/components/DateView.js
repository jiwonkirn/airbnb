import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { withSearch } from '../contexts/SearchContext';
import { withRouter } from 'react-router-dom';
var moment = require('moment');

class DateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
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
    const { handlePersonCapacitySearch, handleChange } = this.props;
    await handleChange('checkin', this.handleDateString(this.state.startDate));
    await handleChange('checkout', this.handleDateString(this.state.endDate));
    if (this.props.match.path !== '/') {
      handlePersonCapacitySearch();
    }
  };

  // 특정 날짜의 예약을 막는 메소드
  handleBlock = day => {
    if (this.handleDateString(day._d) === '2018-12-20') {
      return true;
    }
  };

  render() {
    // if (
    //   this.props.match.path === '/search-list' ||
    //   this.props.match.path === '/date'
    // ) {
    //   return (
    //     <DayPickerRangeController
    //       startDate={this.state.startDate} // momentPropTypes.momentObj or null,
    //       endDate={this.state.endDate} // momentPropTypes.momentObj or null,
    //       onDatesChange={({ startDate, endDate }) =>
    //         this.setState({ startDate, endDate })
    //       } // PropTypes.func.isRequired,
    //       focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    //       onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    //       readOnly={false}
    //     />
    //   );
    // } else {
    return (
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
      />
    );
    // }
  }
}

export default withRouter(withSearch(DateView));
