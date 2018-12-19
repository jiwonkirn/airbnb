import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';
import style from './RecommandedTheme.module.scss';
import { ReactComponent as AllowRight } from '../svg/nextAllow.svg';
import { ReactComponent as AllowLeft } from '../svg/prevAllow.svg';
import { ReactComponent as Star } from '../svg/star.svg';
import solo from './imgs/recommandedTheme/solo.jpg';
import couple from './imgs/recommandedTheme/couple.jpg';
import team from './imgs/recommandedTheme/team.jpg';
import hurry from './imgs/recommandedTheme/hurry.jpg';
import beds from './imgs/recommandedTheme/beds.jpg';
import price from './imgs/recommandedTheme/price.jpg';

// 이미지

const themeList = {
  solo: solo,
  couple: couple,
  team: team,
  price: price,
  hurry: hurry,
  beds: beds,
};

const themeTitle = {
  solo: '솔로 여행',
  couple: '커플 여행',
  team: '단체 여행',
  price: '경제적인 여행',
  hurry: '빠른 여행',
  beds: '침대가 많은 숙소',
};

const themeBody = {
  solo: '혼자서도 머물 수 있는 숙소를 찾아보세요',
  couple: '사랑하는 연인과 함께 오붓하게 머물 수 있는 숙소를 찾아보세요',
  team: '인원이 많다면 넓은 공간, 많은 방을 찾아보세요',
  price: '좀 더 경제적으로 여행을 다녀오세요',
  hurry: '당장 여행을 떠나고 싶다면?',
  beds: '침대가 많은 방을 찾아 쾌적한 환경에서 쉬세요',
};

const themeOption = {
  solo: '인원 1명',
  couple: '인원 2명',
  team: '방 2개 이상, 인원 4명 이상',
  price: '가격 10000원 - 50000원',
  hurry: '다음날 기준 1주일',
  beds: '침대 2개 이상',
};

class RecommandedThemeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      translateX: 0,
      tomorrow: '0',
      nextWeek: '0',
    };
  }

  componentDidMount() {
    const today = new Date();
    const tomorrow = new Date(today.setDate(today.getDate() + 1))
      .toLocaleString()
      .split('. ')
      .slice(0, 3)
      .map(item => (item.length === 1 ? '0' + item : item))
      .join('-');
    const nextWeek = new Date(today.setDate(today.getDate() + 8))
      .toLocaleString()
      .split('. ')
      .slice(0, 3)
      .map(item => (item.length === 1 ? '0' + item : item))
      .join('-');
    this.setState({
      tomorrow,
      nextWeek,
    });
  }

  componentDidUpdate = prevProps => {
    if (prevProps.device !== this.props.device) {
      this.setState({
        translateX: 0,
      });
    }
  };

  handleSlideLeft() {
    const { order } = this.state;
    const { device } = this.props;
    if (!order <= 0) {
      if (device === 'desktop') {
        this.setState(prev => {
          return {
            translateX: prev.translateX + 25,
            order: prev.order - 1,
          };
        });
      } else if (device === 'tablet') {
        this.setState(prev => {
          return {
            translateX: prev.translateX + 33.333,
            order: prev.order - 1,
          };
        });
      } else if (device === 'mobile') {
        this.setState(prev => {
          return {
            translateX: prev.translateX + 50,
            order: prev.order - 1,
          };
        });
      }
    }
  }

  handleSlideRight() {
    const { order } = this.state;
    const { lists, device } = this.props;
    if (order < lists.length - 4 && device === 'desktop') {
      this.setState(prev => {
        return {
          translateX: prev.translateX - 25,
          order: prev.order + 1,
        };
      });
    } else if (order < lists.length - 3 && device === 'tablet') {
      this.setState(prev => {
        return {
          translateX: prev.translateX - 33.33,
          order: prev.order + 1,
        };
      });
    } else if (order < lists.length - 2 && device === 'mobile') {
      this.setState(prev => {
        return {
          translateX: prev.translateX - 50,
          order: prev.order + 1,
        };
      });
    }
  }

  render() {
    const { title, lists, loading, location, device } = this.props;
    const { search } = this.props.location;
    const params = new URLSearchParams(search);
    const adult = params.get('adult');
    const children = params.get('children');
    const infant = params.get('infant');
    const checkin = params.get('checkin');
    const checkout = params.get('checkout');
    const min_price = params.get('price__gte');
    const max_price = params.get('price__lte');
    const cityName = params.get('public_address__contains');
    const bool =
      adult == '0' &&
      children == '0' &&
      infant == '0' &&
      checkin == '0' &&
      checkout == '0' &&
      max_price == '200000' &&
      min_price == '0';
    const { order, translateX, tomorrow, nextWeek } = this.state;

    const linkTo = {
      solo: `/search-list?&public_address__contains=${cityName}&adult=1&children=0&infant=0&checkin=0&checkout=0&price__gte=0&price__lte=200000`,
      couple: `/search-list?&public_address__contains=${cityName}&adult=2&children=0&infant=0&checkin=0&checkout=0&price__gte=0&price__lte=200000`,
      team: `/search-list?&public_address__contains=${cityName}&adult=4&children=0&infant=0&checkin=0&checkout=0&price__gte=0&price__lte=200000&bedrooms__gte=2`,
      price: `/search-list?&public_address__contains=${cityName}&adult=0&children=0&infant=0&checkin=0&checkout=0&price__gte=10000&price__lte=50000`,
      hurry: `/search-list?&public_address__contains=${cityName}&adult=0&children=0&infant=0&checkin=${tomorrow}&checkout=${nextWeek}&price__gte=0&price__lte=200000`,
      beds: `/search-list?&public_address__contains=${cityName}&adult=0&children=0&infant=0&checkin=0&checkout=0&price__gte=0&price__lte=200000&beds__gte=2`,
    };

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
                <Link to={linkTo[item]}>
                  <div
                    style={{
                      backgroundImage: `url(${themeList[item]})`,
                    }}
                    className={style.img}
                  />
                  <h3 className={style.roomTitle}>{themeTitle[item]}</h3>
                  <p className={style.roomBody}>{themeBody[item]}</p>
                  <span className={style.roomFilter}>{themeOption[item]}</span>
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
          style={
            order ===
            lists.length -
              (device === 'desktop' ? 4 : device === 'tablet' ? 3 : 2)
              ? { display: 'none' }
              : null
          }
          onClick={() => this.handleSlideRight()}
        >
          <AllowRight className={style.nextButtonSvg} />
        </button>
      </div>
    );
  }
}

export default withUser(withRouter(withSearch(RecommandedThemeView)));
