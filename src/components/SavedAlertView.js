import React, { Component } from 'react';
import { ReactComponent as Cross } from '../svg/cross.svg';
import style from './SavedAlertView.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default class SavedAlertView extends Component {
  render() {
    const { alert, saved, handleClear } = this.props;
    const alertView = classNames(style.savedAlert, { [style.alert]: alert });
    return (
      <section className={alertView}>
        <span className={style.body}>
          {'저장 목록에' + (saved ? ' 저장되었습니다.' : '서 삭제되었습니다.')}
        </span>
        <Link to="/saved" className={style.linkToList}>
          목록보기
        </Link>
        <Cross onClick={handleClear} className={style.close} />
      </section>
    );
  }
}
