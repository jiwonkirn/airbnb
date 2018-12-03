import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
const { Provider, Consumer } = React.createContext();

class SearchProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      rooms: [],
      theme: '',
      handleSearch: this.handleSearch.bind(this),
    };
  }

  async componentDidMount() {}

  handleSearch(cityName) {
    this.setState({
      cityName,
      key: cityName,
    });
    this.props.history.push(`/search-list/?city__contains=${cityName}`);
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
