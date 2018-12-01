import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const { Provider, Consumer } = React.createContext();

class SearchProvider extends Component {
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

const RouterSearchProvider = withRouter(SearchProvider);

function withSearch(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { RouterSearchProvider, Consumer as UserConsumer, withSearch };
