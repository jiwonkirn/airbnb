import React, { Component } from 'react';
import style from './MainView.module.scss';
import img from './Homeimg.png';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }

  render() {
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
                <p>목적지</p>
                <input
                  type="search"
                  className={style.dessear}
                  required
                  placeholder="모든위치"
                />
              </div>
              <div className={style.checkin}>
                <p>체크인</p>
                <input
                  type="search"
                  className={style.checkin_sear}
                  required
                  placeholder="년/월/일"
                />
              </div>
              <div className={style.checkout}>
                <p>체크아웃</p>
                <input
                  type="search"
                  className={style.checkout_sear}
                  required
                  placeholder="년/월/일"
                />
              </div>
              <div className={style.adult}>
                <p>어른</p>
                <input
                  type="number"
                  className={style.numadult}
                  min="1"
                  max="20"
                  onChange={e => this.handleQuantityChange(e)}
                />
              </div>
              <div className={style.child}>
                <p>어린이</p>
                <input
                  type="number"
                  className={style.numchild}
                  min="1"
                  max="5"
                  onChange={e => this.handleQuantityChange(e)}
                />
              </div>
              <button>검색</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
