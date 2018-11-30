import React, { Component } from 'react';
import RecommandedCity from '../containers/RecommandedCity';
import RoomList from '../containers/RoomList';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: ['마포구', '중구'],
      selected: '',
    };
  }

  componentDidMount() {
    const { cities } = this.state;
    let randomIndex = Math.floor(Math.random() * cities.length);
    this.setState({
      selected: cities[randomIndex],
    });
  }

  render() {
    return (
      <section>
        <RecommandedCity />
        <RoomList />
      </section>
    );
  }
}
