import React, { Component } from 'react';
import style from './SavedRsvnView.module.scss';
import img from '../components/imgs/giftImg.png';
import { withUser } from '../contexts/UserContext';
import { ReactComponent as Star } from '../svg/star.svg';
import Receipt from '../containers/Receipt.js';
import { withRouter } from 'react-router-dom';
import MyReview from '../containers/MyReview';
import seoul from './imgs/recommanded/seoul.jpg';

class SavedRsvnView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  handleReceipt(receiptId) {
    this.props.history.push('/receipt/' + receiptId);
  }

  handleReview() {
    this.props.history.push('/review');
  }

  render() {
    if (!this.props.loading) {
      return (
        <>
          <section className={style.infoMain}>
            <div className={style.title}>다음 여행지를 골라보세요</div>
            <div className={style.body}>
              친구들에게 ₩32,000(을)를 선물하여 에어비앤비로 초대해 보세요.
              친구가 에어비앤비를 통해 첫 예약을 할 경우 회원님은 ₩16,000의 여행
              크레딧을 받게 됩니다.
            </div>
            <img className={style.giftImg} src={img} alt="gift img" />
            <button className={style.inviteFriend}>친구 초대하기</button>
          </section>
          <div className={style.partTitle}>이전예약</div>
          <div className={style.Container}>
            <section className={style.previousRsvn}>
              <ul className={style.pastTrip}>
                {this.props.receipt.map(item => {
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
                  } = item;
                  return (
                    <li className={style.pastTripList}>
                      <div className={style.photo}>
                        <div
                          className={style.backImg}
                          style={{ backgroundImage: 'url(' + seoul + ')' }}
                        />
                        <div className={style.hostImg} />
                      </div>
                      <div className={style.infoWrapper}>
                        <div className={style.cityName}>{room_city}</div>
                        <div className={style.checkIn}>{check_in_date}</div>
                        <div className={style.checkOut}>{check_out_date}</div>
                        <div className={style.guest}>게스트{num_guest}명</div>
                        <div className={style.starwrapper}>
                          <Star className={style.star} />
                          <Star className={style.star} />
                          <Star className={style.star} />
                          <Star className={style.star} />
                          <Star className={style.star} />
                        </div>
                        {this.props.logined && (
                          <p className={style.comment}>
                            <span onClick={() => this.handleReview(id)}>
                              후기 읽기
                            </span>
                            {this.state.selected && (
                              <MyReview onReview={() => this.handleReview()} />
                            )}
                          </p>
                        )}
                        {this.props.logined && (
                          <p className={style.receipt}>
                            <span onClick={() => this.handleReceipt(id)}>
                              영수증보기
                            </span>
                            {this.state.selected && (
                              <Receipt onRecipt={() => this.handleReceipt()} />
                            )}
                          </p>
                        )}
                        <div className={style.payRequest}>
                          지급 또는 결제요청
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </>
      );
    } else return <div />;
  }
}
export default withRouter(withUser(SavedRsvnView));
