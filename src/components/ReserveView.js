import React, { Component } from 'react';
import style from './ReserveView.module.scss';
import { ReactComponent as SelfCheckin } from '../svg/selfcheckin.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import withCommonLoading from '../hoc/CommonLoading';
import { withSearch } from '../contexts/SearchContext';
import { withUser } from '../contexts/UserContext';
import RoomInfoView from './RoomInfoView';
import ReserveNav from './ReserveNav';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Child } from '../svg/child.svg';
import { ReactComponent as Pet } from '../svg/pet.svg';
import { ReactComponent as Party } from '../svg/party.svg';
import { ReactComponent as Smoke } from '../svg/smoke.svg';
class ReserveView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreclick: false,
      checkin: '',
      checkout: '',
      day: [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
      ],
      modalclick: false,
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
  componentDidMount() {
    const location = this.props.location;
    const params = new URLSearchParams(location.search);
    console.log(params);
    const checkin = params.get('checkin');
    const checkout = params.get('checkout');
    this.setState({
      checkin,
      checkout,
    });
  }
  async handleModal() {
    await this.setState({
      modalclick: this.state.modalclick === true ? false : true,
    });
    this.props.handleFixModal(this.state.modalclick);
  }
  render() {
    const {
      public_address,
      notices,
      room_photos,
      roomId,
      adult,
      children,
      infant,
      checkin,
      checkout,
      device,
      price,
    } = this.props;
    console.log(room_photos);
    const checkinYear = this.state.checkin.split('-')[0];
    const checkinMounth = this.state.checkin.split('-')[1];
    const checkinDate = this.state.checkin.split('-')[2];
    const checkoutYear = this.state.checkout.split('-')[0];
    const checkoutMounth = this.state.checkout.split('-')[1];
    const checkoutDate = this.state.checkout.split('-')[2];
    const checkinDay = new Date(this.state.checkin).getDay();
    const checkoutDay = new Date(this.state.checkout).getDay();
    const iconMap = {
      어린이와유아에게적합함: <Child />,
      반려동물동반불가: <Pet />,
      파티나이벤트금지: <Party />,
      흡연금지: <Smoke />,
    };
    console.log(this.state.modalclick);
    return (
      <div>
        <ReserveNav />
        <div className={style.ruleContainer}>
          <h1 className={style.ruleTitle}>숙소 이용규칙 확인하기</h1>
          <h2>
            {public_address} {parseInt(checkoutDate) - parseInt(checkinDate)}일
          </h2>
          <ul className={style.dates}>
            <li className={style.date}>
              {' '}
              <div className={style.exactDate}>
                <p>{checkinMounth}월</p>
                <p className={style.checkDate}>{checkinDate}</p>
              </div>{' '}
              <div className={style.checkin}>
                <p>체크인: {this.state.day[checkinDay]}</p>
                <p>15:00 - 02:00(다음 날)</p>
              </div>
            </li>
            <li className={style.date}>
              <div className={style.exactDate}>
                <p>{checkoutMounth}월</p>
                <p className={style.checkDate}>{checkoutDate}</p>
              </div>
              <div className={style.checkout}>
                <p>체크아웃: {this.state.day[checkoutDay]}</p>
                <p>12:00</p>
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
              <li className={style.noticeItem}>
                {' '}
                <div className={style.noticeIcon}>
                  {iconMap[notice.split(' ').join('')]}
                </div>
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
          {device === 'desktop' ? (
            <Link
              to={`/guest-info/${roomId}?&adult=${adult}&children=${children}&infant=${infant}&checkin=${checkin}&checkout=${checkout}`}
            >
              <button className={style.continueBtn}>동의 및 계속하기</button>
            </Link>
          ) : device === 'mobile' ? (
            <div className={style.continueBtnWrapper}>
              <div>
                <ul>
                  <li>₩{price}</li>
                  <li>{parseInt(checkoutDate) - parseInt(checkinDate)}박</li>
                </ul>
                <button
                  onClick={() => this.handleModal()}
                  className={style.more2}
                >
                  자세히 보기
                </button>
              </div>
              <Link
                to={`/guest-info/${roomId}?&adult=${adult}&children=${children}&infant=${infant}&checkin=${checkin}&checkout=${checkout}`}
              >
                <button className={style.continueBtn}>동의</button>
              </Link>
            </div>
          ) : null}
          {this.state.modalclick === true ? (
            <div className={style.roomInfoViewWrapper}>
              <RoomInfoView
                checkinYear={checkinYear}
                checkinMounth={checkinMounth}
                checkinDate={checkinDate}
                checkoutYear={checkoutYear}
                checkoutMounth={checkoutMounth}
                checkoutDate={checkoutDate}
                {...this.props}
                modalclick={this.state.modalclick}
                onModal={() => this.handleModal()}
              />
            </div>
          ) : null}
        </div>
        {device === 'desktop' ? (
          <RoomInfoView
            checkinYear={checkinYear}
            checkinMounth={checkinMounth}
            checkinDate={checkinDate}
            checkoutYear={checkoutYear}
            checkoutMounth={checkoutMounth}
            checkoutDate={checkoutDate}
            {...this.props}
          />
        ) : device === 'mobile' ? null : null}
      </div>
    );
  }
}

export default withCommonLoading(withSearch(withRouter(withUser(ReserveView))));
