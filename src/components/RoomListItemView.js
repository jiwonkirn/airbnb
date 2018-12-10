import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './RoomList.module.scss';

export default class RoomListItemView extends Component {
  render() {
    const { room } = this.props;
    return (
      <>
        <div
          style={{ backgroundImage: `url(${room.room_photos[0].room_photo})` }}
          className={style.roomImg}
        />
        <p className={style.roomLocation}>{room.city}</p>
        <p className={style.roomTitle}>{room.room_name}</p>
        <p className={style.roomPrice}>{room.price}원</p>
        <div className={style.starWrapper}>
          <Star className={style.star} />
          <Star className={style.star} />
          <Star className={style.star} />
          <Star className={style.star} />
          <Star className={style.star} />
        </div>
      </>
    );
  }
}
