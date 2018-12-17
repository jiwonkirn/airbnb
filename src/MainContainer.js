import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MainContainer extends Component {
  componentDidUpdate = prevProps => {
    const { pathname } = this.props.location;
    if (pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  };
  render() {
    return <main className="mainSection">{this.props.children}</main>;
  }
}

export default withRouter(MainContainer);
