import React, { Component, Children } from 'react';
import ReserveNav from './ReserveNav';
import RoomInfoView from './RoomInfoView';
import style from './PayView.module.scss';
import { ReactComponent as CreditCard } from '../svg/creditCard.svg';
import { ReactComponent as VisaCard } from '../svg/visaCard.svg';
import { ReactComponent as Card2 } from '../svg/card2.svg';
import { ReactComponent as Card3 } from '../svg/card3.svg';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { withRouter } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import { withUser } from '../contexts/UserContext';
import Receipt from '../containers/Receipt';

class PayView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonclick: false,
      checkin: '',
      checkout: '',
      payselected: false,
      cardnumber: '카드정보',
      expiredate: '만료일',
      cvv: 'CVV',
      post: null,
      name: this.props.last_name,
      selected: false,
    };
  }
  handleButton() {
    this.setState({
      buttonclick: this.state.buttonclick === true ? false : true,
    });
  }
  componentDidMount() {
    const location = this.props.location;
    const params = new URLSearchParams(location.search);
    const checkin = params.get('checkin');
    const checkout = params.get('checkout');
    this.setState({
      checkin,
      checkout,
    });
  }
  handleReserve() {
    const checkin = this.state.checkin;
    const checkout = this.state.checkout;
    const adult = this.props.adult;
    const children = this.props.children;
    this.props.onPost(checkin, checkout, adult, children);
  }
  handleFocus() {
    this.setState({
      payselected: true,
    });
  }
  handleBlur() {
    this.setState({
      payselected: false,
    });
  }
  handleCardNumber(e) {
    const cardnumber = e.target.value;
    const reg = new RegExp(/^[0-9]*$/);
    if (cardnumber.match(reg)) {
      this.setState({
        cardnumber,
      });
    }
  }
  handleCardNumberFocus() {
    if (this.state.cardnumber === '카드정보') {
      this.setState({
        cardnumber: '',
      });
    }
  }
  handleCardNumberBlur() {
    if (!this.state.cardnumber) {
      this.setState({
        cardnumber: '카드정보',
      });
    }
  }
  handleExpiredateFocus() {
    if (this.state.expiredate === '만료일') {
      this.setState({
        expiredate: '',
      });
    }
  }
  handleExpiredateBlur() {
    if (!this.state.expiredate) {
      this.setState({
        expiredate: '만료일',
      });
    }
  }
  async handleExpiredate(e) {
    const expiredate = e.target.value;
    const reg = new RegExp(/^[0-9]*$/);
    if (expiredate.match(reg) && expiredate.length < 5) {
      this.setState({
        expiredate,
      });
    }
  }
  handleCvvFocus() {
    if (this.state.cvv === 'CVV') {
      this.setState({
        cvv: '',
      });
    }
  }
  handleCvvBlur() {
    if (!this.state.cvv) {
      this.setState({
        cvv: 'CVV',
      });
    }
  }
  handleCvv(e) {
    const cvv = e.target.value;
    const reg = new RegExp(/^[0-9]*$/);
    if (cvv.match(reg) && cvv.length < 4) {
      this.setState({
        cvv,
      });
    }
  }
  handlePost(e) {
    const post = e.target.value;
    this.setState({
      post,
    });
  }

  handleReceipt(receiptId) {
    this.props.history.push('/receipt/' + receiptId);
  }

  render() {
    const { roomId } = this.props;
    const checkinYear = this.state.checkin.split('-')[0];
    const checkinMounth = this.state.checkin.split('-')[1];
    const checkinDate = this.state.checkin.split('-')[2];
    const checkoutYear = this.state.checkout.split('-')[0];
    const checkoutMounth = this.state.checkout.split('-')[1];
    const checkoutDate = this.state.checkout.split('-')[2];
    const { cardnumber, expiredate, cvv, post, name } = this.state;
    console.log(this.state.payselected);
    console.log(this.state.expiredate);
    console.log(this.state.name);
    console.log(this.props.last_name);
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
            <button
              onFocus={() => this.handleFocus()}
              onBlur={() => this.handleBlur()}
              style={
                this.state.payselected === true
                  ? {
                      height: '100px',
                    }
                  : {
                      height: '50px',
                    }
              }
              className={style.creditCardbtn}
            >
              <div>
                <CreditCard className={style.cardIcon} />
                <p className={style.cardText}>신용카드</p>
              </div>
              <ArrowDown className={style.arrowDown} />
              <div className={style.div2}>
                <CreditCard className={style.cardIcon} />
                <p className={style.cardText}>신용카드</p>
              </div>
            </button>
            <ul className={style.nameWrapper}>
              <li>
                {' '}
                <label className={style.subTitle} htmlFor={style.nameInput}>
                  이름
                </label>{' '}
                <input value={name} className={style.nameInput} type="text" />{' '}
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
                  <input
                    placeholder="0000 0000 0000 0000"
                    onFocus={() => this.handleCardNumberFocus()}
                    onBlur={() => this.handleCardNumberBlur()}
                    onChange={e => this.handleCardNumber(e)}
                    value={cardnumber}
                    type="text"
                  />{' '}
                </li>
                <li className={style.expireDate}>
                  {' '}
                  <input
                    placeholder="MM/YY"
                    onBlur={() => this.handleExpiredateBlur()}
                    onFocus={() => this.handleExpiredateFocus()}
                    onChange={e => this.handleExpiredate(e)}
                    value={expiredate}
                    type="text"
                  />{' '}
                </li>
                <li className={style.cvv}>
                  {' '}
                  <input
                    placeholder="3자리"
                    onBlur={() => this.handleCvvBlur()}
                    onFocus={() => this.handleCvvFocus()}
                    onChange={e => this.handleCvv(e)}
                    value={cvv}
                    type="text"
                  />{' '}
                </li>
              </ul>
            </div>
            <ul className={style.nameWrapper}>
              <li>
                {' '}
                <label className={style.subTitle} htmlFor={style.nameInput}>
                  청구지 정보
                </label>{' '}
                <input
                  value={post}
                  onChange={e => this.handlePost(e)}
                  className={style.nameInput}
                  placeholder="우편번호"
                  type="text"
                />{' '}
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
            <button className={style.finalReserveBtn}>
              {this.props.logined && (
                <p className={style.receipt}>
                  <span onClick={() => this.handleReceipt(roomId)}>
                    예약요청하기
                  </span>
                </p>
              )}
            </button>
          </div>
        </div>
        <RoomInfoView
          checkinYear={checkinYear}
          checkinMounth={checkinMounth}
          checkinDate={checkinDate}
          checkoutYear={checkoutYear}
          checkoutMounth={checkoutMounth}
          checkoutDate={checkoutDate}
          {...this.props}
          roomId={roomId}
        />
      </div>
    );
  }
}
export default withUser(withRouter(withSearch(PayView)));
