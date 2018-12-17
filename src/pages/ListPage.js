import React, { Component } from 'react';
import RoomList from '../containers/RoomList';
import SubSearchForm from '../containers/SubSearchForm';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withSearch } from '../contexts/SearchContext';

class ListDetailPage extends Component {
  render() {
    const { cityName } = this.props;
    return (
      <>
        <Helmet>
          <title>{cityName + ' - FASTBNB'}</title>
        </Helmet>
        <section>
          <SubSearchForm />
          <RoomList key={this.props.location.search} />
        </section>
      </>
    );
  }
}

export default withSearch(withRouter(ListDetailPage));
