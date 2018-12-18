import React, { Component } from 'react';
import Main from '../containers/Main';
import RecommandedCity from '../containers/RecommandedCity';
import RoomList from '../containers/RoomList';
import { Helmet } from 'react-helmet';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      entries: [
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
    window.addEventListener('scroll', this.handlePush);
  }

  handlePush = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      this.state.cities.length < 8
    ) {
      const { cities, entries } = this.state;
      const citiesCopy = cities.slice();
      const entriesCopy = entries.slice();
      const random = Math.floor(Math.random() * entriesCopy.length);
      citiesCopy.push(entriesCopy.splice(random, 1));
      this.setState({
        cities: citiesCopy,
        entries: entriesCopy,
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePush);
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
