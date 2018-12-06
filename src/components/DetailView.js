import React, { Component } from 'react';
import style from './Detail.module.scss';
import ReserveForm from '../containers/ReserveForm';
import { ReactComponent as Tv } from '../svg/tv.svg';
import { ReactComponent as Wireless } from '../svg/wireless.svg';
import { ReactComponent as Kitchen } from '../svg/kitchen.svg';
import { ReactComponent as Hair } from '../svg/hair.svg';
import { ReactComponent as Park } from '../svg/park.svg';
import { ReactComponent as Laptop } from '../svg/laptop.svg';
import { ReactComponent as Dryer } from '../svg/dryer.svg';
import { ReactComponent as Washer } from '../svg/washer.svg';
import { ReactComponent as Cross } from '../svg/cross.svg';
import withCommonLoading from '../hoc/CommonLoading';
import 'react-dates/initialize';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class DetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalclick: false,
    };
  }
  handleModal() {
    this.setState({
      modalclick: true,
    });
  }
  handleModalremove() {
    this.setState({
      modalclick: false,
    });
  }
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
      price,
    } = this.props;
    console.log(this.props);
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
              <ul className={style.amenities}>
                {amenities.map((amenity, index) =>
                  index < 6 ? (
                    <li className={style.amenity}>
                      <div className={style.icon}>
                        {amenity === 'tv' || amenity === 'cable' ? (
                          <Tv className={style.tv} />
                        ) : amenity === 'wireless_internet' ? (
                          <Wireless className={style.wireless} />
                        ) : amenity === 'kitchen' ? (
                          <Kitchen className={style.kitchen} />
                        ) : amenity === 'hair-dryer' ? (
                          <Hair className={style.hair} />
                        ) : amenity === 'paid_parking_on_premises' ? (
                          <Park className={style.park} />
                        ) : amenity === 'laptop-friendly' ? (
                          <Laptop className={style.laptop} />
                        ) : amenity === 'dryer' ? (
                          <Dryer className={style.dryer} />
                        ) : amenity === 'washer' ? (
                          <Washer className={style.washer} />
                        ) : null}
                      </div>
                      <p className={style.am}>{amenity}</p>
                    </li>
                  ) : null
                )}
              </ul>
              <p onClick={() => this.handleModal()}>
                {amenities.length}개의 편의시설 더보기
              </p>
            </div>
            {this.state.modalclick ? (
              <div className={style.modalWrapper}>
                <div className={style.amenityModal}>
                  <Cross
                    onClick={() => this.handleModalremove()}
                    className={style.cross}
                  />
                  <h3 className={style.modalTitle}>편의시설</h3>
                  <ul>
                    {amenities.map(amenity => (
                      <li>
                        {amenity}
                        <div className={style.devider} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
            <div className={style.devider} />
            <div>
              <h3 className={style.category}>예약 가능 여부</h3>
              <DayPickerRangeController />
            </div>
          </div>
          <ReserveForm price={this.props.price} roomId={roomId} />
        </div>
      </div>
    );
  }
}

export default withCommonLoading(DetailView);
