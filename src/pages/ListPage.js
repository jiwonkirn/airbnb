import React, { Component } from 'react';
import RoomList from '../containers/RoomList';
import SubSearchForm from '../containers/SubSearchForm';
import { withSearch } from '../contexts/SearchContext';

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ['price'],
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <section key={this.props.key}>
        <SubSearchForm />
        <RoomList theme={theme[0]} />
        <RoomList />
      </section>
    );
  }
}

export default withSearch(ListPage);
