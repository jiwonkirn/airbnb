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
          <h2 className={style.partTile}>확정된 예약: {check_in_date} </h2>
        </div>
      </div>
    );
  }
}
