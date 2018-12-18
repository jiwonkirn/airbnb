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
    const theme = {
      서울: '대한민국의 수도, 아름다운 도시',
      마포구: '젊음의 도시, 아름다운 공원',
      중구: '서울 최고의 쇼핑 중심가,',
      강남: '예술과 산업이 공존한 도시',
      강남구: '예술과 산업이 공존한 도시',
      부산: '아름다운 바다를 품은 대한민국 제 2의 도시',
      해운대: '대한민국 최고의 피서지,',
      해운대구: '대한민국 최고의 피서지,',
      수영구: '광안리를 품은 도시,',
      수영: '광안리를 품은 도시,',
      제주: '대한민국 최고의 관광지, 아름다운 섬',
      제주도: '대한민국 최고의 관광지, 아름다운 섬',
      제주시: '대한민국 최고의 관광지, 아름다운 섬',
    };

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
              {theme[cityName] ? theme[cityName] : null}
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
