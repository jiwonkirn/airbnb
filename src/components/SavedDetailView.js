import React, { Component } from 'react';
import style from './SavedDetail.module.scss';
import { withRouter, Link } from 'react-router-dom';
import RoomListItemView from './RoomListItemView';
import DaumMap from './DaumMap';
import withCommonLoading from '../hoc/CommonLoading';
import { Helmet } from 'react-helmet';
import { withUser } from '../contexts/UserContext';
import { ReactComponent as Maps } from '../svg/map.svg';

class SavedDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      list: [],
      mobileMap: false,
    };
  }

  componentDidMount() {
    const rooms = this.props.filteredRooms.find(
      item => item[0] === this.props.match.params.city
    );
    this.setState({
      city: rooms[0],
      list: rooms[1],
    });
  }

  handleMobileMap = async () => {
    await this.setState(prev => {
      return { mobileMap: prev.mobileMap ? false : true };
    });
  };

  render() {
    const { city, list, mobileMap } = this.state;
    const { device } = this.props;
    return (
      <>
        <Helmet>
          <title>{city + '를 주제로 저장된 숙소 - FASTBNB'}</title>
        </Helmet>
        <section className={style.mainContainer}>
          <div className={style.header}>
            <Link className={style.toSavedList} to="/saved">
              전체목록
            </Link>
            <h2 className={style.headerHeading}>{city}</h2>
            <p className={style.headerBody}>입력된 날짜 없음, 게스트 1명</p>
            <button className={style.inviteButton}>다른 사람 초대하기</button>
          </div>
          <div className={style.body}>
            <span>숙소{list.length}개</span>
            <ul className={style.roomsList}>
              {list.map(room => (
                <li className={style.roomContainer}>
                  <Link to={'/room-detail/' + room.pk}>
                    <RoomListItemView room={room} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <DaumMap {...this.state} />
        {device === 'mobile' && (
          <button
            onClick={this.handleMobileMap}
            className={style.mobileMapButton}
          >
            {mobileMap ? '리스트' : '지도'}
            <Maps className={style.mapIcon} />
          </button>
        )}
      </>
    );
  }
}

export default withUser(withCommonLoading(withRouter(SavedDetailView)));
