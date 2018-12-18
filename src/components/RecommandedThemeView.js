import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import { withRouter } from 'react-router-dom';
import style from './RecommandedTheme.module.scss';
import { ReactComponent as AllowRight } from '../svg/nextAllow.svg';
import { ReactComponent as AllowLeft } from '../svg/prevAllow.svg';
import { ReactComponent as Star } from '../svg/star.svg';

// 이미지

const cityList = {
  couple: '커플 여햏',
  team: '단체 여행',
  'low-price': '저비용 여행',
  'this-week': '급한 여행',
  beds: '많은 침대',
};

class RecommandedThemeView extends Component {
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
          translateX: prev.translateX + 25,
          order: prev.order - 1,
        };
      });
  }

  handleSlideRight() {
    const { order } = this.state;
    const { lists } = this.props;
    if (order < lists.length - 4)
      this.setState(prev => {
        return {
          translateX: prev.translateX - 25,
          order: prev.order + 1,
        };
      });
  }

  render() {
    const { title, lists, loading } = this.props;
    const { search } = this.props.location;
    const params = new URLSearchParams(search);
    const adult = params.get('adult');
    const children = params.get('children');
    const infant = params.get('infant');
    const checkin = params.get('checkin');
    const checkout = params.get('checkout');
    const min_price = params.get('price__gte');
    const max_price = params.get('price__lte');
    const bool =
      adult == '0' &&
      children == '0' &&
      infant == '0' &&
      checkin == '0' &&
      checkout == '0' &&
      max_price == '200000' &&
      min_price == '0';
    const { order, translateX } = this.state;
    return (
      <div
        style={bool ? { display: 'block' } : { display: 'none' }}
        className={style.RecommandedCity}
      >
        <h2>{title}</h2>
        <p className={style.headingBody}>
          테마에 따른 필터를 빠르게 설정해드립니다.
        </p>
        <div className={style.slideContainer}>
          <ul style={{ transform: `translateX(${translateX}%)` }}>
            {lists.map((item, index) => (
              <li key={item}>
                <Link to={'/search-list'}>
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%), url(${
                        cityList[item]
                      })`,
                    }}
                    className={style.img}
                  />
                  <h3 className={style.roomTitle}>커플 여행</h3>
                  <p className={style.roomBody}>
                    사랑하는 연인과 함께 오붓하게 머물 수 있는 숙소를
                    찾아보세요.
                  </p>
                  <span className={style.roomFilter}>인원 2명</span>
                  <div className={style.starWrapper}>
                    <Star className={style.star} />
                    <Star className={style.star} />
                    <Star className={style.star} />
                    <Star className={style.star} />
                    <Star className={style.star} />
                  </div>
                </Link>
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
          style={order === lists.length - 4 ? { display: 'none' } : null}
          onClick={() => this.handleSlideRight()}
        >
          <AllowRight className={style.nextButtonSvg} />
        </button>
      </div>
    );
  }
}

export default withRouter(withSearch(RecommandedThemeView));
