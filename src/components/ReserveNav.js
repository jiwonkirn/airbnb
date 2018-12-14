import React, { Component } from 'react';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as ArrowRight } from '../svg/arrowRight.svg';
import style from './ReserveNav.module.scss';
import { Link } from 'react-router-dom';
export default class ReserveNav extends Component {
  render() {
    return (
      <header className={style.reserveNav}>
        <Link to="/">
          <Logo className={style.logo} />
        </Link>
        <nav>
          <ul className={style.navList}>
            <li>
              1. 숙소 이용규칙 안내 <ArrowRight className={style.arrow} />
            </li>
            <li>
              2. 게스트 정보 안내 <ArrowRight className={style.arrow} />
            </li>
            <li>
              3. 확인 및 결제 <ArrowRight className={style.arrow} />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
