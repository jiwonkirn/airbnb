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
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import withCommonLoading from '../hoc/CommonLoading';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import SaveButton from './SaveButton';

let lastScrollY = window.scrollY;

class DetailView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalclick: false,
      moreInfo: false,
      sticky: false,
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
  handleMoreInfo() {
    this.setState({
      moreInfo: this.state.moreInfo === true ? false : true,
    });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.sticky !== nextState.sticky || false;
  // }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    let lastScrollY = window.scrollY;
    if (lastScrollY > 555) {
      this.setState({
        sticky: true,
      });
    } else if (lastScrollY < 555) {
      this.setState({
        sticky: false,
      });
    }
  };

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
      ...rest
    } = this.props;
    console.log(this.state.sticky);

    return (
      <div>
        {this.state.sticky ? (
          <div className={style.subNav}>
            <ul className={style.navList}>
              <li>개요</li>
              <li>위치</li>
              <li>호스트</li>
              <li>위치</li>
              <li>환불정책</li>
            </ul>
          </div>
        ) : null}

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
          <SaveButton roomId={roomId} {...rest} />
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
            <div className={style.devider} />
            <div>
              <h3 className={style.category2}>호스트: Alex님</h3>
              <img
                className={style.hostImg2}
                src={hostimages.host_thumbnail_url}
                alt="host_thumbnail"
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, quia. Temporibus, odio blanditiis labore dolorum
              aliquam repudiandae, sapiente officiis fugit quas placeat a sed
              sint mollitia, nesciunt quia voluptatum facere. Pariatur, ex?
              Reiciendis eaque animi nobis exercitationem maxime dicta ipsa
              rerum ut voluptatum, impedit adipisci amet? Fuga, iste molestiae
              suscipit dicta eius sunt odio, voluptatum qui quae a ratione
              recusandae. Consectetur nostrum fugiat labore provident facere
              quia, laborum deserunt voluptatem facilis, quos ut doloribus fuga
              expedita. Fugiat vero, dolore ab maxime accusantium quasi velit
              possimus saepe esse sed neque officiis!
            </p>
            <div className={style.devider} />
            <h className={style.category2}>지역정보</h>
            <ul className={style.location}>
              <li>특징,</li>
              <li>Alex님의 숙소는 {public_address}에 있습니다.</li>
              {this.state.moreInfo === false ? (
                <li className={style.moreInfo}>
                  <p onClick={() => this.handleMoreInfo()}>
                    이 지역 자세히 알아보기
                  </p>
                  <ArrowDown className={style.arrowDown} />
                </li>
              ) : null}
            </ul>
            {this.state.moreInfo ? (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                enim perspiciatis obcaecati quibusdam quasi expedita at,
                asperiores ipsum, alias est voluptas. Expedita accusamus nostrum
                nobis! Tempore, quae dolorem. Labore, harum. Nemo, tempore velit
                necessitatibus quo eaque exercitationem. Excepturi sunt ducimus
                dolores suscipit quae accusantium enim dignissimos architecto
                necessitatibus? Non, ex voluptates eveniet expedita quam eum
                molestiae cumque eaque tenetur repudiandae! Pariatur
                reprehenderit excepturi incidunt voluptas, laudantium rem odio
                architecto fuga debitis odit nihil ipsa, consectetur eligendi!
                Aliquid vel explicabo incidunt natus adipisci quidem eius
                pariatur harum tenetur dolor, fugiat voluptatibus. Libero maxime
                aspernatur aliquid iusto repudiandae sapiente, veritatis id ex a
                vitae iste minus fugiat saepe, porro quod veniam cumque quo enim
                corporis nemo animi natus dolore accusantium. Possimus,
                inventore. Fugiat at architecto quo debitis incidunt rem ducimus
                perspiciatis dolores amet quas reiciendis, accusantium quaerat
                odit asperiores, facere placeat! Est rerum, expedita ratione
                vitae commodi minima vel. Dolores, aut saepe!
                <div className={style.moreInfo}>
                  <p onClick={() => this.handleMoreInfo()}>숨기기</p>
                  <ArrowDown className={style.arrowDown} />
                </div>
              </div>
            ) : null}
            <div className={style.map} />
            <p>정확한 위치 정보는 예약이 확정된 후 알려드립니다.</p>
          </div>
          <ReserveForm price={this.props.price} roomId={roomId} />
        </div>
      </div>
    );
  }
}

export default withCommonLoading(DetailView);
