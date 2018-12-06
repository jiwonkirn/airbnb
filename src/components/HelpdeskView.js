import React, { Component } from 'react';
import style from './HelpdeskView.module.scss';

export default class HelpdestView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
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

  render() {
    return (
      <div className={style.HelpdeskView}>
        <div className={style.titlebox}>
          <h1 className={style.title}>추천도움말</h1>
        </div>
        <div className={style.helpdesksearbox}>
          <label className={style.seartitle}>키워드로 검색하기</label>
          <div className={style.helpsearchbox}>
            <input
              style={
                this.state.selected === true
                  ? { borderColor: '#008489' }
                  : { borderColor: '#ebebeb' }
              }
              type="search"
              className={style.helpsearch}
              onFocus={e => this.handleFocus(e)}
              onBlur={e => this.handleBlur(e)}
              required
              placeholder="예: 예약상태"
            />
          </div>
        </div>
        <section className={style.helpsection}>
          <label className={style.recommendarticletitle}>추천게시글</label>
          <button className={style.article1}>
            <div className={style.article1title}>
              에어비앤비 계정은 어떻게 만드나요?
            </div>
            <div className={style.article1p}>
              아직 에어비앤비 계정이 없으시면, www.airbnb.co.kr로 가셔서 회원
              가입을 클릭하세요.
            </div>
          </button>
        </section>
      </div>
    );
  }
}
