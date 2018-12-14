import React, { Component } from 'react';
import RoomList from '../containers/RoomList';
import SubSearchForm from '../containers/SubSearchForm';
import { withSearch } from '../contexts/SearchContext';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ['price'],
    };
  }

  render() {
    const { theme } = this.state;
    const { cityName } = this.props;
    return (
      <>
        <Helmet>
          <title>{cityName + ' - FASTBNB'}</title>
        </Helmet>
        <section>
          <SubSearchForm />
          <RoomList theme={theme[0]} />
          <RoomList />
        </section>
      </>
    );
  }
}

export default withRouter(withSearch(ListPage));
