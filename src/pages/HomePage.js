import React, { Component } from 'react';
import Main from '../containers/Main';
import RecommandedCity from '../containers/RecommandedCity';
import RoomList from '../containers/RoomList';
import { Helmet } from 'react-helmet';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        '서울',
        '부산',
        '제주도',
        '종로',
        '해운대',
        '마포구',
        '중구',
        '수영구',
      ],
      selected: '',
    };
  }

  componentDidMount() {
    const { cities } = this.state;
    let randomIndex = Math.floor(Math.random() * cities.length);
    //? 왜 이렇게 쓰나요
    this.setState({
      selected: cities[randomIndex],
    });
  }

  render() {
    const { cities } = this.state;
    return (
      <>
        <Helmet>
          <title>{'숙소, 트립, 장소를 모두 한 곳에서 - FASTBNB'}</title>
        </Helmet>
        <section>
          <Main />
          <RecommandedCity />
          {cities.map(item => (
            <RoomList key={item} theme={item} />
          ))}
        </section>
      </>
    );
  }
}
