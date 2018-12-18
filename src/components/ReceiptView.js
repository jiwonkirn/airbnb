import React, { Component } from 'react';
import style from './ReceiptView.module.scss';
import { ReactComponent as QuestionMark } from '../svg/questionMark.svg';
import { ReactComponent as ArrowRight } from '../svg/arrowRight.svg';

export default class ReceiptView extends Component {
  render() {
    const {
      id,
      room,
      guest,
      num_guest,
      check_in_date,
      check_out_date,
      room_city,
      room_price,
      room_public_address,
      room_host,
      room_name,
      created_date,
    } = this.props;
    return (
      <div className={style.container}>
        <div className={style.receiptOverview}>
          <h2 className={style.partTitle}>
            확정된 예약: {room_city} 에서
            {check_out_date.split('-')[2] - check_in_date.split('-')[2]}박
          </h2>
          <div className={style.date}>예약일: {created_date.split('T')[0]}</div>
          <div className={style.overview}>
            <section className={style.reserveWrapper}>
              <div className={style.schedulebox}>
                <div clssName={style.checkInWrapper}>
                  <div className={style.checkin}>체크인</div>
                  <div className={style.checkinDate}>{check_in_date}</div>
                </div>
                <ArrowRight className={style.arrow} />
                <div className={style.checkOutWrapper}>
                  <div className={style.checkout}>체크아웃</div>
                  <div className={style.checkoutDate}>{check_out_date}</div>
                </div>
              </div>
              <hr className={style.devider} />
              <div className={style.houseInfoWrapper}>
                <div className={style.houseInfo}>집 전체</div>
                <div className={style.roomInfo}>{room_name}</div>
                <div className={style.roomhost}>호스트이름: {room_host}</div>
              </div>
              <hr className={style.devider} />
              <div className={style.guestWrapper}>
                <div className={style.guestNum}>게스트 {num_guest}명</div>
              </div>
              <hr className={style.devider} />
              <div className={style.refundPolicyWrapper}>
                <div className={style.refundTitle}>환불정책: 일반</div>
                <div className={style.refundbody}>
                  체크인 7일 전까지 예약을 취소하면 전액 환불받을 수 있습니다.
                  체크인 전 7일 이내에 예약을 취소하면 총 숙박 요금의 50%와
                  수수료 전액이 환불됩니다.
                </div>
              </div>
            </section>
            <section className={style.paymentWrapper}>
              <h3 className={style.paymentTitle}>청구액</h3>
              <div className={style.paymentDetail}>
                <p className={style.price}>
                  ₩{room_price} x{' '}
                  {check_out_date.split('-')[2] - check_in_date.split('-')[2]}박
                </p>
                <p className={style.extra}>
                  {' '}
                  ₩
                  {room_price *
                    (check_out_date.split('-')[2] -
                      check_in_date.split('-')[2])}
                </p>{' '}
              </div>
              <div className={style.paymentDetail}>
                <div className={style.serviceWrapper}>
                  <p className={style.serviceCommission}>서비스 수수료</p>
                  <div className={style.questionIcon}>
                    <QuestionMark className={style.questionMark} />
                  </div>
                </div>
                <p className={style.extra}> ₩3027</p>{' '}
              </div>
              <div className={style.totalPrice}>
                <p>총 금액(KRW)</p>
                <p>
                  ₩{' '}
                  {room_price *
                    (check_out_date.split('-')[2] -
                      check_in_date.split('-')[2]) +
                    3027}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
