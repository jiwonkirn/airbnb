import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
const { Provider, Consumer } = React.createContext();

export default class SearchProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      rooms: [],
      theme: '',
    };
  }

  async componentDidMount() {}

  handleSearch(cityName) {
    this.setState({ cityName });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withSearch(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { SearchProvider, Consumer as UserConsumer, withSearch };
