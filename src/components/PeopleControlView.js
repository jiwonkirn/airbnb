import React, { Component } from 'react';
import style from './PeopleControl.module.scss';
import classNames from 'classnames';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { ReactComponent as Minus } from '../svg/minus.svg';
import { ReactComponent as Plus } from '../svg/plus.svg';
import PeopleControlForm from './PeopleControlForm';
import { withRouter } from 'react-router-dom';

class PeopleControlView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      adult: 0,
      children: 0,
      infant: 0,
      location: '',
    };
  }

  componentDidMount() {
    if (this.props.match.path === '/search-list') {
      this.setState({
        location: 'list',
      });
    }
    console.log(this.props.match);
  }

  handleSelect = () => {
    this.setState({
      selected: this.state.selected ? false : true,
    });
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleInitialize = () => {
    this.setState({
      adult: 0,
      children: 0,
      infant: 0,
    });
  };

  render() {
    const { adult, children, infant, selected, location } = this.state;

    return (
      <div
        className={style.personInputWrapper}
        style={location === '' ? { width: '100%' } : null}
      >
        {location === '' ? (
          <div>
            <label for={style.personInputWrapper}>
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
              onHandleChange={this.handleChange}
              onHandleSelect={this.handleSelect}
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
              onHandleChange={this.handleChange}
              onHandleSelect={this.handleSelect}
              onHandleInitialize={this.handleInitialize}
              theme={'list'}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(PeopleControlView);
