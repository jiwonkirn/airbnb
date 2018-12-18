import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import style from './RecommandedCity.module.scss';
import { ReactComponent as AllowRight } from '../svg/nextAllow.svg';
import { ReactComponent as AllowLeft } from '../svg/prevAllow.svg';

// 이미지
import seoul from './imgs/recommanded/seoul.jpg';
import busan from './imgs/recommanded/busan.jpg';
import jongro from './imgs/recommanded/jongro.jpg';
import jeju from './imgs/recommanded/jeju.jpg';
import junggu from './imgs/recommanded/junggu.jpg';
import mapogu from './imgs/recommanded/mapogu.jpg';
import suyeong from './imgs/recommanded/suyeong.jpg';
import haeundae from './imgs/recommanded/haeundae.jpg';

const cityList = {
  서울: seoul,
  제주: jeju,
  부산: busan,
  종로: jongro,
  해운대: haeundae,
  중구: junggu,
  마포구: mapogu,
  수영구: suyeong,
};

class RecommandedCityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      translateX: 0,
    };
  }

  handleSlideLeft() {
    const { order } = this.state;
    if (!order <= 0)
      this.setState(prev => {
        return {
          translateX: prev.translateX + 20,
          order: prev.order - 1,
        };
      });
  }

  handleSlideRight() {
    const { order } = this.state;
    const { lists } = this.props;
    if (order < lists.length - 5)
      this.setState(prev => {
        return {
          translateX: prev.translateX - 20,
          order: prev.order + 1,
        };
      });
  }

  render() {
    const { title, lists, averagePrice, loading } = this.props;
    const { order, translateX } = this.state;
    return (
      <div className={style.RecommandedCity}>
        <h2>{title}</h2>
        <div className={style.slideContainer}>
          <ul
            ref={this.listRef}
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {lists.map((item, index) => (
              <li key={item} onClick={() => this.props.handleSearch(item)}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%), url(${
                      cityList[item]
                    })`,
                  }}
                  className={style.img}
                >
                  <div className={style.info}>
                    <h3>{item}</h3>
                    <p>₩{averagePrice[item + '_average']}/1박 평균</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={style.prevButton}
          style={order === 0 ? { display: 'none' } : null}
          onClick={() => this.handleSlideLeft()}
        >
          <AllowLeft className={style.prevButtonSvg} />
        </button>
        <button
          className={style.nextButton}
          style={order === lists.length - 5 ? { display: 'none' } : null}
          onClick={() => this.handleSlideRight()}
        >
          <AllowRight className={style.nextButtonSvg} />
        </button>
      </div>
    );
  }
}

export default withSearch(RecommandedCityView);
