import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './RoomListLoading.module.scss';
import classNames from 'classnames';

class RoomListLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  componentDidMount() {
    const { path } = this.props.match;
    if (path === '/search-list') {
      this.setState({
        items: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ],
      });
    }
  }

  render() {
    const { items } = this.state;
    const { path } = this.props.match;
    const roomInfo = classNames(style.roomInfo, {
      [style.roomDetailInfo]: path === '/search-list',
    });
    return (
      <div className={style.listWrapper}>
        <h1 className={style.listTitle}>로딩중입니다...</h1>
        <p className={style.listBody}>
          퀄리티와 편안함이 검증된 숙소 컬렉션을 소개합니다. 잠시만
          기다려주세요.
        </p>
        <div className={style.roomInfoWrapper}>
          {items.map(item => (
            <section key={item} className={roomInfo}>
              <div className={style.roomImg} />
              <p className={style.roomLocation} />
              <p className={style.roomTitle} />
              <p className={style.roomPrice} />
              <div className={style.starWrapper}>
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
                <Star className={style.star} />
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
}

export default function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    const { loading, ...rest } = props;
    if (loading) {
      return <RoomListLoading {...props} />;
    } else {
      return <WrappedComponent {...rest} />;
    }
  };
}
