import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './RoomListLoading.module.scss';

export default class RoomListLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className={style.listWrapper}>
        <h1 className={style.listTitle}>로딩중입니다...</h1>
        <p className={style.listBody}>
          퀄리티와 편안함이 검증된 숙소 컬렉션을 소개합니다. 잠시만
          기다려주세요.
        </p>
        <div className={style.roomInfoWrapper}>
          {items.map(item => (
            <section key={item} className={style.roomInfo}>
              <div className={style.roomImg} />
              <p className={style.roomLocation} />
              <p className={style.roomTitle} />
              <p className={style.roomPrice} />
              <div className={style.starWrapper}>
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
}
