import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import style from './PriceControlView.module.scss';
import PriceControlView from './PriceControlView';

class PriceView extends Component {
  render() {
    return (
      <li className={style.PriceControlContainer}>
        가격
        <PriceControlView />
      </li>
    );
  }
}

export default withRouter(PriceView);
