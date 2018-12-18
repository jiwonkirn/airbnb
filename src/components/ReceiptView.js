import React, { Component } from 'react';
import style from './ReceiptView.module.scss';

export default class ReceiptView extends Component {
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
      amenities,
      public_address,
      price,
      room_photos,
      room_info_1,
      room_host,
      lat,
      lng,
      id,
      room,
      guest,
      num_guest,
      check_in_date,
      check_out_date,
      ...rest
    } = this.props;
    return (
      <div className={style.container}>
        <div className={style.reserveTitle}>
          <h2 className={style.partTile}>
            확정된 예약: {city} 에서
            {parseInt(check_out_date) - parseInt(check_in_date)}박
          </h2>
          <div className={style.user}>예약자: </div>
          <div className={style.date} />
          <div clssName={style.checkInWrapper}>
            <div className={style.checkin}>체크인</div>
            <div className={style.checkinDate}>{check_in_date}</div>
          </div>
          <div className={style.checkOutWrapper}>
            <div className={style.checkout}>체크아웃</div>
            <div className={style.checkoutDate}>{check_out_date}</div>
          </div>
          <section className={style.paymentWrapper}>
            <h3 className={style.paymentTitle}>청구액</h3>
            <div className={style.price}>
              ₩{price} x {parseInt(check_out_date) - parseInt(check_in_date)}박
            </div>
          </section>
        </div>
      </div>
    );
  }
}
