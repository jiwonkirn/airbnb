import React, { Component } from 'react';
import style from './HelpdeskDetail.module.scss';
import { ReactComponent as Cross } from '../svg/cross.svg';
import { ReactComponent as ArrowLeft } from '../svg/arrowLeft.svg';

export default class HelpdeskDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curruntpageID: null,
      data: [
        {
          id: 1,
          title: '에어비앤비 시작가이드',
          body:
            '\n\n 공유를 바탕으로 한 커뮤니티 \n\n 에어비앤비는 2008년에 2명의 디자이너가 \n 3명의 여행자에게 아파트의 남는 공간을 숙소로 빌려주면서 \n 시작했습니다. \n\n이제는 전 세계에 백만 명이 넘는 호스트와 게스트가\n에어비앤비에 무료로 가입하여 자신의 공간을 임대하거나 \n독특한 숙소를 예약하고 있습니다.\n\n신뢰할 수 있는 서비스 \n \n에어비앤비는 쉽고 믿을 만하고 안전 합니다.\n에어비앤비는 개인 프로필과 숙소를 인증합니다.\n스마트한 메시징 시스템을 통해 호스트와 게스트는\n마음 놓고 숙소 및 여행에 관해 이야기를 할 수 있으며,\n안전한 전자거래 서비스를 제공하고 있습니다.',
        },
        {
          id: 2,
          title: '호스트로서 확정된 예약을 어떻게 변경하나요?',
          body:
            '\n\n확정된 예약을 변경해야 한다면 \n게스트에게 예약 변경을 요청할 수 있습니다.\n\n 호스트로서 예약 변경을 요청하려면,\n\n   1. airbnb.com에서 예약 관리로 이동하세요.\n   2. 변경하려는 예약 옆의 변경 또는 취소를 클릭하세요.\n   3. 예약 변경을 선택하세요.\n   4. 변경 요청을 클릭하세요.\n\n게스트가 요청을 수락할 경우 예약이 업데이트되며 \n필요 시 게스트에게 대금이 청구되거나 환불됩니다. \n\n요청이 거절되거나 요청에 대한 응답이 없는 경우 \n기존 예약이 그대로 유지됩니다.',
        },
        {
          id: 3,
          title: '예약 요금은 어떻게 결정되나요?',
          body:
            '\n\n에어비앤비의 총 숙박대금은 몇 가지 요소에 따라 결정됩니다. \n\n호스트가 예약 요청을 수락하거나 즉시 예약을 사용하면\n즉시 숙박대금 전액이 청구된다는 점을 유의해주세요.\n\n 호스트가 결정하는 비용 \n\n   * 1박 요금: 호스트가 결정하는 1박 요금입니다. \n   * 청소비: 숙소 청소비를 충당하기 위해\n      호스트가 청구하는 일회성 비용입니다.\n   * 추가 게스트 수수료: 숙소 이용과 관련하여 \n      호스트가 청구하는 일회성 비용입니다.  ',
        },
        {
          id: 4,
          title: '에어비앤비 환불 정책이 무엇인가요?',
          body:
            '\n\n한국인 게스트에 대한 환불 정책\n\n변경된 엄격 환불 정책에서는 한국인 게스트가 \n예약을 취소하면 다음과 같이 환불이 이루어집니다.\n\n   * 체크인 30일 전까지 취소 \n    - 모든 수수료를 포함한 전액 환불\n\n   * 체크인 30일 전 ~ 체크인 당일 사이 취소\n    - 체크인 당일 오후 12시 전까지 취소하면\n    총 숙박 요금의 50% 환불 및 수수료,\n    청소비 전액 환불\n\n   * 숙박 중 취소\n    현지 시간으로 오후 12시까지 취소하면\n    수수료, 청소비를 제외한 남은 숙박 요금의 50% 환불.\n    현지 시간으로 오후 12시 이후에 취소하면\n    당일 요금과 수수료, 청소비를 제외한\n    남은 숙박 요금의 50% 환불',
        },
        {
          id: 5,
          title: '에어비앤비에서 보증금은 어떻게 처리되나요?',
          body:
            '\n\n호스트가 보증금을 요구하는 경우\n게스트는 예약할 때는 보증금을 지불할 필요가 없으나,\n호스트가 보증금을 청구하면 \n해당 보증금이 게스트에게 부과됩니다',
        },
        {
          id: 6,
          title: '숙소 예약을 취소하려면 어떻게 하나요?',
          body:
            '\n\n   1. 여행 페이지에서 찾으시는 여행을 선택하세요.\n   2. 숙소 예약을 클릭하세요. 여행을 이미 시작하셨다면\n       체크인 날짜를 클릭하셔야 할 수 있습니다.\n   3. 변경 또는 취소를 클릭하세요.\n   4. 예약 취소를 선택하세요.',
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    const { page } = this.props;
    return (
      <section className={style.helpsection}>
        <button
          className={style.leftBtn}
          onClick={e => this.props.onModalRemove(e)}
        >
          <ArrowLeft clssName={style.crossImg} />
        </button>
        <ul className={style.help}>
          <li className={style.list}>
            <div className={style.title}>{data[page].title}</div>
            <div className={style.body}>{data[page].body}</div>
          </li>
        </ul>
      </section>
    );
  }
}
