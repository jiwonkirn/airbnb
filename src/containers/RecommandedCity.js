import React, { Component } from 'react';
import RecommandedCityView from '../components/RecommandedCityView';
import api from '../api';

class RecommandedCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '에어비앤비 추천',
      lists: [
        '서울',
        '제주',
        '부산',
        '종로',
        '해운대',
        '중구',
        '마포구',
        '수영구',
      ],
      averagePrice: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { data: averagePrice } = await api.get('/api/home/average/');
    this.setState({
      averagePrice,
      loading: false,
    });
  }

  render() {
    const props = this.state;
    return <RecommandedCityView {...props} />;
  }
}

export default RecommandedCity;
