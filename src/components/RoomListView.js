import React, { Component } from 'react';
import style from './RoomList.module.scss';
import { Link, withRouter } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import withLoading from '../hoc/RoomListLoading';
import RoomListItemView from './RoomListItemView';

class ListView extends Component {
  render() {
    const { rooms } = this.props;
    const { themeName } = this.props;
    const { adult, infant, children, checkin, checkout } = this.props;
    const { pathname, search } = this.props.location;
    return (
      <div className={style.listWrapper}>
        <h1 className={style.listTitle}>{themeName}</h1>
        <div className={style.roomInfoWrapper}>
          {rooms.map(
            (room, index) =>
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
          )}
        </div>
        <Link to={`/`}>모두 보기</Link>
      </div>
    );
  }
}

export default withLoading(withSearch(withRouter(ListView)));
