import React, { Component } from 'react';
import RoomList from '../containers/RoomList';
import SubSearchForm from '../containers/SubSearchForm';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withSearch } from '../contexts/SearchContext';
import RecommandedTheme from '../containers/RecommandedTheme';
import style from './ListPage.module.scss';

class ListPage extends Component {
  render() {
    const { cityName } = this.props;
    return (
      <>
        <Helmet>
          <title>{cityName + ' - FASTBNB'}</title>
        </Helmet>
        <section>
          <SubSearchForm />
          <section className={style.resultHeadingContainer}>
            <h2 className={style.result}>
              {'대한민국의 아름다운 섬,'}
              <span className={style.resultName}>{' ' + cityName}</span>에 대한
              검색결과입니다.
            </h2>
          </section>
          <RecommandedTheme />
          <RoomList key={this.props.location.search} />
        </section>
      </>
    );
  }
}

export default withSearch(withRouter(ListPage));
