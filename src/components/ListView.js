import React, { Component } from "react";
import { ReactComponent as Star } from "../svg/star.svg";
import style from "../css/List.module.scss";
import style2 from "../css/Star.module.scss";

export default class ListView extends Component {
  render() {
    const { rooms } = this.props;
    return (
      <div className={style.listWrapper}>
        <h1 className={style.listTitle}>전세계의 숙소</h1>
        <div className={style.roomInfoWrapper}>
          {rooms.map(room => (
            <div className={style.roomInfo}>
              <div className={style.roomImg} />
              <p className={style.roomLocation}>{room.location}</p>
              <p className={style.roomTitle}>{room.title}</p>
              <p className={style.roomPrice}>{room.price}</p>
              <div className={style.starwrapper}>
                <Star className={style2.star} />
                <Star className={style2.star} />
                <Star className={style2.star} />
                <Star className={style2.star} />
                <Star className={style2.star} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
