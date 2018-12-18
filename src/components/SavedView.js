import React, { Component } from 'react';
import style from './SavedView.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import withCommonLoading from '../hoc/CommonLoading';

class SavedView extends Component {
  render() {
    const { savedRooms, filteredRooms, keyProps } = this.props;
    return (
      <section className={style.container}>
        <h2 className={style.heading}>목록</h2>
        <section
          className={classNames(style.savedContainer, { clearfix: true })}
        >
          <h3 className={style.savedHeading}>내 저장목록</h3>
          <span className={style.savedNumber}>
            {filteredRooms.length}개의 리스트
          </span>
          <ul className={style.savedList}>
            {filteredRooms.map(item => (
              <li className={style.item}>
                <Link to={'/saved/' + item[0]}>
                  <div
                    className={style.itemContainer}
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%), url(${
                        item[1][0].room_photos[0].room_photo
                      })`,
                    }}
                  >
                    <h4 className={style.itemTitle}>{item[0]}</h4>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
  }
}

export default withCommonLoading(SavedView);
