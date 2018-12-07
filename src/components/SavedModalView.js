import React, { Component } from 'react';
import style from './SavedModal.module.scss';
import { Link } from 'react-router-dom';
import { withUser } from '../contexts/UserContext';
import classNames from 'classnames';

class SavedModal extends Component {
  render() {
    const { savedRooms } = this.props;
    const savedItem = classNames(style.savedItem, { clearfix: true });
    return (
      <section key={this.props.keyProp} className={style.savedModalContainer}>
        <div className={style.titleContainer}>
          <h2 className={style.title}>목록</h2>
          <span className={style.linkToList}>닫기</span>
        </div>
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
                      src={item.roominfo.room_photo_1}
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
        {/* <div className={style.background} onClick={this.props.onSavedModal} /> */}
      </section>
    );
  }
}

export default withUser(SavedModal);
