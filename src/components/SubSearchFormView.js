import React, { Component } from 'react';
import style from './SubSearchForm.module.scss';
import PeopleControlView from './PeopleControlView';

export default class SubSearchFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleModal: false,
    };
  }

  handlePeople = () => {
    const { peopleModal } = this.state;
    if (peopleModal) {
      this.setState({
        peopleModal: false,
      });
    } else {
      this.setState({
        peopleModal: true,
      });
    }
  };

  render() {
    return (
      <section className={style.filterNav}>
        <ul>
          <li>날짜</li>
          <PeopleControlView />
        </ul>
      </section>
    );
  }
}
