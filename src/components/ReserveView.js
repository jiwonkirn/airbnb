import React, { Component } from 'react';
import style from './ReserveView.module.scss';
import { ReactComponent as SelfCheckin } from '../svg/selfcheckin.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Guest } from '../svg/guest.svg';
import { ReactComponent as Calender } from '../svg/calender.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as QuestionMark } from '../svg/questionMark.svg';
import withCommonLoading from '../hoc/CommonLoading';
import { withSearch } from '../contexts/SearchContext';
class ReserveView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreclick: false,
    };
  }
  handleMore() {
    this.setState({
      moreclick: this.state.moreclick === true ? false : true,
    });
  }
  handleOption(e) {
    e.preventDefault();
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
      public_address,
      notices,
      room_photos,
      adult,
      children,
      checkIn,
      checkOut,
      price,
    } = this.props;
    console.log(room_photos);
    return (
      <div>
        <div className={style.ruleContainer}>
          <h1 className={style.ruleTitle}>숙소 이용규칙 확인하기</h1>
          <h2>{public_address} 1박</h2>
          <ul className={style.dates}>
            <li className={style.date}>
              {' '}
              <div className={style.exactDate}>
                <p>월</p>
                <p>일</p>
              </div>{' '}
              <div className={style.checkin}>
                <p>체크인:</p>
                <p>16:00</p>
              </div>
            </li>
            <li className={style.date}>
              <div className={style.exactDate}>
                <p>월</p>
                <p>일</p>
              </div>
              <div className={style.checkout}>
                <p>체크아웃:</p>
                <p>16:00</p>
              </div>
            </li>
          </ul>
          <div className={style.selfCheckin}>
            <SelfCheckin className={style.selfIcon} />
            <p className={style.self}>키패드(으)로 셀프 체크인</p>
          </div>
          <hr className={style.devider} />
          <h2>주의할 사항</h2>
          <ul className={style.noticeList}>
            {notices.map(notice => (
              <li>
                {' '}
                <div className={style.noticeIcon} />
                <p className={style.noticeText}>{notice}</p>
              </li>
            ))}
          </ul>
          {this.state.moreclick ? (
            <div>
              <h3>추가규칙</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                nemo saepe doloribus fuga illo voluptate, aperiam dolores animi
                delectus eaque laborum! Est natus, doloribus fuga officiis ipsam
                vitae architecto magnam?Ab velit architecto nam itaque expedita,
                ut inventore porro aliquam sed mollitia labore adipisci delectus
                doloribus perferendis quaerat, nostrum sit ipsam maiores dolores
                pariatur! Inventore mollitia cum vitae autem dolorum?
              </p>
              <button
                className={style.morebtn}
                onClick={() => this.handleMore()}
              >
                {' '}
                <p className={style.more}> 숨기기</p>{' '}
                <ArrowDown className={style.arrowDown} />
              </button>
            </div>
          ) : (
            <button className={style.morebtn} onClick={() => this.handleMore()}>
              {' '}
              <p className={style.more}> 더보기</p>{' '}
              <ArrowDown className={style.arrowDown} />
            </button>
          )}
          <h2 className={style.optionTitle}>
            Kim님의 숙소를 예약하려면 다음 옵션 중에서 선택하세요.
          </h2>
          <ul>
            <li className={style.optionItem}>
              <input
                className={style.select}
                type="radio"
                onClick={e => this.handleOption(e)}
              />{' '}
              <p className={style.optionText}>
                신분증 인증은 예약을 확정할 수 있는 가장 빠른 방법입니다. 신분증
                정보는 누구에게도 공개되지 않으며, 만료 전까지는 같은 절차를
                반복하실 필요가 없습니다.
              </p>
            </li>
            <li className={style.optionItem}>
              <input
                className={style.select}
                type="radio"
                onClick={e => this.handleOption(e)}
              />{' '}
              <p className={style.optionText}>
                신분증을 인증할 필요는 없지만, 예약 확인에 최대 24시간이 소요될
                수 있습니다. 이 시간 동안 다른 사람이 해당 숙소를 예약할 수도
                있어요.
              </p>
            </li>
          </ul>
          <button className={style.continueBtn}>동의 및 계속하기</button>
        </div>
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
                  src={room_photos[roomId - 1].room_photo}
                  className={style.mainImg}
                  alt={room_photos[roomId - 1].room_photo}
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
      </div>
    );
  }
}

export default withCommonLoading(withSearch(ReserveView));
