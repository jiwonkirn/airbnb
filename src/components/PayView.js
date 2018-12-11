import React, { Component } from 'react';
import ReserveNav from './ReserveNav';
import RoomInfoView from './RoomInfoView';
import style from './PayView.module.scss';
import { ReactComponent as CreditCard } from '../svg/creditCard.svg';
import { ReactComponent as VisaCard } from '../svg/visaCard.svg';
import { ReactComponent as Card2 } from '../svg/card2.svg';
import { ReactComponent as Card3 } from '../svg/card3.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';

export default class PayView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonclick: false,
    };
  }
  handleButton() {
    this.setState({
      buttonclick: this.state.buttonclick === true ? false : true,
    });
  }
  render() {
    const { roomId } = this.props;
    return (
      <div>
        <ReserveNav />
        <div className={style.PayInfoContainer}>
          <h1 className={style.payTitle}>확인 및 결제</h1>
          <div className={style.a}>
            <div className={style.pay}>
              <p className={style.subTitle}>결제 수단</p>
              <div className={style.cardWrapper}>
                <VisaCard className={style.visaCard} />
                <Card2 className={style.card2} />
                <Card3 className={style.card3} />
              </div>
            </div>
            <button className={style.creditCardbtn}>
              <div>
                <CreditCard className={style.cardIcon} />
                <p className={style.cardText}>신용카드</p>
              </div>
              <ArrowDown className={style.arrowDown} />
            </button>
            <ul className={style.nameWrapper}>
              <li>
                {' '}
                <label className={style.subTitle} htmlFor={style.nameInput}>
                  이름
                </label>{' '}
                <input className={style.nameInput} type="text" />{' '}
              </li>
              <li>
                <label
                  className={style.subTitle}
                  htmlFor={style.familyNameInput}
                >
                  성
                </label>{' '}
                <input className={style.familyNameInput} type="text" />{' '}
              </li>
            </ul>
            <label className={style.subTitle} htmlFor={style.cardInfoWrapper}>
              카드 정보
            </label>
            <div className={style.cardInfoWrapper}>
              <ul className={style.cardInfoInputList}>
                <li className={style.cardNumber}>
                  {' '}
                  <input type="text" />{' '}
                </li>
                <li className={style.expireDate}>
                  {' '}
                  <input type="text" />{' '}
                </li>
                <li className={style.cvv}>
                  {' '}
                  <input type="text" />{' '}
                </li>
              </ul>
            </div>
            <ul className={style.nameWrapper}>
              <li>
                {' '}
                <label className={style.subTitle} htmlFor={style.nameInput}>
                  청구지 정보
                </label>{' '}
                <input className={style.nameInput} type="text" />{' '}
              </li>
              <li>
                <label
                  className={style.subTitle}
                  htmlFor={style.familyNameInput}
                >
                  결제 국가
                </label>{' '}
                <input className={style.familyNameInput} type="text" />{' '}
              </li>
            </ul>
            <button
              onClick={() => this.handleButton()}
              className={style.couponBtn}
            >
              쿠폰 사용하기
            </button>
            {this.state.buttonclick ? (
              <div>
                <input className={style.couponInput} type="text" />
                <button
                  onClick={() => this.handleButton()}
                  className={style.couponBtn}
                >
                  취소
                </button>
              </div>
            ) : null}
            <dl>
              <dt className={style.subTitle}>환불 정책</dt>
              <dd>
                체크인 5일 전까지 예약을 취소하면 요금 전액이 환불됩니다. 그
                이후 체크인 전에 취소하면 첫 1박 요금은 환불되지 않으나, 나머지
                숙박 요금의 50%가 환불됩니다.
              </dd>
            </dl>
            <p className={style.notice}>
              숙소 이용규칙, 환불 정책, 및 게스트 환불 정책에 동의합니다. 또한,
              서비스 수수료를 포함하여 명시된 총 금액을 결제하는 데 동의합니다.
            </p>
            <button className={style.finalReserveBtn}>예약 요청하기</button>
          </div>
        </div>
        <RoomInfoView {...this.props} roomId={roomId} />
      </div>
    );
  }
}
