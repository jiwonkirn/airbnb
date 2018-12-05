import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const { Provider, Consumer } = React.createContext();

// 검색과 관련된 CONTEXT
class SearchProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '', // 도시 이흠
      poeple: 0,
      checkIn: '',
      checkOut: '',
      adult: 0,
      children: 0,
      infant: 0,
      rooms: [], // 방 정보
      // theme: '',
      key: '',
      handleSearch: this.handleSearch.bind(this),
      handleLinkToHome: this.handleLinkToHome.bind(this),
      handlePersonCapacitySearch: this.handlePersonCapacitySearch.bind(this),
      handleChange: this.handleChange.bind(this),
      handleInitialize: this.handleInitialize.bind(this),
      handlePeopleSearch: this.handlePeopleSearch.bind(this),
      handleHomeSearch: this.handleHomeSearch.bind(this),
    };
  }

  async componentDidMount() {
    this.refreshData();
  }

  componentDidUpdate() {
    if (this.state.key !== this.props.location.search) {
      this.refreshData();
    }
  }

  // 쿼리스트링을 통해 필터를 가져오는 메소드
  refreshData() {
    const { search } = this.props.location;
    const params = new URLSearchParams(search);
    const cityName = params.get('city__contains');
    const people = params.get('person_capacity__gte');
    const adult = params.get('adult');
    const children = params.get('children');
    const infant = params.get('infant');
    this.setState({
      cityName: cityName ? cityName : null,
      people: people ? parseInt(people) : 0,
      adult: adult ? parseInt(adult) : 0,
      children: children ? parseInt(children) : 0,
      infant: infant ? parseInt(infant) : 0,
      key: search,
    });
  }

  // 검색 키워드가 들어오면 주소를 바꾸고,
  // 리스트 컴포넌트를 다시 마운트시키는 메소드
  handleSearch(cityName) {
    this.props.history.push(`/search-list/?city__contains=${cityName}`);
    // this.refreshData();
  }

  // 리스트에서 인원을 탐색하는 메소드
  async handlePersonCapacitySearch(adult, children, infant) {
    const { cityName } = this.state;
    const people = adult + children;
    await this.props.history.push(
      `${this.props.location.pathname}?` +
        (cityName ? `&city__contains=${cityName}` : '') +
        `&adult=${adult}&children=${children}&infant=${infant}`
    );
    this.refreshData();
  }

  // 홈에서 전체검색을 하는 메소드
  async handleHomeSearch(cityName) {
    const { adult, children, infant } = this.state;
    const people = adult + children;
    await this.props.history.push(
      (this.props.location.pathname !== '/'
        ? `${this.props.location.pathname}?`
        : `search-list/?`) +
        (cityName ? `&city__contains=${cityName}` : '') +
        `&adult=${adult}&children=${children}&infant=${infant}`
    );
    this.refreshData();
  }

  // 인원을 컨트롤하는 메소드
  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleInitialize = () => {
    this.setState({
      adult: 0,
      children: 0,
      infant: 0,
    });
  };

  handlePeopleSearch = () => {
    const { adult, children, infant } = this.state;
    this.handlePersonCapacitySearch(adult, children, infant);
  };

  // 로고를 눌렀을 때 홈으로 돌아오게 하는 메소드
  handleLinkToHome() {
    this.props.history.push(`/`);
    this.refreshData();
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
