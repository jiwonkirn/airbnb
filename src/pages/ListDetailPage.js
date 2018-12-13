import React, { Component } from 'react';
import RoomList from '../containers/RoomList';
import SubSearchForm from '../containers/SubSearchForm';
import { withRouter } from 'react-router-dom';

class ListDetailPage extends Component {
  render() {
    return (
      <>
        <SubSearchForm />
        <RoomList key={this.props.location.search} />
      </>
    );
  }
}

export default withRouter(ListDetailPage);
