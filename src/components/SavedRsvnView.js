import React, { Component } from 'react';
import style from './SavedRsvnView.module.scss';
import img from '../components/imgs/giftImg.png';
import { withUser } from '../contexts/UserContext';
import { ReactComponent as Star } from '../svg/star.svg';
import Receipt from '../containers/Receipt.js';
import { withRouter } from 'react-router-dom';

class SavedRsvnView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  handleReceipt() {
    this.props.history.push('/receipt');
  }

  render() {
    const { data } = this.props;
    return (
      <div className={style.Container}>
        <section className={style.infoMain}>
          <div className={style.title}>다음 여행지를 골라보세요</div>
          <div className={style.body}>
            친구들에게 ₩32,000(을)를 선물하여 에어비앤비로 초대해 보세요. 친구가
            에어비앤비를 통해 첫 예약을 할 경우 회원님은 ₩16,000의 여행 크레딧을
            받게 됩니다.
          </div>
          <img className={style.giftImg} src={img} alt="gift img" />
          <button className={style.inviteFriend}>친구 초대하기</button>
        </section>
        <section className={style.previousRsvn}>
          <div className={style.partTitle}>이전예약</div>
          <ul className={style.pastTrip}>
            {data.map(data => (
              <li className={style.pastTripList}>
                <div className={style.photo}>
                  <div className={style.backImg} />
                  <div className={style.hostImg} />
                </div>
                <div className={style.infoWrapper}>
                  <div className={style.cityName}>도시이름</div>
                  <div className={style.checkIn}>{data.check_in_date}</div>
                  <div className={style.checkOut}>{data.check_out_date}</div>
                  <div className={style.guest}>게스트{data.num_guest}명</div>
                  <div className={style.starwrapper}>
                    <Star className={style.star} />
                    <Star className={style.star} />
                    <Star className={style.star} />
                    <Star className={style.star} />
                    <Star className={style.star} />
                  </div>
                  <div className={style.comment}>후기읽기</div>
                  {this.props.logined && (
                    <p className={style.receipt}>
                      <span onClick={() => this.handleReceipt()}>
                        영수증보기
                      </span>
                      {this.state.selected && (
                        <Receipt onRecipt={() => this.handleReceipt()} />
                      )}
                    </p>
                  )}
                  <div className={style.payRequest}>지급 또는 결제요청</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(withUser(SavedRsvnView));
