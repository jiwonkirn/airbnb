import React, { Component } from 'react';
import style from './NotFound.module.scss';
import { Link } from 'react-router-dom';
import img from '../components/imgs/404-Airbnb.gif';

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className={style.container}>
        <section className={style.bodyContainer}>
          <h2 className={style.title}>죄송합니다.</h2>
          <p className={style.body}>원하시는 페이지를 찾을 수 없습니다.</p>
          <span className={style.errorCode}>오류코드: 404</span>
          <h3 className={style.otherLinksHeading}>
            다음은 도움이 될 만한 웹페이지의 링크입니다.
          </h3>
          <ul className={style.otherLinksList}>
            <li>
              <Link className={style.otherLinkItem} to="/">
                홈
              </Link>
            </li>
            <li>
              <Link className={style.otherLinkItem} to="/search-list/">
                검색
              </Link>
            </li>
          </ul>
        </section>
        <img className={style.notFoundImg} src={img} alt="404 Not Found" />
      </section>
    );
  }
}
