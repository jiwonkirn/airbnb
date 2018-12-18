import React, { Component } from 'react';
import style from './SavedModal.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import withSmallCommonLoading from '../hoc/CommonSmallLoading';

class SavedModalItemView extends Component {
  render() {
    const { savedRooms, filteredRooms } = this.props;
    const savedItem = classNames(style.savedItem, { clearfix: true });
    return (
      <ul className={style.savedList}>
        {filteredRooms.map(
          (item, index) =>
            index <= 2 && (
              <li className={savedItem}>
                <Link to={`/saved/${item[0]}`} className={style.linkBody}>
                  <h3 className={style.itemTitle}>{item[0]}</h3>
                  <span className={style.itemCity}>{item[1].length}개</span>
                  <span className={style.itemPrice}>
                    {'평균 ' +
                      parseInt(
                        item[1].reduce((acc, p) => p.price + acc, 0) /
                          item[1].length
                      ) +
                      '원'}
                  </span>
                  <img
                    className={style.itemImage}
                    src={item[1][0].room_photos[0].room_photo}
                    alt={item[1][0].room_name}
                  />
                </Link>
              </li>
            )
        )}
        <li className={style.savedItem}>
          <Link to="/saved">목록 보기 ( {savedRooms.length} 개 )</Link>
        </li>
      </ul>
    );
  }
}

export default withSmallCommonLoading(SavedModalItemView);
