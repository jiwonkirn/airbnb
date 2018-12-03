import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
const { Provider, Consumer } = React.createContext();

// 검색과 관련된 CONTEXT
class SearchProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '', // 도시 이흠
      rooms: [], // 방 정보
      // theme: '',
      handleSearch: this.handleSearch.bind(this),
      handleLinkToHome: this.handleLinkToHome.bind(this),
    };
  }

  async componentDidMount() {}

  // 검색 키워드가 들어오면 주소를 바꾸고,
  // 리스트 컴포넌트를 다시 마운트시키는 메소그
  handleSearch(cityName) {
    this.setState({
      cityName,
      key: cityName,
    });
    this.props.history.push(`/search-list/?city__contains=${cityName}`);
  }

  // 로고를 눌렀을 때 홈으로 돌아오게 하는 메소드
  handleLinkToHome() {
    this.setState({
      cityName: '',
    });
    this.props.history.push('/');
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
