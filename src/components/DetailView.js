import React, { Component } from 'react';
import style from './Detail.module.scss';
import ReserveForm from '../containers/ReserveForm';

export default class DetailView extends Component {
  render() {
    const {
      room_name,
      room_type,
      city,
      room_and_property_type,
      person_capacity,
      bedrooms,
      beds,
      bathrooms,
      roominfo,
      hostimages,
      roomId,
    } = this.props;
    return (
      <div>
        <div className={style.imgWrapper}>
          <div className={style.responsive1}>
            <img
              src={roominfo.room_photo_1}
              className={style.mainImg}
              alt={roominfo.room_photo_1}
            />
          </div>
          <div className={style.subWrapper}>
            <img
              src={roominfo.room_photo_2}
              className={style.subImg}
              alt={roominfo.room_photo_2}
            />

            <img
              src={roominfo.room_photo_3}
              className={style.subImg}
              alt={roominfo.room_photo_3}
            />

            <img
              src={roominfo.room_photo_4}
              className={style.subImg}
              alt={roominfo.room_photo_4}
            />

            <img
              src={roominfo.room_photo_5}
              className={style.subImg}
              alt={roominfo.room_photo_5}
            />
          </div>
        </div>
        <div className={style.contentsWrapper}>
          <div className={style.roomInfo}>
            <p className={style.roomType}>{room_type}</p>
            <h2 className={style.roomName}>{room_name}</h2>
            <p className={style.city}>{city}</p>
            <img
              className={style.hostImg}
              src={hostimages.host_thumbnail_url}
              alt="host_thumbnail"
            />
            <div>
              <h3 className={style.category}>{room_and_property_type}</h3>
              <ul className={style.roomProperty}>
                <li>인원 {person_capacity}개</li>
                <li>침실 {bedrooms}개</li>
                <li>침대 {beds}개</li>
                <li>욕실 {bathrooms}개</li>
              </ul>
            </div>
            <div>
              <h3 className={style.category}>{room_and_property_type}</h3>
              <ul className={style.roomProperty}>
                <li>인원 {person_capacity}개</li>
                <li>침실 {bedrooms}개</li>
                <li>침대 {beds}개</li>
                <li>욕실 {bathrooms}개</li>
              </ul>
            </div>
            <div>
              <h3 className={style.category}>{room_and_property_type}</h3>
              <ul className={style.roomProperty}>
                <li>인원 {person_capacity}개</li>
                <li>침실 {bedrooms}개</li>
                <li>침대 {beds}개</li>
                <li>욕실 {bathrooms}개</li>
              </ul>
            </div>
            <div className={style.devider} />
            <button className={style.transe}>
              이 설명을 한국어로 번역하기
            </button>
            <div>
              <h3 className={style.category}>숙소</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nam est voluptates velit fugiat recusandae a ipsum aut
                saepe earum provident possimus error reiciendis, tenetur
                exercitationem, incidunt minima fugit itaque.
              </p>
            </div>
            <div className={style.devider} />
            <div>
              <h3 className={style.category}>편의시설</h3>
              <ul className={style.roomProperty}>
                <li>케이블 TV</li>
                <li>WIFI</li>
                <li>주차장</li>
                <li>난방</li>
              </ul>
            </div>
          </div>
          <ReserveForm roomId={roomId} />
        </div>
      </div>
    );
  }
}
