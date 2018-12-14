import React, { Component } from 'react';
import style from './ReserveView.module.scss';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Guest } from '../svg/guest.svg';
import { ReactComponent as Calender } from '../svg/calender.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as QuestionMark } from '../svg/questionMark.svg';
import { withSearch } from '../contexts/SearchContext';
import withCommonLoading from '../hoc/CommonLoading';

class RoomInfoView extends Component {
  render() {
    const {
      room_name,
      room_type,
      roomId,
      public_address,
      room_photos,
      adult,
      children,
      price,
    } = this.props;
    return (
      <div className={style.infoContainer}>
        <div className={style.infoBox}>
          <div className={style.mainInfo}>
            <div className={style.textInfo}>
              <h2 className={style.roomType}>{room_name}</h2>
              <p>
                {public_address}의 {room_type}
              </p>
              <div className={style.starBox}>
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
              </div>
            </div>
            <div className={style.mainImgWrapper}>
              <img
                src={room_photos[0].room_photo}
                className={style.mainImg}
                alt={room_photos[0].room_photo}
              />
            </div>
          </div>
          <hr className={style.devider} />
          <div className={style.subWrapper}>
            <ul className={style.guestDateContainer}>
              <li className={style.guestInfo}>
                {' '}
                <div className={style.iconWrapper}>
                  <Guest className={style.guest} />
                </div>{' '}
                <p>게스트 {adult + children}명</p>
              </li>
              <li className={style.dateInfo}>
                <div className={style.iconWrapper}>
                  <Calender className={style.calender} />
                </div>
                <p className={style.checkIn} />
                <div className={style.iconWrapper}>
                  <Arrow className={style.calender} />
                </div>
                <p className={style.checkOut} />
              </li>
            </ul>
            <hr className={style.devider} />
            <ul>
              <li className={style.priceInfo}>
                {' '}
                <p className={style.roomPrice}>₩{price} x 1박</p>
                <p className={style.extra}> ₩{price * 1}</p>{' '}
              </li>
              <li className={style.priceInfo}>
                {' '}
                <div className={style.serviceWrapper}>
                  <p className={style.roomPrice}>서비스 수수료</p>
                  <div className={style.questionIcon}>
                    <QuestionMark className={style.questionMark} />
                  </div>
                </div>
                <p className={style.extra}> 아직 정보 없음</p>{' '}
              </li>
              <li />
            </ul>
            <hr className={style.devider} />
            <div className={style.totalPrice}>
              <p>총합계(KRW)</p>
              <p>₩ 정보없음</p>
            </div>
            <hr className={style.devider} />
          </div>
        </div>
      </div>
    );
  }
}
export default withCommonLoading(withSearch(RoomInfoView));
