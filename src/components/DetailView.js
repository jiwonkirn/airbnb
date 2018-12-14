import React, { Component } from 'react';
import style from './Detail.module.scss';
import ReserveForm from '../containers/ReserveForm';
import Review from '../containers/Review';
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
import { ReactComponent as Iron } from '../svg/iron.svg';
import { ReactComponent as Hanger } from '../svg/hanger.svg';
import { ReactComponent as Elevator } from '../svg/elevator.svg';
import DaumMap1 from './DaumMap1';
import withCommonLoading from '../hoc/CommonLoading';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import SaveButton from './SaveButton';

let lastScrollY = window.scrollY;

class DetailView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalclick: false,
      moreInfo: false,
      sticky: false,
      ruleMore: false,
      review: 0,
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
  handleMoreRule() {
    this.setState({
      ruleMore: this.state.ruleMore === true ? false : true,
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
    // scroll 이벤트가 발생할 때마다 setState
    // let lastScrollY = window.scrollY;
    // if (lastScrollY > 555) {
    //   this.setState({
    //     sticky: true,
    //   });
    // } else if (lastScrollY < 555) {
    //   this.setState({
    //     sticky: false,
    //   });
    // }
    const currentScroll = window.scrollY;
    if (currentScroll > 555 && this.lastScrollY <= 555) {
      this.setState({
        sticky: true,
      });
    } else if (this.lastScrollY > 555 && currentScroll <= 555) {
      this.setState({
        sticky: false,
      });
    }
    this.lastScrollY = currentScroll;
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
      room_photos,
      room_info_1,
      room_info_2,
      room_info_3,
      room_info_4,
      room_host,
      lat,
      lng,
      ...rest
    } = this.props;
    const devided = room_info_1
      .split('\n\n')
      .map(item => item.split('\n'))
      .splice(1, 2);
    const devided2 = room_info_2.split('\n');
    const devided3 = room_info_3.split('\n');
    const devided4 = room_info_4.split('\n');
    const IconMap = {
      주방: <Kitchen />,
      건조기: <Dryer />,
      헤어드라이어: <Hair />,
      다리미: <Iron />,
      옷걸이: <Hanger />,
      무선인터넷: <Wireless />,
      건물내무료주차: <Park />,
      엘리베이터: <Elevator />,
    };
    console.log(lat, lng);
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
              src={room_photos[0].room_photo}
              className={style.mainImg}
              alt={room_photos[0].room_photo}
            />
          </div>
          <div className={style.subWrapper}>
            {room_photos.map(
              (item, index) =>
                index > 0 && (
                  <img
                    src={item.room_photo}
                    className={style.subImg}
                    alt={item.room_photo}
                    key={index}
                  />
                )
            )}
          </div>
          <SaveButton roomId={roomId} {...rest} />
        </div>

        <div className={style.contentsWrapper}>
          <div className={style.roomInfo}>
            <p className={style.roomType}>{room_type}</p>
            <h2 className={style.roomName}>{room_name}</h2>
            <p className={style.city}>{city}</p>
            <div className={style.host}>
              <img
                className={style.hostImg}
                src={hostimages.host_thumbnail_url}
                alt="host_thumbnail"
              />
              <label className={style.hostName} htmlFor={style.hostImg}>
                {room_host.last_name}
                {room_host.first_name}
              </label>
            </div>
            <div>
            <h3 className={style.category}>{room_and_property_type}</h3>
              <ul className={style.mainInfoList}>
                <li>인원 {person_capacity}명</li>
                <li>침실 {bedrooms}개</li>
                <li>침대 {beds}개</li>
                <li>욕실 {bathrooms}개</li>
              </ul>
            </div>
            {devided.map((item, index) => (
              <div key={index}>
                <h3 className={style.category}>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            ))}
            <div className={style.devider} />
            <button className={style.transe}>
              이 설명을 한국어로 번역하기
            </button>
            <div>
              <h3 className={style.category}>숙소</h3>
              {devided2.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              <div className={style.roomInfo2}>
                {devided3.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className={style.devider} />

            <div>
              <h3 className={style.category}>편의시설</h3>
              <ul className={style.amenities}>
                {devided4.map((amenity, index) => (
                  <li key={index} className={style.amenity}>
                    <div className={style.icon}>
                      {IconMap[amenity.split(' ').join('')]}
                    </div>
                    <p className={style.am}>{amenity}</p>
                  </li>
                ))}
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
                    {amenities.map((amenity, index) => (
                      <li key={index}>
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
            <Review roomId={roomId}/>
            <div>
              <h3 className={style.category2}>
                호스트: {room_host.last_name}
                {room_host.first_name}님
              </h3>
              <img
                className={style.hostImg2}
                src={hostimages.host_thumbnail_url}
                alt="host_thumbnail"
              />
            </div>
            <p className={style.hostIntroduce}>
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
            <h3 className={style.category2}>지역정보</h3>
            <ul className={style.location}>
              <li>
                {room_host.last_name}
                {room_host.first_name}님의 숙소는 {public_address}에 있습니다.
              </li>
              <li>지역 정보 특징이 들어와야 하는 자리(아직 정보 없음)</li>
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
            <div className={style.map}>
              <DaumMap1 {...this.props} />
            </div>
            <p>정확한 위치 정보는 예약이 확정된 후 알려드립니다.</p>
            <hr className={style.devider} />
            <h3 className={style.category2}>환불 정책</h3>
            <dl>
              <dt className={style.roomRuleList}>숙소 이용 규칙</dt>
              <dd className={style.roomRuleItem}>반려동물 동반 불가</dd>
              <dd className={style.roomRuleItem}>
                흡연, 파티 또는 이벤트 금지
              </dd>
              <dd className={style.roomRuleItem}>
                체크인 시간: 16:00 이후 언제나, 체크아웃 시간: 11:00까지
              </dd>
              <dd className={style.roomRuleItem}>키패드(으)로 셀프 체크인</dd>
            </dl>
            <button
              onClick={() => this.handleMoreRule()}
              className={style.roomRuleMore}
            >
              숙소 이용 규칙
            </button>
            {this.state.ruleMore ? (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quis rem quibusdam, in minima et sunt nostrum maxime nisi, totam
                quae, quas cum saepe molestias incidunt. Animi facere autem
                aliquid. Voluptas provident laborum dolorem expedita
                voluptatibus assumenda. Qui quam at voluptates? Natus debitis
                porro a eos ipsum, rerum nesciunt vero maxime tempora eum quia
                consequuntur eius itaque, molestias magnam! Tempora. Officia
                laudantium, placeat laborum fugit repellat enim totam neque cum
                eum expedita optio quidem numquam a consectetur pariatur tempore
                quam atque ullam dolores tempora facere, culpa nisi! Cum, iusto
                expedita.
              </div>
            ) : null}
            <hr className={style.devider} />
            <h4 className={style.subTitle}>예약 취소</h4>
            <dl>
              <dt className={style.subTitle}>일반 정책</dt>
              <dd>
                체크인 5일 전까지 예약을 취소하면 에어비앤비 서비스 수수료을
                제외한 요금이 환불됩니다.
              </dd>
            </dl>
            <div className={style.reserveRuleWrapper}>
              <ul className={style.reserveRuleList}>
                <li className={style.reserveRuleItem}>
                  체크인 5일 전까지 예약을 취소하면 에어비앤비 서비스 수수료을
                  제외한 요금이 환불됩니다.
                </li>
                <li className={style.reserveRuleItem}>
                  체크인까지 5일이 남지 않은 시점에 예약을 취소하면 첫 1박
                  요금과 나머지 숙박 요금의 50%는 환불되지 않습니다.
                </li>
                <li className={style.reserveRuleItem}>
                  에어비앤비 서비스 수수료는 예약 후 48시간 이내에 취소하고
                  체크인 전인 경우에만 환불됩니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={style.wrapper}>
            <ReserveForm price={this.props.price} roomId={roomId} />
          </div>
        </div>
      </div>
    );
  }
}

export default withCommonLoading(DetailView);
