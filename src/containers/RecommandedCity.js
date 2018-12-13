import React, { Component } from 'react';
import RecommandedCityView from '../components/RecommandedCityView';

class RecommandedCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '에어비앤비 추천',
      lists: [
        '서울',
        '제주',
        '부산',
        '종로구',
        '해운대구',
        '중구',
        '마포구',
        '수영구',
      ],
      averagePrice: [81920, 91029, 82130, 63048, 92030, 72030, 82130, 63048],
    };
  }

  render() {
    const props = this.state;
    return <RecommandedCityView {...props} />;
  }
}

export default RecommandedCity;
