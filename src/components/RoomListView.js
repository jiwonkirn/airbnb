import React, { Component } from 'react';
import { ReactComponent as Star } from '../svg/star.svg';
import style from './RoomList.module.scss';
import { Link, withRouter } from 'react-router-dom';
import { withSearch } from '../contexts/SearchContext';
import withLoading from '../hoc/RoomListLoading';
import RoomListItemView from './RoomListItemView';

class ListView extends Component {
  render() {
    const { rooms } = this.props;
    const { themeName } = this.props;
    const { adult, infant, children } = this.props;
    return (
      <div className={style.listWrapper}>
        <h1 className={style.listTitle}>{themeName}</h1>
        <div className={style.roomInfoWrapper}>
          {rooms.map(room => (
            <Link
              key={room.pk}
              className={style.roomInfo}
              to={
                `/room-detail/${room.pk}` +
                (adult || infant || children
                  ? `?adult=${parseInt(adult)}&children=${parseInt(
                      children
                    )}&infant=${parseInt(infant)}`
                  : '')
              }
            >
              <RoomListItemView room={room} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default withLoading(withSearch(withRouter(ListView)));
