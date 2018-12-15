import React, { Component } from 'react';
import { ReactComponent as Cross } from '../svg/cross.svg';
import style from './SavedAlertView.module.scss';
import classNames from 'classnames';

export default class SavedAlertView extends Component {
  render() {
    const { alert, saved } = this.props;
    const alertView = classNames(style.savedAlert, { [style.alert]: alert });
    return (
      <section className={alertView}>
        <span className={style.body}>
          {'저장 목록에' + (saved ? ' 저장되었습니다.' : '서 삭제되었습니다.')}
        </span>
        <span className={style.linkToList}>목록보기</span>
        <Cross className={style.close} />
      </section>
    );
  }
}
