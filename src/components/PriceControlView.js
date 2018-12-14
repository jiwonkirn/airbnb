import React, { Component } from 'react';
import style from './PriceControlView.module.scss';
import { withRouter } from 'react-router-dom';

class PriceControlView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className={style.priceContainer}>
        <h4 className={style.heading}>평균 1박 요금은 ₩70,000입니다.</h4>
        <section className={style.controller}>
          <div className={style.graph}>그래프</div>
        </section>
        <p className={style.priceRange}>
          <span className={style.minPrice}>₩10,000</span> -
          <span className={style.maxPrice}>₩800,000</span>
        </p>
        <button className={style.submitButton}>적용</button>
      </section>
    );
  }
}

export default withRouter(PriceControlView);
