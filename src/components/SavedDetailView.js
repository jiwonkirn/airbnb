import React, { Component } from 'react';
import style from './SavedDetailView.module.scss';
import { withRouter, Link } from 'react-router-dom';
import RoomListItemView from './RoomListItemView';

class SavedDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      list: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.filteredRooms !== prevProps.filteredRooms) {
      const rooms = this.props.filteredRooms.find(
        item => item[0] === this.props.match.params.city
      );
      this.setState({
        city: rooms[0],
        list: rooms[1],
      });
    }
  }

  render() {
    const { city, list } = this.state;
    return (
      <>
        <section className={style.mainContainer}>
          <div className={style.haeder}>
            <Link to="/saved">전체목록</Link>
            <h2>{city}</h2>
            <p>입력된 날짜 없음, 게스트 1명</p>
          </div>
          <div className={style.body}>
            <span>숙소{list.length}개</span>
            <ul className="roomsList">
              {list.map(room => (
                <li>
                  <Link to={'/room-detail/' + room.pk}>
                    <RoomListItemView room={room} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={style.mapContainer} />
      </>
    );
  }
}

export default withRouter(SavedDetailView);
