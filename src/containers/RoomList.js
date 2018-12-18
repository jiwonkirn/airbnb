import React, { Component } from 'react';
import RoomListView from '../components/RoomListView';
import api from '../api';
import { withRouter } from 'react-router-dom';

class RoomList extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      rooms: [],
      theme: '',
      loading: true,
      offset: 0,
      hasMore: true,
    };
  }

  async componentDidMount() {
    this.loadData(0);

    if (this.props.location.pathname === '/search-list') {
      window.onscroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight &&
          this.state.hasMore
        ) {
          console.log(this.state.offset);
          this.loadData(this.state.offset);
        }
      };
    }
  }

  loadData = async offset => {
    this._isMounted = true;

    const { theme } = this.props;
    const params = new URLSearchParams(decodeURI(this.props.location.search));
    if (params.get('adult') || params.get('children') || params.get('infant')) {
      await params.append(
        'person_capacity__gte',
        parseInt(params.get('adult')) + parseInt(params.get('children'))
      );
    }
    params.delete('adult');
    params.delete('children');
    params.delete('infant');
    params.delete('checkin');
    params.delete('checkout');
    params.append('limit', 20);
    params.append('offset', offset);
    if (theme && !params.get('public_address__contains')) {
      params.append('public_address__contains', theme);
    }
    try {
      const {
        data: { results: data },
      } = await api.get('/api/home/listings/', {
        params,
      });
      if (offset === 0 && data.length === 0) {
        this.props.history.replace('/search-list/not-found');
      } else if (data.length === 0) {
        this.setState({
          hasMore: false,
        });
      } else if (offset !== 0) {
        this.setState(prev => {
          return {
            rooms: prev.rooms.concat(data),
            offset: prev.offset + 20,
          };
        });
      } else {
        if (this._isMounted) {
          this.setState(prev => {
            return {
              rooms: data,
              themeName: theme
                ? theme + '의 추천 숙소'
                : params.get('public_address__contains')
                ? params.get('public_address__contains') + '의 추천 숙소'
                : '추천 숙소',
              offset: prev.offset + 20,
            };
          });

          await this.setState({
            loading: false,
          });
        }
      }
    } catch (e) {
      this.props.history.push('/notFound');
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const params = new URLSearchParams(decodeURI(this.props.location.search));
    const adult = params.get('adult');
    const children = params.get('children');
    const infant = params.get('infant');
    const checkin = params.get('checkin');
    const checkout = params.get('checkout');
    const value = {
      adult,
      children,
      infant,
      checkin,
      checkout,
    };
    return <RoomListView {...this.state} {...this.props} {...value} />;
  }
}

export default withRouter(RoomList);
