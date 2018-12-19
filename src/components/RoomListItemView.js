import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as HelfStar } from '../svg/helfStar.svg';
import style from './RoomList.module.scss';

export default class RoomListItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [1, 2, 3, 4, 5],
    };
  }

  render() {
    const { room } = this.props;
    console.log(room.rate_average);
    console.log(this.props.room);
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
          <span>{room.rate_average}</span>
          {this.state.stars.map((star, index) =>
            star <= room.rate_average ? (
              <Star className={style.star} key={index} />
            ) : star < parseFloat(room.rate_average) + 1 ? (
              <HelfStar className={style.star} key={index} />
            ) : (
              <Star className={style.star2} key={index} />
            )
          )}
        </div>
      </>
    );
  }
}
