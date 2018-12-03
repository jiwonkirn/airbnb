import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './RoomList.module.scss';
import { Link, withRouter } from 'react-router-dom';

class ListView extends Component {
  render() {
    const { rooms } = this.props;
    const { themeName } = this.props;
    return (
      <div className={style.listWrapper}>
        <h1 className={style.listTitle}>{themeName}</h1>
        <div className={style.roomInfoWrapper}>
          {rooms.map(room => (
            <Link className={style.roomInfo} to={`/room-detail/${room.pk}`}>
              <img className={style.roomImg} src={room.roominfo.room_photo_1} />
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
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ListView);
