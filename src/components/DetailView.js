import React, { Component } from 'react';
import style from './Detail.module.scss';
export default class DetailView extends Component {
  render() {
    return (
      <div>
        <div className={style.imgWrapper}>
          <div className={style.mainImg}>사진1</div>
          <div className={style.subImgWrapper}>
            <div className={style.subImg}>사진2</div>
            <div className={style.subImg}>사진3</div>
          </div>
          <div className={style.subImgWrapper}>
            <div className={style.subImg}>사진4</div>
            <div className={style.subImg}>사진5</div>
          </div>
        </div>
        <div className={style.contentsWrapper}>
          <div className={style.roomInfo}>숙소정보 들어올 곳</div>
          <div className={style.reservationFrom}>
            <p className={style.price}>₩198,821 /박</p>
            <hr />
            <p>날짜</p>
            <input type="text" />
            <p>인원</p>
            <input type="text" />
            <button className={style.reserveBtn}>예약요청</button>
          </div>
        </div>
      </div>
    );
  }
}
