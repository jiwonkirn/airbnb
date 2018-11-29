import React, { Component } from 'react';
import style from '../css/RecommandedCity.module.scss';
import { ReactComponent as AllowRight } from '../svg/nextAllow.svg';
import { ReactComponent as AllowLeft } from '../svg/prevAllow.svg';

export default class RecommandedCityView extends Component {
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
    const { title, lists, averagePrice } = this.props;
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
              <li key={item}>
                <div className={style.img}>
                  <div className={style.info}>
                    <h3>{item}</h3>
                    <p>₩{averagePrice[index]}/1박 평균</p>
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
          onClick={() => this.handleSlideRight()}
        >
          <AllowRight className={style.nextButtonSvg} />
        </button>
      </div>
    );
  }
}
