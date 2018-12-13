import React, { Component } from 'react';
import style from './SavedModal.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import withSmallCommonLoading from '../hoc/CommonSmallLoading';

class SavedModalItemView extends Component {
  render() {
    const { savedRooms } = this.props;
    const savedItem = classNames(style.savedItem, { clearfix: true });
    return (
      <ul className={style.savedList}>
        {savedRooms.map(
          (item, index) =>
            index <= 2 && (
              <li className={savedItem}>
                <Link to="/saved" className={style.linkBody}>
                  <h3 className={style.itemTitle}>{item.room_name}</h3>
                  <span className={style.itemCity}>{item.city}</span>
                  <span className={style.itemPrice}>₩{item.price}</span>
                  <img
                    className={style.itemImage}
                    src={item.room_photos[0].room_photo}
                    alt={item.room_name}
                  />
                </Link>
              </li>
            )
        )}
        <li className={style.savedItem}>
          <Link to="/">목록 보기 ( {savedRooms.length} 개 )</Link>
        </li>
      </ul>
    );
  }
}

export default withSmallCommonLoading(SavedModalItemView);
