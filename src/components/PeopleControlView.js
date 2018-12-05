import React, { Component } from 'react';
import style from './PeopleControl.module.scss';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import PeopleControlForm from './PeopleControlForm';
import { withRouter } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';

class PeopleControlView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      locationPath: '',
    };
  }

  componentDidMount() {
    if (this.props.match.path === '/') {
      this.setState({
        locationPath: 'home',
      });
    } else if (this.props.match.path === '/search-list') {
      this.setState({
        locationPath: 'list',
      });
    }
  }

  refreshLocation() {}

  handleSelect = () => {
    this.setState({
      selected: this.state.selected ? false : true,
    });
  };

  render() {
    const { locationPath } = this.state;
    const { adult, children, infant } = this.props;
    return (
      <div
        className={style.personInputWrapper}
        style={locationPath === '' ? { width: '100%' } : null}
      >
        {locationPath !== 'list' ? (
          <div>
            <label>
              <small>인원</small>
            </label>
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
            <PeopleControlForm
              {...this.state}
              onHandleChange={(name, value) =>
                this.props.handleChange(name, value)
              }
              onHandleSelect={this.handleSelect}
              onHandleInitialize={this.props.handleInitialize}
              onHandlePeopleSearch={this.props.handlePeopleSearch}
              {...this.props}
            />
          </div>
        ) : (
          <div className={style.peopleItem}>
            <li
              className={style.peopleItemButton}
              onClick={this.handleSelect}
              style={
                !(adult === 0 && children === 0 && infant === 0)
                  ? { backgroundColor: '#008489', color: '#fff' }
                  : null
              }
            >
              {adult === 0 && children === 0 && infant === 0 ? (
                <span>인원</span>
              ) : (
                <span>
                  게스트 {adult + children}명{' '}
                  {infant !== 0 ? `,유아 ${infant}명` : null}
                </span>
              )}
            </li>
            <PeopleControlForm
              {...this.state}
              onHandleChange={(name, value) =>
                this.props.handleChange(name, value)
              }
              onHandleSelect={this.handleSelect}
              onHandleInitialize={this.props.handleInitialize}
              onHandlePeopleSearch={this.props.handlePeopleSearch}
              theme={'list'}
              {...this.props}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withSearch(withRouter(PeopleControlView));
