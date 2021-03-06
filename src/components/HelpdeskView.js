import React, { Component } from 'react';
import style from './HelpdeskView.module.scss';
import { ReactComponent as Cross } from '../svg/cross.svg';
import { ReactComponent as Magnifyinga } from '../svg/magnifying_little.svg';
import { ReactComponent as ArrowRight } from '../svg/arrowRight.svg';
import HelpdeskDetail from './HelpdeskDetail';

export default class HelpdestView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      listselected: false,
      curruntpageID: null,
      data: [
        {
          id: 1,
          title: '에어비앤비 시작가이드',
          body:
            '공유를 바탕으로 한 커뮤니티 \n 에어비앤비는 2008년에 2명의 디자이너가 3명의 여행자에게 아파트의 남는 공간을 숙소로 빌려주면서 시작했습니다. 이제는 전 세계에 백만 명이 넘는 호스트와 게스트가 에어비앤비에 무료로 가입하여 자신의 공간을 임대하거나 독특한 숙소를 예약하고 있습니다.\n신뢰할 수 있는 서비스 \n 에어비앤비는 쉽고 믿을 만하고 안전 합니다. 에어비앤비는 개인 프로필과 숙소를 인증합니다. 스마트한 메시징 시스템을 통해 호스트와 게스트는 마음 놓고 숙소 및 여행에 관해 이야기를 할 수 있으며, 안전한 전자거래 서비스를 제공하고 있습니다.',
        },
        {
          id: 2,
          title: '호스트로서 확정된 예약을 어떻게 변경하나요?',
          body:
            '확정된 예약을 변경해야 한다면 게스트에게 예약 변경을 요청할 수 있습니다. \n 호스트로서 예약 변경을 요청하려면,\n 1. airbnb.com에서 예약 관리로 이동하세요.\n 2. 변경하려는 예약 옆의 변경 또는 취소를 클릭하세요.\n 3. 예약 변경을 선택하세요.\n 4. 변경 요청을 클릭하세요.\n게스트가 요청을 수락할 경우 예약이 업데이트되며 필요 시 게스트에게 대금이 청구되거나 환불됩니다. 요청이 거절되거나 요청에 대한 응답이 없는 경우 기존 예약이 그대로 유지됩니다.',
        },
        {
          id: 3,
          title: '예약 요금은 어떻게 결정되나요?',
          body:
            '에어비앤비의 총 숙박대금은 몇 가지 요소에 따라 결정됩니다. 호스트가 예약 요청을 수락하거나 즉시 예약을 사용하면 즉시 숙박대금 전액이 청구된다는 점을 유의해주세요.\n 호스트가 결정하는 비용 \n 1박 요금: 호스트가 결정하는 1박 요금입니다.  \n 청소비: 숙소 청소비를 충당하기 위해 호스트가 청구하는 일회성 비용입니다.\n 추가 게스트 수수료: 숙소 이용과 관련하여 호스트가 청구하는 일회성 비용입니다.  ',
        },
        {
          id: 4,
          title: '에어비앤비 환불 정책이 무엇인가요?',
          body:
            '한국인 게스트에 대한 환불 정책 \n 한국 법규를 준수하기 위해 에어비앤비는 2017년 6월 2일 또는 이후에 한국인 게스트가 엄격 환불 정책을 채택한 숙소를 예약하는 경우, 변경된 환불 정책을 적용합니다. 시행 일자는 숙박일이 아닌 예약일을 기준으로 하며, 한국인 게스트가 2017년 6월 2일 이전에 예약한 건에는 적용되지 않습니다. \n 변경된 엄격 환불 정책에서는 한국인 게스트가 예약을 취소하면 다음과 같이 환불이 이루어집니다.\n\n 체크인 30일 전까지 취소: 모든 수수료를 포함한 전액 환불\n 체크인 30일 전 ~ 체크인 당일 사이 취소: 체크인 당일 오후 12시 전까지 취소하면 총 숙박 요금의 50% 환불 및 수수료, 청소비 전액 환불\n 숙박 중 취소: 현지 시간으로 오후 12시까지 취소하면 수수료, 청소비를 제외한 남은 숙박 요금의 50% 환불. 현지 시간으로 오후 12시 이후에 취소하면 당일 요금과 수수료, 청소비를 제외한 남은 숙박 요금의 50% 환불',
        },
        {
          id: 5,
          title: '에어비앤비에서 보증금은 어떻게 처리되나요?',
          body:
            '호스트가 보증금을 요구하는 경우 게스트는 예약할 때는 보증금을 지불할 필요가 없으나, 호스트가 보증금을 청구하면 해당 보증금이 게스트에게 부과됩니다',
        },
        {
          id: 6,
          title: '숙소 예약을 취소하려면 어떻게 하나요?',
          body:
            '1. 여행 페이지에서 찾으시는 여행을 선택하세요.\n 2. 숙소 예약을 클릭하세요. 여행을 이미 시작하셨다면 체크인 날짜를 클릭하셔야 할 수 있습니다.\n 3. 변경 또는 취소를 클릭하세요.\n 3. 예약 취소를 선택하세요.',
        },
      ],
    };
  }

  handleFocus(e) {
    this.setState({
      selected: true,
    });
  }

  handleBlur(e) {
    this.setState({
      selected: false,
    });
  }

  handleHelpDetailBtn(e, id) {
    this.setState({
      listselected: true,
      page: id,
    });
  }

  handleHelpDetailModalRemove(e) {
    e.preventDefault();
    this.setState({
      listselected: false,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={style.HelpdeskView}>
        <div className={style.titlebox}>
          <h1 className={style.helptitle}>에어비앤비 도움말</h1>
          <button
            className={style.closeBtn}
            onClick={e => this.props.onModalRemove(e)}
          >
            <Cross clssName={style.crossImg} />
          </button>
        </div>
        <div className={style.helpdeskForm}>
          {this.state.listselected ? (
            <HelpdeskDetail
              page={this.state.page}
              onModalRemove={e => this.handleHelpDetailModalRemove(e)}
            />
          ) : null}
          <div className={style.helpdesksearbox}>
            <div
              className={style.helpsearchbox}
              style={
                this.state.selected === true
                  ? { borderColor: '#008489' }
                  : { borderColor: '#ebebeb' }
              }
              onFocus={e => this.handleFocus(e)}
              onBlur={e => this.handleBlur(e)}
            >
              <Magnifyinga
                className={style.magnifying}
                style={{ width: '16px', height: '16px' }}
              />
              <input
                type="search"
                className={style.helpsearch}
                required
                placeholder="질문을 입력하거나 키워드로 검색하세요"
              />
            </div>
          </div>
          <label className={style.recommendarticletitle}>추천도움말</label>
          <div className={style.helpsectionWrapper}>
            <section className={style.helpsection}>
              {data.map((article, id) => {
                return id <= 6 ? (
                  <ul className={style.help}>
                    <li
                      className={style.list}
                      onClick={e => this.handleHelpDetailBtn(e, id)}
                    >
                      <div className={style.title}>{article.title}</div>
                      <ArrowRight
                        className={style.arrowright}
                        style={{ width: '14px', height: '14px' }}
                      />
                    </li>
                  </ul>
                ) : null;
              })}
            </section>
          </div>
        </div>
        <div className={style.btnArea}>
          <button className={style.helpmore}>도움말 센터로 가기</button>
        </div>
      </div>
    );
  }
}
