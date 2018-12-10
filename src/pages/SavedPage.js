import React, { Component } from 'react';
import Saved from '../containers/Saved';
import { withUser } from '../contexts/UserContext';

class SavedPage extends Component {
  render() {
    return <Saved key={this.props.logined} />;
  }
}

export default withUser(SavedPage);
