import React, { Component } from 'react';
import style from './SubSearchForm.module.scss';
import PeopleControlView from './PeopleControlView';
import PriceControlView from './PriceControlView';
import Dates from '../containers/Dates';
import { withRouter } from 'react-router-dom';

let lastScrollY = window.scrollY;

class SubSearchFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleModal: false,
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80 && this.lastScrollY <= 80) {
      this.setState({
        sticky: true,
      });
    } else if (this.lastScrollY > 80 && currentScroll <= 80) {
      this.setState({
        sticky: false,
      });
    }
    this.lastScrollY = currentScroll;
  };

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
      <section
        style={this.state.sticky ? { position: 'fixed', top: '30px' } : null}
        className={style.filterNav}
      >
        <ul>
          <li className={style.date}>
            <Dates key={this.props.location.search} />
          </li>
          <PeopleControlView {...this.state} />
          <PriceControlView />
        </ul>
      </section>
    );
  }
}

export default withRouter(SubSearchFormView);
