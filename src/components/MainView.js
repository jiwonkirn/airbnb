import React, { Component } from 'react';
import style from './MainView.module.scss';
import img from './Homeimg.png';
import classNames from 'classnames';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { withSearch } from '../contexts/SearchContext';
import PeopleControlView from './PeopleControlView';
import { withUser } from '../contexts/UserContext';

class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: null,
      selected: false,
      desselected: false,
    };
  }

  handleSubmit(e) {
    const cityName = e.target.value;
    if (e.keyCode === 13) {
      this.props.handleSearch(cityName);
    }
  }

  handleFocus(e) {
    e.preventDefault();
    this.setState({
      desselected: true,
    });
  }

  handleBlur(e) {
    e.preventDefault();
    this.setState({
      desselected: false,
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      cityName: e.target.value,
    });
  }

  handleSelect(e) {
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }
  async handlePlus(e, name) {
    await this.props.onHandleChange(name, this.props[name] + 1);
  }

  async handleMinus(e, name) {
    if (this.props[name] > 0) {
      await this.props.onHandleChange(name, this.props[name] - 1);
    }
  }

  handleCloseBtn(e) {
    this.setState({
      selected: false,
    });
  }

  render() {
    const { adult, children, infant, selected, locationPath } = this.state;
    const optionBtn = classNames(style.optionBox, {
      [style.active]: selected,
    });
    const personInput = classNames(style.personInput, {
      [style.active]: selected,
    });
    return (
      <div className="MainView">
        <div
          class={style.mainimg}
          style={{
            backgroundImage: 'url(' + img + ')',
          }}
        >
          <div className={style.mainrsvn}>
            <h1 className={style.title}>
              에어비앤비에서 한국의 숙소를 찾아보세요
            </h1>
            <div className={style.parttitle}>
              혼자 하는 여행에 적합한 개인실부터 여럿이 함께하는 여행에 좋은 집
              전체 숙소까지, 에어비앤비엔 다 있습니다.
            </div>
            <div className={style.magicsearch}>
              <div className={style.Destination}>
                <label className={style.destinationlabel}>목적지</label>
                <input
                  style={
                    this.state.desselected === true
                      ? { borderColor: '#008489' }
                      : { borderColor: '#ebebeb' }
                  }
                  onKeyDown={e => this.handleSubmit(e)}
                  onFocus={e => this.handleFocus(e)}
                  onBlur={e => this.handleBlur(e)}
                  onChange={e => this.handleChange(e)}
                  type="search"
                  className={style.desSear}
                  required
                  placeholder="모든위치"
                />
              </div>
              <div className={style.checkin}>
                <label className={style.checkinlabel}>체크인</label>
              </div>
              <div className={style.checkout}>
                <label className={style.checkoutlabel}>체크아웃</label>
              </div>
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
              <PeopleControlView />
              {locationPath !== 'home' && (
                <button
                  className={style.searchbtn}
                  onClick={() =>
                    this.props.handleHomeSearch(this.state.cityName)
                  }
                >
                  검색
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(withSearch(MainView));
