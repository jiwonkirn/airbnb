import React, { Component } from 'react';
import RoomListView from '../components/RoomListView';
import api from '../api';
import { withRouter } from 'react-router-dom';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      rooms: [],
      theme: '',
    };
  }

  async componentDidMount() {
    const { theme } = this.props;
    const params = new URLSearchParams(decodeURI(this.props.location.search));
    await params.append(
      'person_capacity__gte',
      parseInt(params.get('adult')) + parseInt(params.get('children'))
    );
    params.delete('adult');
    params.delete('children');
    params.delete('infant');
    const { data } = await api.get('/api/home/listings/', {
      params,
    });
    if (data.length === 0) console.log('자료가 없습니다.');
    if (theme === 'price') {
      const filteredData = data
        .sort((x, y) => x.price - y.price)
        .filter((item, index) => index < 8);
      this.setState({
        cityName: params.get('city__contains'),
        rooms: filteredData,
        themeName: '경제적으로 다녀오세요!',
      });
    } else {
      const filteredData = data.filter((item, index) => index < 8);
      this.setState({
        cityName: params.get('city__contains'),
        rooms: filteredData,
        themeName: params.get('city__contains')
          ? params.get('city__contains') + '의 추천 숙소'
          : '추천 숙소',
      });
    }
  }

  render() {
    const params = new URLSearchParams(decodeURI(this.props.location.search));
    const adult = params.get('adult');
    const children = params.get('children');
    const infant = params.get('infant');
    const value = {
      adult,
      children,
      infant,
    };
    return <RoomListView {...this.state} {...this.props} {...value} />;
  }
}

export default withRouter(RoomList);
