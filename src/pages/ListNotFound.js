import React, { Component } from 'react';
import RecommandedCity from '../containers/RecommandedCity';
import RoomList from '../containers/RoomList';
import style from './ListNotFound.module.scss';
import { withSearch } from '../contexts/SearchContext';
import { Helmet } from 'react-helmet';

class ListNotFound extends Component {
  render() {
    const { cityName } = this.props;
    return (
      <>
        <Helmet>
          <title>{'검색결과가 없습니다. - FASTBNB'}</title>
        </Helmet>
        <section class={style.container}>
          <h2>검색 결과가 없습니다</h2>
          <p>
            검색 조건과 일치하는 결과가 없습니다. 다른 키워드로 검색해보세요.
          </p>
        </section>
        <RecommandedCity />
        <RoomList />
      </>
    );
  }
}

export default withSearch(ListNotFound);
