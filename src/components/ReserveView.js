import React, { Component } from 'react';
import style from './ReserveView.module.scss';
import { ReactComponent as SelfCheckin } from '../svg/selfcheckin.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
export default class extends Component {
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
    } = this.props;
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
        </div>
        <div className={style.infoContainer}>임시</div>
      </div>
    );
  }
}
