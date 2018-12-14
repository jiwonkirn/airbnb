import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PriceView from '../components/PriceView';

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <PriceView />;
  }
}

export default withRouter(Price);
