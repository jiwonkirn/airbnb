import React, { Component } from 'react';
import style from './PeopleControl.module.scss';
import classNames from 'classnames';
import { ReactComponent as Minus } from '../svg/minus.svg';
import { ReactComponent as Plus } from '../svg/plus.svg';
// import { withSearch } from '../contexts/SearchContext';

export default class PeopleControlForm extends Component {
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

  handleSearchSelector = () => {
    if (this.props.location.pathname === '/search-list/detail') {
      this.props.onHandleSubSearch();
    } else {
      this.props.onHandlePeopleSearch();
    }
  };

  render() {
    const {
      adult,
      children,
      infant,
      locationPath,
      // location: { pathname },
    } = this.props;
    const { theme } = this.props;
    const buttonClass = classNames(style.optionBox, {
      [style.active]: this.props.selected,
      [style.list]: theme === 'list' ? true : false,
    });
    return (
      <div className={buttonClass}>
        <div className={style.optionType}>
          <div className={style.type}>성인</div>
          <div className={style.number}>
            <button
              className={style.minus}
              onClick={e => this.handleMinus(e, 'adult')}
            >
              <Minus className={style.minusCompo} />
            </button>
            <div className={style.result}>{adult}</div>
            <button
              className={style.plus}
              onClick={e => this.handlePlus(e, 'adult')}
            >
              <Plus className={style.plusCompo} />
            </button>
          </div>
        </div>
        <div className={style.optionType}>
          <div>
            어린이 <span>2~12세</span>
          </div>
          <div className={style.number}>
            <button
              onClick={e => this.handleMinus(e, 'children')}
              className={style.minus}
            >
              <Minus className={style.minusCompo} />
            </button>
            <div className={style.result}>{children}</div>
            <button
              onClick={e => this.handlePlus(e, 'children')}
              className={style.plus}
            >
              <Plus className={style.plusCompo} />
            </button>
          </div>
        </div>
        <div className={style.optionType}>
          <div>
            유아 <span>2세 미만</span>
          </div>
          <div className={style.number}>
            <button
              onClick={e => this.handleMinus(e, 'infant')}
              className={style.minus}
            >
              <Minus className={style.minusCompo} />
            </button>
            <div className={style.result}>{infant}</div>
            <button
              onClick={e => this.handlePlus(e, 'infant')}
              className={style.plus}
            >
              <Plus className={style.plusCompo} />
            </button>
          </div>
        </div>
        {locationPath !== 'home' && locationPath !== 'reserve' ? (
          <div>
            <span
              className={style.deleteButton}
              onClick={this.props.onHandleInitialize}
            >
              초기화
            </span>
            <span
              className={style.addButton}
              onClick={this.props.handleSearchSelector}
            >
              적용
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}
