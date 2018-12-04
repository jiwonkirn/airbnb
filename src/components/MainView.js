import React, { Component } from 'react';
import style from './MainView.module.scss';
import img from './Homeimg.png';
import { ReactComponent as ArrowDown } from '../svg/arrowDown.svg';
import { ReactComponent as Minus } from '../svg/minus.svg';
import { ReactComponent as Plus } from '../svg/plus.svg';
import classNames from 'classnames';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adult: 1,
      children: 1,
      infant: 1,
      selected: false,
    };
  }

  handleSelect(e) {
    this.setState({
      selected: this.state.selected === true ? false : true,
    });
  }

  handleMinusAdult(e) {
    this.setState({
      adult: this.state.adult - 1,
    });
  }

  handlePlusAult(e) {
    this.setState({
      adult: this.state.adult + 1,
    });
  }

  handleMinuschildren(e) {
    this.setState({
      children: this.state.children - 1,
    });
  }

  handlePlusChildren(e) {
    this.setState({
      children: this.state.children + 1,
    });
  }

  handleMinusInfant(e) {
    this.setState({
      infant: this.state.infant - 1,
    });
  }

  handlePlusInfant(e) {
    this.setState({
      infant: this.state.infant + 1,
    });
  }

  handleCloseBtn(e) {
    this.setState({
      selected: false,
    });
  }

  render() {
    const { adult, children, infant, selected } = this.state;
    const optionBtn = classNames(style.optionBox, {
      [style.active]: selected,
    });
    console.log(selected);
    const personInput = classNames(style.personInput, {
      [style.active]: selected,
    });
    return (
      <div className="MainView">
        <div
          class={style.mainimg}
          style={{
            backgroundImage: 'url(' + img + ')',
          }}
        >
          <div className={style.mainrsvn}>
            <h1 className={style.title}>
              에어비앤비에서 한국의 숙소를 찾아보세요
            </h1>
            <div className={style.parttitle}>
              혼자 하는 여행에 적합한 개인실부터 여럿이 함께하는 여행에 좋은 집
              전체 숙소까지, 에어비앤비엔 다 있습니다.
            </div>
            <div className={style.magicsearch}>
              <div className={style.Destination}>
                <label for={style.destinationlabel}>목적지</label>
                <input
                  type="search"
                  className={style.desSear}
                  required
                  placeholder="모든위치"
                />
              </div>
              <div className={style.checkin}>
                <label for={style.checkinlabel}>체크인</label>
                <input
                  type="search"
                  className={style.checkin_sear}
                  required
                  placeholder="년/월/일"
                />
              </div>
              <div className={style.checkout}>
                <label for={style.checkoutlabel}>체크아웃</label>
                <input
                  type="search"
                  className={style.checkout_sear}
                  required
                  placeholder="년/월/일"
                />
              </div>
              <label for={style.personWrapper}>인원</label>
              <div className={style.personInputWrapper}>
                <button
                  type="button"
                  className={personInput}
                  onClick={e => this.handleSelect(e)}
                >
                  <div className={style.capacity}>
                    {`게스트 ${adult + children}명`}
                  </div>
                  <div>{`유아${infant}`}</div>
                  <div className={style.arrowBox}>
                    <ArrowDown className={style.arrowDown} />
                  </div>
                </button>
                <div className={optionBtn}>
                  <div className={style.optionType}>
                    <label for={style.personType}>성인</label>
                    <div className={style.numberOfPerson}>
                      <button className={style.minus}>
                        <Minus
                          onClick={e => this.handleMinusAdult(e)}
                          className={style.minuscompo}
                        />
                      </button>
                      <div className={style.result}>{adult}</div>
                      <button className={style.plus}>
                        <Plus
                          onClick={e => this.handlePlusAult(e)}
                          className={style.pluscompo}
                        />
                      </button>
                    </div>
                  </div>
                  <div className={style.optionType}>
                    <label for={style.personType}>어린이</label>
                    <div className={style.numberOfPerson}>
                      <button className={style.minus}>
                        <Minus
                          onClick={e => this.handleMinuschildren(e)}
                          className={style.minuscompo}
                        />
                      </button>
                      <div className={style.result}>{children}</div>
                      <button className={style.plus}>
                        <Plus
                          onClick={e => this.handlePlusChildren(e)}
                          className={style.pluscompo}
                        />
                      </button>
                    </div>
                  </div>
                  <div className={style.optionType}>
                    <label for={style.personType}>유아</label>
                    <div className={style.numberOfPerson}>
                      <button className={style.minus}>
                        <Minus
                          onClick={e => this.handleMinusInfant(e)}
                          className={style.minuscompo}
                        />
                      </button>
                      <div className={style.result}>{infant}</div>
                      <button className={style.plus}>
                        <Plus
                          onClick={e => this.handlePlusInfant(e)}
                          className={style.pluscompo}
                        />
                      </button>
                    </div>
                  </div>
                  <button
                    className={style.close}
                    onClick={e => this.handleCloseBtn(e)}
                  >
                    닫기
                  </button>
                </div>
              </div>
              <button className={style.searchbtn}>검색</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
