import React, { Component } from 'react';
import style from './RoomList.module.scss';
import { Link, withRouter } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import { ReactComponent as ArrowRight } from '../svg/arrowRight.svg';
import withLoading from '../hoc/RoomListLoading';
import RoomListItemView from './RoomListItemView';
import classNames from 'classnames';

class ListView extends Component {
  render() {
    const { rooms } = this.props;
    const { themeName } = this.props;
    const { adult, infant, children, checkin, checkout } = this.props;
    const { path } = this.props.match;
    const roomInfo = classNames(style.roomInfo, {
      [style.roomDetailInfo]: path === '/search-list',
    });
    console.log(path);
    return (
      <div className={style.listWrapper}>
        <h1 className={style.listTitle}>{themeName}</h1>
        <div className={style.roomInfoWrapper}>
          {rooms.map((room, index) => {
            if (path === '/search-list') {
              return (
                <Link
                  key={room.pk}
                  className={roomInfo}
                  to={
                    `/room-detail/${room.pk}` +
                    (adult || infant || children || checkin || checkout
                      ? `?adult=${parseInt(adult)}&children=${parseInt(
                          children
                        )}&infant=${parseInt(
                          infant
                        )}&checkin=${checkin}&checkout=${checkout}`
                      : '')
                  }
                >
                  <RoomListItemView room={room} />
                </Link>
              );
            } else {
              return (
                index < 8 && (
                  <Link
                    key={room.pk}
                    className={style.roomInfo}
                    to={
                      `/room-detail/${room.pk}` +
                      (adult || infant || children || checkin || checkout
                        ? `?adult=${parseInt(adult)}&children=${parseInt(
                            children
                          )}&infant=${parseInt(
                            infant
                          )}&checkin=${checkin}&checkout=${checkout}`
                        : '')
                    }
                  >
                    <RoomListItemView room={room} />
                  </Link>
                )
              );
            }
          })}
        </div>
        {path === '/search-list' ? null : (
          <Link
            to={`/search-list${this.props.location.search}`}
            className={style.toAllLink}
          >
            모두 보기
            <ArrowRight className={style.arrowRight} />
          </Link>
        )}
      </div>
    );
  }
}

export default withLoading(withSearch(withRouter(ListView)));
